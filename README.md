# yeticss

Yeticss is a pattern library consisting of lightweight, reusable modules. It has been built to reflect &yet's visual and branding guidelines.

## Table of Contents

* [How To Run](https://github.com/andyet/yeticss#how-to-run)
* [Structure](https://github.com/andyet/yeticss#structure)
* [How To Include In Your App](https://github.com/andyet/yeticss#how-to-include-in-your-app)
* [Custom Fonts](https://github.com/andyet/yeticss#custom-fonts)
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

The demo site will be available at http://localhost:8080. You can use the [livereload extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) and files will automatically rebuild and reload in the browser when you change them.

## Structure
Yeticss is located in `lib/yeticss` and can be installed through [npm](https://www.npmjs.org/). Variables and mixins can be found in `yeticss/globals` and components in `yeticss/components`. Markup for each component lives in `public/templates`.

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

Yeticss is a stylus plugin, so you just need to ensure stylus knows to use the plugin, and then import it in your app.

Make sure that you have `stylus` available from command line:

```
npm install -g stylus
```

### Static sites

If you are compiling your stylus with the stylus command line interface, maybe directly or via a Makefile or similar, it's as easy as:

1. `npm install yeticss --save-dev`
2. Add "-u yeticss" to the command: `stylus -u yeticss ./path/to/app.styl`
3. Now you can import yeticss, or a subcomponent of yeticss, in your app's .styl files:

    ```stylus
    @import 'yeticss'
    // or
    @import 'yeticss/_mixins'
    ````

### Single page apps using moonboots

The simplest way to include yeticss in a moonboots app is to use [stylizer](https://github.com/latentflip/stylizer);

1. `npm install yeticss --save`
2. Add 'yeticss' to the list of plugins in stylizer in your beforeCSS moonboots build step:

    ```javascript
    beforeBuildCSS: function (done) {
        var plugins = ['yeticss'];

        if (config.isDev) {
            stylizer(stylesheetsDir + '/app.styl', stylesheetsDir + '/app.css', plugins, done);
        }
    },
    ```

3. Import yeticss or a submodule of yeticss in your app's .styl files:

    ```stylus
    @import 'yeticss'
    //or
    @import 'yeticss/_variables'
    ```

### Gotchas:

Because this is an npm module, but isn't on npm, management of it is a little tricker.

* **Deployment:** If you are deploying your app, Bear will also need to setup deploy keys for the andyet/yeticss repo, so that npm can grab yeticss from the private repo. This is why you should use "git+ssh://git@github.com/andyet/yeticss" in your package.json to reference yeticss.

* **Version Pinning:** It's __**strongly**__ recommended that you pin to a specific version of yeticss, so that updates to the styleguide don't break your site. To do that, reference a specific tagged release in your package.json by appending #<tagname> to the git url, e.g.:

    ```js
        //package.json

        {
            //...
            "dependencies": {
                "yeticss": "git+ssh://git@github.com/andyet/yeticss#v0.1.0"
            },
            //...
        }
    ```

You can see the list of available releases at: [https://github.com/andyet/yeticss/releases](https://github.com/andyet/yeticss/releases).

## Custom fonts
Yeticss defines [Gotham](http://www.typography.com/fonts/gotham/overview/) and [Sentinel](http://www.typography.com/fonts/sentinel/overview/) as its default typefaces. Use Typography.com to set up font serving accordingly or change the typeface variables [here](https://github.com/andyet/yeticss/blob/gh-pages/lib/yeticss/globals/_variables.styl#L13-L14).

## CSS Reset

By default, CSS reset is **not** included in yeticss. Please add [normalize.css](https://raw.githubusercontent.com/necolas/normalize.css/master/normalize.css) separately.

## Documentation

Documentation and examples of usage can be found on [Github Pages](http://andyet.github.io/yeticss/).

## Contributing
See the [CONTRIBUTING.md](https://github.com/andyet/yeticss/blob/gh-pages/CONTRIBUTING.md) for information on how to contribute to yeti.css.

## License
MIT
