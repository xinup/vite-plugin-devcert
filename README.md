# vite-plugin-devcert



```
npm i vite-plugin-devcert
```

```
// vite.config.js
import devcert from 'vite-plugin-devcert';

export default {
    plugins: [
        devcert(),
    ]
};
```

The default domain is localhost. If you want to customize it, you can set it through domain

```
// vite.config.js
import devcert from 'vite-plugin-devcert';

export default {
    plugins: [
        devcert({
            domain: 'test.com'
        }),
    ]
};
```

If you want to pass in your own HTTPS certificate, please do so here


```
// vite.config.js
import devcert from 'vite-plugin-devcert';

export default {
    plugins: [
        devcert({
            ssl: {
                key: '',
                cert: ''
            }
        }),
    ]
};
```


