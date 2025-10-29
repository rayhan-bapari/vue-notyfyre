import type { App } from 'vue';
import { api } from '@/core/service';

declare module 'vue' {
  interface ComponentCustomProperties {
    $notyfyre: typeof api;
  }
}

export default {
  install(app: App) {
    app.config.globalProperties.$notyfyre = api;
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.notyfyre = api;
    }
  }
};

export { api as notyfyre };
