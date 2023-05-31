Object.defineProperty(exports, "__esModule", { value: true });
const devcert = require('devcert');
exports.default = (options) => {
    return {
        name: 'vite-plugin-devcert',
        config: async (config, env) => {
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
                };
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
            }
            catch (err) {
                console.error('vite-plugin-devcert', err);
            }
            console.warn('vite-plugin-devcert: Failed to create certificate, you can set the certificate by configuring');
            return {};
        },
    };
};
