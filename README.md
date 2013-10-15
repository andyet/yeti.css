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

### Buttons
Buttons come in variety of predefined sizes, colors and states. 

#### Sizes

* large (`.button.large`)
* regular (`.button`)
* small (`.button.small`)

#### Colors

* accent primary &ndash; pink (`.button.primary`)
* accent secondary &ndash; blue (`.button.secondary`)

#### States

* `disabled`

#### Button group
Works for any number of elements (even one if you are appending DOM them with JavaScript) and both with a class `.button` and button tag.

* default (`.button-group`)
* outlined, with borders (`.button-group.outlined`)
* outlined primary (`.button-group.outlined.primary`)
* outlined secondary (`.button-group.outlined.secondary`)

### Forms
Following elements have been defined:

* all kinds of inputs (`text`, `search`, `email`, `password`, `date`, `url`, `password`)
* selects
* checkboxes
* radio buttons
* textareas

#### States

* `disabled` 
* `valid`
* `invalid`

Validity classes should be added to parent wrapper element as they relate to labels, inputs and icons within.

#### Icons
When using icons for denotating validity or search do: `i.ss-icon.ss-standard` and add 

* `.ss-check`
* `.ss-delete`
* `.ss-search`

accordingly. Colors will be added by parent classes (`valid`, `invalid`). The wrapper needs to have `.has-icon` class for custom positioning.

## To do

- Messaging and user feedback
- Avatars
- Modals and dialogs
- Product and brand logos in different formats
- Collection of stock product screenshots
