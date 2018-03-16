<h2 align="center">Install</h2>

```bash
    npm install --save-dev webpack-pwa-icons-plugin
```
<h2 align="center">Usage</h2>

**webpack.config.js**
```js
const WebpackPWAIconsPlugin = require('webpack-pwa-icons-plugin')

const options = {
  iconUrl: 'public/img/icons/logo.svg', // Define the url to the icon, which you want to use for generation
  backgroundColor: "#376eab", // Define backgroundColor you want to use for Platforms, which doesn't support transparency
  outputDir: 'dist/img/icons/', // Define Output directory
}

const config = {
  plugins: [
    new WebpackPWAIconsPlugin(options)
  ]
}

```

<h2 align="center">Additional Options</h2>

**extend** 

You can extend the default Presets with own icon definitions, to generate them:
```
  extend: [
    {size: 150, filename: 'custom-icon.png', background: false},
    {size: 180, filename: 'custom-icon-ios.png', background: true}
  ]
```

**custom** 

You can replace the default Presets with own icon definitions, to generate them:
```
  [
    {size: 150, filename: 'custom-icon.png', background: false},
    {size: 180, filename: 'custom-icon-ios.png', background: true}
  ]
```

You can't use extend and custom at the same time.