import { reactive } from 'vue';
import type { NotyItem, NotyOptions, NotyType } from '@/core/types';

const defaults: Required<NotyOptions> = {
	position: 'top-center',
	autoClose: 3000,
	progress: true,
};

let idCounter = 1;

export const store = reactive({
	options: { ...defaults } as Required<NotyOptions>,
	items: [] as NotyItem[],
});

function makeOptions(opts?: NotyOptions): Required<NotyOptions> {
	return { ...store.options, ...(opts || {}) };
}

function push(type: NotyType, title: string, opts?: NotyOptions) {
	const options = makeOptions(opts);
	const item: NotyItem = {
		id: idCounter++,
		type,
		title,
		options,
		createdAt: Date.now(),
	};
	store.items.push(item);

	if (options.autoClose !== false) {
		setTimeout(() => remove(item.id), options.autoClose);
	}
}

export function remove(id: number) {
	const i = store.items.findIndex(t => t.id === id);
	if (i !== -1) store.items.splice(i, 1);
}

export function clear() {
	store.items.splice(0, store.items.length);
}

export function setDefaults(opts: NotyOptions) {
	store.options = { ...store.options, ...opts };
}

export const api = {
	success: (title: string, opts?: NotyOptions) => push('success', title, opts),
	error: (title: string, opts?: NotyOptions) => push('error', title, opts),
	warning: (title: string, opts?: NotyOptions) => push('warning', title, opts),
	info: (title: string, opts?: NotyOptions) => push('info', title, opts),

	options: (opts: NotyOptions) => setDefaults(opts),
	clear,
	setDefaults,
	getNotifications: () => store.items.slice(),
};
