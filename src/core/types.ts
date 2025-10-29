export type NotyType = 'success' | 'error' | 'warning' | 'info';
export type NotyPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export interface NotyOptions {
	position?: NotyPosition;
	autoClose?: number | false;
	progress?: boolean;
}

export interface NotyItem {
	id: number;
	type: NotyType;
	title: string;
	options: Required<NotyOptions>;
	createdAt: number;
}
