import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import Translation from '../../../src/i18n/TranslationClass';

describe('Translation', () => {

  let translation: Translation;

  beforeEach(() => {
    // Arrange
    vi.stubEnv('VITE_I18N_SUPPORTED_LOCALE', 'es,en,fr-FR');
    translation = Translation.getInstance();
    vi.resetModules();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return user persisted locale if it is supported', () => {
    // Arrange
    const localStorageGetItemMock = vi
      .spyOn(Storage.prototype, 'getItem')
      .mockReturnValue('en');

    // Act
    translation.defineDefaultLocale();

    // Assert
    expect(translation.currentLocale).toBe('en');
    expect(translation.fallbackLocale).toBe('es');
    expect(localStorageGetItemMock).toHaveBeenCalledWith('user-locale');
  });

  it('should return user preferred locale if it supports the short locale and there is no persisted locale', () => {
    // Arrange
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);
    Object.defineProperty(window.navigator, 'language', {
      value: 'en-US',
      configurable: true,
    });

    // Act
    translation.defineDefaultLocale();

    // Assert
    expect(translation.currentLocale).toBe('en');
  });

  it('should return user preferred locale if it supports the long locale and there is no persisted locale', () => {
    // Arrange
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);
    Object.defineProperty(window.navigator, 'language', {
      value: 'fr-FR',
      configurable: true,
    });

    // Act
    translation.defineDefaultLocale();

    // Assert
    expect(translation.currentLocale).toBe('fr-FR');
  });

  it('should return default locale if no persisted or preferred locales are supported', () => {
    // Arrange
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);
    Object.defineProperty(window.navigator, 'language', {
      value: 'ja-CL',
      configurable: true,
    });

    // Act
    translation.defineDefaultLocale();

    // Assert
    expect(translation.currentLocale).toBe('es');
  });


  it('should change the current language if its supported', () => {

    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('en');

    const localStorageSetItemMock = vi.spyOn(Storage.prototype, 'setItem');

    // Act
    translation.defineDefaultLocale();
    
    translation.switchLanguage('es');
    
    expect(localStorageSetItemMock).toHaveBeenCalled();
    expect(localStorageSetItemMock).toHaveBeenCalledWith('user-locale', 'es');
  });
});