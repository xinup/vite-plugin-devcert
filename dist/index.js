const devcert = require('devcert');

var index = (options) => {
    return {
        name: 'vite-plugin-devcert',
        config: async (config, env) => {
            if (options && options.ssl) {
                return {
                    server: {
                        https: {
                            key: options.ssl.key,
                            cert: options.ssl.cert
                        }
                    }
                }
            }

            try {
                const ssl = await devcert.certificateFor(options && options.domain || 'localhost');
                if (ssl && ssl.cert && ssl.key) {
                    return {
                        server: {
                            https: {
                                key: ssl.key,
                                cert: ssl.cert
                            }
                        }
                    }
                }
            } catch (error) {
                console.error('vite-plugin-devcert', error);
            }

            console.warn('vite-plugin-devcert: Failed to create certificate, you can set the certificate by configuring');
            return {}
        }
    }
};

export { index as default };
