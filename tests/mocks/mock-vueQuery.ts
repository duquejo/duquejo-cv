import { VueQueryPlugin } from '@tanstack/vue-query';

const createVueQuery = (app) => VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        enabled: false,
      }
    }
  }
});

export default createVueQuery;