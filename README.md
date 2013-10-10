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

### Typography
We're using two different typefaces:

- `Helvetica Neue, Helvetica` &ndash; natively available in all browsers
- `Gotham SSm A, Gotham SSm B` &ndash; a webfont, served from [Typography.com](http://www.typography.com/)

Font families, sizes and line-heights are defined in `css/styl/variables.styl`.

#### How do I use Typography.com?
Use the log in email: `karolina@andyet.net` and ping @adambrault / @karolinaszczur for password. Create a new project [here](https://www.typography.com/account/cloud-new-project.php) and add Gotham as a font. For developer environment (which you **should be** using before final deployment to production) you will be given only a link to a CSS file that you need to include in your layout. 

For more detailed information read [Typography.com User Guide](http://www.typography.com/cloud/user-guide/welcome).

## To do

- Forms and their validation
- Buttons
- Messaging and user feedback
- Avatars
- Modals and dialogs
- Product and brand logos in different formats
- Collection of stock product screenshots
