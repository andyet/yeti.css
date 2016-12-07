# yeti.css

yeti.css is a pattern library consisting of lightweight, reusable modules. It has been built to reflect &yet's visual and branding guidelines.

## Table of Contents

* [How To Run](https://github.com/andyet/yeticss#how-to-run)
* [Structure](https://github.com/andyet/yeticss#structure)
* [How To Include In Your App](https://github.com/andyet/yeticss#how-to-include-in-your-app)
* [Custom Fonts](https://github.com/andyet/yeticss/#custom-fonts)
* [CSS Reset](https://github.com/andyet/yeticss#css-reset)
* [Documentation](https://github.com/andyet/yeticss#documentation)
* [Contributing](https://github.com/andyet/yeticss#contributing)
* [License](https://github.com/andyet/yeticss#license)

## How to run?

For development mode:

```
npm install
npm start
```

The demo site will be available at `http://localhost:8080`. You can use the [livereload extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) and files will automatically rebuild and reload in the browser when you change them.

## Structure
yeti.css is located in `lib/yeticss` and can be installed through [npm](https://www.npmjs.org/). Variables and mixins can be found in `lib/yeticss/globals` and components in `lib/yeticss/components`. Markup for each component lives in `public/templates`.

Note: installing yeticss **will not** include `assets` or `public`.

```
├── assets
│   ├── logos
│   └── swatches
├── lib
│   └── yeticss
│       ├── components
│       ├── globals
│       └── index.styl
└── public
    ├── css
    ├── images
    ├── js
    ├── styl
    └── templates
```

## How to include in your app

yeti.css is a [Stylus](http://learnboost.github.io/stylus/) plugin, so you just need to ensure Stylus knows to use the plugin, and then import it in your app.

Make sure that you have `stylus` available from command line:

```
npm install -g stylus
```

### Static sites

If you are compiling your Stylus with its command line interface, maybe directly or via a Makefile or similar, it's as easy as:

1. `npm install yeticss --save-dev`
2. Add "-u yeticss" to the command: `stylus -u yeticss ./path/to/app.styl`
3. Now you can import yeticss, or a subcomponent of yeticss, in your app's .styl files:

    ```stylus
    @import 'yeticss'
    // or
    @import 'yeticss/components/type'
    ````

### Single page apps using webpack

> NOTE: if you are using webpack 2, check here for how to add stylus plugins with stylus-loader: https://github.com/shama/stylus-loader#webpack-2

To add yeticss to a webpack application, simply `npm install yeticss --save-dev` and then add it to the stylus `use` list as supported by [stylus-loader](https://github.com/shama/stylus-loader#stylus-plugins).

For example:

```javascript
// in webpack.config.js

// import yeticss somewhere in the file
var yeticss = require('yeticss');

module.exports = {
  //... other webpack config ...

  module: {
    loaders: [
      // configure stylus loader however you prefer
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
    ]
  },

  // configure stylus loader to use the yeticss plugin
  stylus: {
    use: [yeticss()]
  }
};

```

```css
/* now in your app.styl you can: */
@import 'yeticss'
```


## Custom fonts
yeti.css defines several custom fonts. Use Typography.com or Typekit to set up font serving accordingly or change the typeface variables [here](https://github.com/andyet/yeti.css/blob/gh-pages/lib/yeticss/globals/_variables.styl#L17-L22).


## CSS Reset

A CSS reset is **included** in yeti.css by default (namely [normalize.css](https://github.com/necolas/normalize.css)).

## Documentation
Documentation and examples of usage can be found on [yeticss.com](http://yeticss.com).


## Contributing
See the [CONTRIBUTING.md](https://github.com/andyet/yeti.css/blob/gh-pages/CONTRIBUTING.md) for information on how to contribute to yeti.css.

## License
MIT
