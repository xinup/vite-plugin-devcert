import type { Plugin } from 'vite';
type OptionsTypes = {
    domain?: string | string[] | undefined;
    ssl?: {
        key: string;
        cert: string;
    };
};
declare const _default: (options: OptionsTypes) => Plugin;
export default _default;
