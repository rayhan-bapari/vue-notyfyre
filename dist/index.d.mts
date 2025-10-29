import { App } from 'vue';
export { default as NotyfyreContainer } from '@/components/NotyfyreContainer.vue';

type NotyType = 'success' | 'error' | 'warning' | 'info';
type NotyPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
interface NotyOptions {
    position?: NotyPosition;
    autoClose?: number | false;
    progress?: boolean;
}
interface NotyItem {
    id: number;
    type: NotyType;
    title: string;
    options: Required<NotyOptions>;
    createdAt: number;
}

declare function clear(): void;
declare function setDefaults(opts: NotyOptions): void;
declare const api: {
    success: (title: string, opts?: NotyOptions) => void;
    error: (title: string, opts?: NotyOptions) => void;
    warning: (title: string, opts?: NotyOptions) => void;
    info: (title: string, opts?: NotyOptions) => void;
    options: (opts: NotyOptions) => void;
    clear: typeof clear;
    setDefaults: typeof setDefaults;
    getNotifications: () => {
        id: number;
        type: NotyType;
        title: string;
        options: {
            position: NotyPosition;
            autoClose: number | false;
            progress: boolean;
        };
        createdAt: number;
    }[];
};

declare module 'vue' {
    interface ComponentCustomProperties {
        $notyfyre: typeof api;
    }
}
declare const _default: {
    install(app: App): void;
};

export { type NotyItem, type NotyOptions, type NotyPosition, type NotyType, _default as default, api as notyfyre };
