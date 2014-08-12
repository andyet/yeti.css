# &yet's Style

&amp;yet visual style, branding assets, CSS components. For reset use [normalize.css](https://raw.githubusercontent.com/necolas/normalize.css/master/normalize.css).

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

### Gotchas:

Because this is an npm module, but isn't on npm, management of it is a little tricker.

* **Deployment:** If you are deploying your app, Bear will also need to setup deploy keys for the andyet/style repo, so that npm can grab style from the private repo. This is why you should use "git+ssh://git@github.com/andyet/style" in your package.json to reference style.

* **Version Pinning:** It's __**strongly**__ recommended that you pin to a specific version of style, so that updates to the styleguide don't break your site. To do that, reference a specific tagged release in your package.json by appending #<tagname> to the git url, e.g.:

    ```js
        //package.json

        {
            //...
            "dependencies": {
                "style": "git+ssh://git@github.com/andyet/style#v0.1.0"
            },
            //...
        }
    ```

You can see the list of available releases at: [https://github.com/andyet/style/releases](https://github.com/andyet/style/releases).


## How to run?

For development mode:

```
npm install
npm start
```

The demo site will be available at http://localhost:8080. You can use the [livereload extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) and files will automatically rebuild and reload in the browser when you change them.

## Folder structure
For the sake of being easily accessible &ndash; all CSS sources are kept in `lib/style`, while example `jade` templates live in `public/templates/name-of-the-module.jade`.

Other assets like logos are available in `assets`. Note that you should not need to worry about the included font files, as they are being served from S3 already.

## Custom fonts
For custom font usage you have Typekit and Cloud Typography at your disposal. Request passwords from Karolina Szczur or Adam Brault and save in password manager of your choice.

* [Cloud Typography User Guide](http://www.typography.com/cloud/user-guide/)
* [How to use Typekit](http://help.typekit.com/customer/portal/topics/2076-Design-Development) and [desktop font syncing](http://help.typekit.com/customer/portal/topics/514077)

## Logos

Logos are available either in vector `SVG` format or as optimized `PNGs`, in full color and black and white, in three dimensions:

* small (`100px` in height)
* medium (`300px` in height)
* large  (`600px` in height)

List of logos:

* &yet
* &yet Labs
* ^Lift
* &!
* OTalk
* Talky

For Base64 Data URIs please refer to the [demo page](http://andyet.github.io/style).

## Documentation

Documentation and examples of usage can be found on [Github Pages](http://andyet.github.io/style/).

## Contributing

To rebuild the demo files run:

```sh
npm install #To install dependencies if you haven't already
npm run build #compiles public/css/demo.css, and public/index.html
```

### Tagging releases

Releases should be tagged to allow for version management, npm makes this easy. Just run:

```
npm version <major|minor|patch>
git push origin --tags
```

Which will increment the version number, update package.json, create a git tag, and push the tag to github.

CSS isn't quite the same as code, but tags should be roughly analagous to [semver](http://semver.org/):

* `major`: if the style change is likely to break existing sites, use a major, i.e. 1.0.0, tag.
* `minor`: if the style change should not break existing sites, but adds new features/functionality, use a minor, i.e. 0.1.0, tag.
* `patch`: if the style change is just a small bugfix that should work with existing sites, use a patch, i.e. 0.0.1, tag.

## Style recipes
Style is intentionally built small. For more interface elements see [style recipes](https://github.com/andyet/style-recipes).


## License
MIT
