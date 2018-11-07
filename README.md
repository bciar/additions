# Appear Here - ADDITIONS

This page is built on [Foundation 6](http://foundation.zurb.com/).

## Directory Structure

- `/css/` - where the generated css stylesheets are (you generally don't need to worry about this)
    - `/vendor` - third party css
    - `app.css` - main site css
- `/img` - put your images here (*)
- `/js` - where the Javascript files are
    - `/vendor` - third party Javascript
    - `app.js` - main site Javascript (*)
    - `home.js` - index page Javascript (*)
- `/scss` - source sass files (*)
    - `_animations.scss` - animation styles
    - `_base.scss` - base styles
    - `_custom_landing.scss` - index page styles
    - `_custom.scss` - general website styles
    - `_loading-screen.scss` - loading screen logo animation
    - `_modal.scss` - modal popup styles
    - `_settings.scss` - Foundation 6 styles
    - `_topnav.scss` - navigation styles
    - `_vars.scss` - common variables
    - `_app.scss` - Foundation dependencies
- `/about.html` - About page (*)
- `/bespoke.html` - Bespoke page (*)
- `/favicon.ico` - favicon
- `/gulpfile.js` - where it all comes together - don't need to change this
- `/index.html` - Index page (*)
- `/package.json` - node module configuration
- `/README.md` - this file =)
- `/tutorial.html` - basic Foundation tutorial

## Installation

To run the Sass compiler, your computer needs to have [NodeJS](https://nodejs.org/en/) (0.12 or greater) installed.
Open the folder in your command line, and install the needed dependencies:

```bash
cd project/src
npm install gulp-sass --save-dev
```

Finally, run `npm start` or `foundation watch` to run the Sass compiler. It will re-run every time you save a Sass file.