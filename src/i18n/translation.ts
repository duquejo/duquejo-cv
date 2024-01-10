export class Translation {

  private static instance: Translation;

  private _defaultLocale: string;
  private _currentLocale: string;
  private _supportedLocales: string[];
  private _fallbackLocale: string;

  private constructor() {
    this._currentLocale = import.meta.env.VITE_I18N_LOCALE || 'es';
    this._supportedLocales = import.meta.env.VITE_I18N_SUPPORTED_LOCALE?.split(',') || ['es', 'en'];
    this._defaultLocale = import.meta.env.VITE_I18N_LOCALE || 'es';
    this._fallbackLocale = import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'es';
  }

  public static getInstance(): Translation {
    if( ! Translation.instance ) {
      Translation.instance = new Translation();
    }
    return Translation.instance;
  }

  public get currentLocale() {
    return this._currentLocale;
  }

  public get fallbackLocale() {
    return this._fallbackLocale;
  }

  /**
   * The function defines the default locale based on the user's persisted locale, preferred locale, and
   * fallback to the default locale.
   * @returns The function `defineDefaultLocale()` returns the default locale as a fallback if none of
   * the user's preferred locales are supported.
   */
  public defineDefaultLocale() {
    const userPersistedLocale = this.getPersistedLocale();

    if (userPersistedLocale) {
      this._currentLocale = userPersistedLocale;
      return;
    }

    const userPreferredLocale = this.getUserLocale(); // Retrieves data from navigator.

    if (this.isLocaleSupported(userPreferredLocale.locale)) {
      this._currentLocale = userPreferredLocale.locale;
      return;
    }

    if (this.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
      this._currentLocale = userPreferredLocale.localeNoRegion;
      return;
    }
    
    this._currentLocale = this._defaultLocale; // Default fallback
  }

  /**
   * The function `getUserLocale` returns the user's locale and locale without region.
   * @returns The function `getUserLocale()` returns an object with two properties: `locale` and
   * `localeNoRegion`. The `locale` property contains the user's locale, which is obtained from
   * `window.navigator.language` or a default locale if it is not available. The `localeNoRegion`
   * property contains the user's locale without the region part, obtained by splitting the `locale`
   * string at the '-'
   */
  public getUserLocale() {
    const locale = window.navigator.language || this._defaultLocale;
    return {
      locale,
      localeNoRegion: locale.split('-')[0],
    };
  }

  /**
   * The function `getPersistedLocale` retrieves the persisted user locale from local storage if it is
   * supported, otherwise it returns null.
   * @returns The function `getPersistedLocale()` returns the persisted locale value if it exists in the
   * localStorage and is supported, otherwise it returns null.
   */
  public getPersistedLocale() {
    const persistedLocale = localStorage.getItem('user-locale');
    if (persistedLocale && this.isLocaleSupported(persistedLocale)) {
      return persistedLocale;
    }
    return null;
  }

  /**
   * The function checks if a given locale is supported.
   * @param {string} locale - A string representing the locale to check if it is supported.
   * @returns A boolean value indicating whether the given locale is supported or not.
   */
  public isLocaleSupported(locale: string): boolean {
    return this._supportedLocales.includes(locale);
  }

  /**
   * The function `switchLanguage` is an asynchronous function that takes a new locale as a parameter and
   * updates the current locale, sets the HTML attribute 'lang' to the new locale for SEO support, and
   * stores the new locale in the user's local storage for persistence.
   * @param {string} newLocale - The newLocale parameter is a string that represents the new
   * language/locale that the user wants to switch to.
   */
  public async switchLanguage(newLocale: string): Promise<void> {
    this._currentLocale = newLocale;
    document.querySelector('html')?.setAttribute('lang', newLocale); // SEO Support.
    localStorage.setItem('user-locale', newLocale); // Persistency
  }
};