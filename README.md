# &yet's Style

&amp;yet visual style, branding assets, CSS components.

## How to include in your app

The simplest way to include style in a moonboots app is to use [stylizer](https://github.com/latentflip/stylizer);

1. `npm install git+ssh://git@github.com/andyet/style --save`
2. Add 'style' to the list of plugins in stylizer in your beforeCSS moonboots build step:

    ```javascript
    beforeBuildCSS: function (done) {
        var plugins = ['style'];

        if (config.isDev) {
            stylizer(stylesheetsDir + '/app.styl', stylesheetsDir + '/app.css', plugins, don     e);
        }
    },
    ```

3. Import style or a submodule of style in your app's .styl files:

    ```stylus
    @import 'style'
    //or
    @import 'style/_mixins'
    ```

## How to run?

For quickly accessing the demo page fire up the server with [http-server](https://github.com/nodeapps/http-server) in root directory:
```
http-server ./public
```

## Folder structure
For the sake of being easily accessible &ndash; all CSS sources are kept in `lib/style`, while example `jade` templates live in `public/templates/name-of-the-module.jade`.

Other assets like logos are available in `assets`. Note that you should not need to worry about the included font files, as they are being served from S3 already.


## Documentation and Usage

* [Basic](https://github.com/andyet/style/wiki/Basic)
* [Typography](https://github.com/andyet/style/wiki/Typography)
* [Colors](https://github.com/andyet/style/wiki/Colors)
* [Forms](https://github.com/andyet/style/wiki/Forms)
* [Buttons](https://github.com/andyet/style/wiki/Buttons)
* [Navigation](https://github.com/andyet/style/wiki/Navigation)
* [Modals](https://github.com/andyet/style/wiki/Modals)
* [Media](https://github.com/andyet/style/wiki/Media)
* [Messages and Notifications](https://github.com/andyet/style/wiki/Messages-and-Notifications)
* [Progress Bars](https://github.com/andyet/style/wiki/Progress-bars)
* [Tables](https://github.com/andyet/style/wiki/Tables)
* [Avatars](https://github.com/andyet/style/wiki/Avatars)


## Logos

All logos are saved in web-friendly and super optimized `SVG` format.

* &yet
* &yet Labs
* &!
* OTalk
* ^Lift


## Contributing

To rebuild the demo files run:

```sh
npm install #To install dependencies if you haven't already
npm run build #compiles public/css/demo.css, and public/index.html
```


## To do

- Collection of stock product screenshots
