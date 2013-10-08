# Style

&amp;yet visual style, branding assets, CSS components.

## How to run?

For quickly accessing the demo page fire up the server with [http-server](https://github.com/nodeapps/http-server) in root directory: 
```
http-server /public
```

## CSS Components
For the sake of being easily accessible &ndash; all CSS sources are kept in `public/css/styl`, while `jade` templates live in `/components/name-of-the-module.jade`.

### Colors
There are three ways of accessing the color palette:

- HEX codes on demo page
- Source &ndash; `css/styl/colors.styl`
- Getting the Photoshop swatch &ndash; `swatches/andyet.aco`

The names are generic. When working on a specific project use more descriptive and semantic naming, such as:

- `$accentPrimary` instead of `$blue` 
- `$brandSecondary` instead of `$pink`
- or `$sidebarBg` instead of `$blueSaturatedDarker`

## To do

- Typography
- Forms and their validation
- Buttons
- Messaging and user feedback
- Avatars
- Modals and dialogs
- Product and brand logos in different formats
- Collection of stock product screenshots
