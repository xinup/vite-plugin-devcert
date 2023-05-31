import type { Plugin } from 'vite';
const devcert = require('devcert');


type OptionsTypes = {
    domain?: string | string[] | undefined,
    ssl?: {
        key: string;
        cert: string;
    }
}

export default (options: OptionsTypes): Plugin => {
    return {
        name: 'vite-plugin-devcert',
        config: async (config: any, env: any) => {
            if (env.command !== 'serve') {
                return;
            }
            if (options && options.ssl) {
                return {
                    server: {
                        https: {
                            // @ts-ignore
                            key: ssl.key,
                            // @ts-ignore
                            cert: ssl.cert,
                        }
                    }
                }
            }
            try {
                const ssl = await devcert.certificateFor(options && options.domain || ['localhost']);
                if (ssl && ssl.cert && ssl.key) {
                    return {
                        server: {
                            https: {
                                key: ssl.key,
                                cert: ssl.cert,
                            }
                        }
                    };
                }
            } catch (err) {
                console.error('vite-plugin-devcert', err);
            }
            console.warn('vite-plugin-devcert: Failed to create certificate, you can set the certificate by configuring')
            return {};
        },
    };
};