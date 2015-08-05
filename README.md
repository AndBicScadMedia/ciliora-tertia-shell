[![ License ](https://img.shields.io/badge/license-GPLv3-blue.svg?style=flat-square)](LICENSE)
[![ Latest gnome-shell version ](https://img.shields.io/badge/gnome--shell-3.16-brightgreen.svg?style=flat-square)](#shell-support)

###A theme for gnome-shell

---

* [Installation](#installation)
* [Login Screen](#login-screen)
* [Tips](#tips)
* [Shell Support](#shell-support)
* [Contributing](#contributing)
* [Development](#development)

---

####Installation

* Put the `Ciliora-Tertia` folder into your `~/.themes` directory.

* Install the user-themes extension, and apply the theme in gnome-tweak-tool.

---

####Login Screen

In order to apply this theme to your login screen, move the `gnome-shell-theme.gresource` file into the `usr/share/gnome-shell` dir and restart gnome-shell.

**_Make sure that you backup the previous file before doing this!_**

**_Be very careful when doing this! You could potentially break GDM and have a hard time logging back in if you screw up._**

---

####Tips

* To get rid of the overview background pattern, edit the gnome-shell.css file at selector `#overview`.

* To remove/change the activities icon, edit the gnome-shell.css file at selector `#panelActivities`. If you don't want to use an icon here, just get rid of that selector. The `menu-icons` folder contains a bunch of icons that you can try. :smile:

* To increase the max height of the calendar popup, edit the gnome-shell.css file at selector `#calendarArea`.

---

####Shell support

This theme supports gnome-shell **3.16** only.

---
####Contributing

In case you want to contribute code, **don't edit the css file!** Instead, edit the relevant sass files(s) and compile to css.

This is a very opinionated project, so try to avoid suggesting visual changes. :grinning:

---

####Development

This theme is written using the css preprocessor [sass](http://sass-lang.com/).  

You should use the provided `gulpfile.js` for improved workflow.

---

**In order to use gulp:**

* Install [nodejs](https://nodejs.org/) and [npm](https://www.npmjs.com/).
    * **NOTE:** If you want to contribute, make sure you run the nodejs version from the `.nvmrc` file. Use [Nvm.](https://github.com/creationix/nvm)

* Install [gulp](http://gulpjs.com/) globally:

        $ npm i -g gulp

* In the directory where the `gulpfile.js` file is, run:

    ```
    $ npm i
    ```

* In the same dir, run the following to use gulp:

    ```
    $ gulp
    ```

---

**Gulp will:**

* **Make a symlink of the** `Ciliora-Tertia` **folder inside the** `~/.themes` **dir.**

    * It will create a `~/.themes` dir if it doesn't exist already.

    * Even if you change the location of your working directory, running `gulp` will update the link.

    * **NOTE:** Make sure you don't have a folder named `Ciliora-Tertia` in this dir when you first run gulp.

* **Compile sass** whenever certain files change. _(Open `gulpfile.js` to see what files/folders are being watched.)_

* **Autoreload the theme** on save. _(No more `alt-f2 + rt`. :+1:)_
