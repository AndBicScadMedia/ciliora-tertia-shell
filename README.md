###A theme for gnome-shell _3.16_

---

####Installation

Put the `Ciliora-Tertia` folder into your `~/.themes` directory.

Install the user-themes extension and apply the theme in gnome-tweak-tool.

---

####Login Screen Theme

To apply this theme to your login screen, move the `gnome-shell-theme.gresource` file into `usr/share/gnome-shell` and restart gnome-shell.

__*Make sure that you backup the previous file before doing this!*__

__*Be very careful when doing this! You could potentially break GDM and have a hard time logging back in if you screw up.*__

---

####Tips

* To get rid of the overview background pattern, edit the gnome-shell.css file at selector `#overview`.

* To remove/change the activities icon, edit the gnome-shell.css file at selector `#panelActivities`. If you don't want to use an icon here, just get rid of that selector. The `menu-icons` folder contains a bunch of icons that you can try. :smile:

* To increase the max height of the calendar popup, edit the gnome-shell.css file at selector `#calendarArea`.

---

####Development

This theme is written using the css preprocessor [sass](http://sass-lang.com/).

In case you want to contribute code or report a bug, please report against the relevant sass file and **_not_** the css file!

You should use the provided `gulpfile.js` for improved workflow!

---

__In order to use gulp:__

* Install [nodejs](https://nodejs.org/) and [npm](https://www.npmjs.com/). *(__NOTE:__ If you want to contribute, make sure you run the nodejs version from the `.nvmrc` file!
Use [Nvm!](https://github.com/creationix/nvm))*

* Install [gulp](http://gulpjs.com/) globally:
    ```sh
    $ npm install --global gulp
    ```

* In the directory where the `gulpfile.js` file is, run:
    ```sh
    $ npm install
    ```

* In the same dir, run the following to use gulp:
    ```sh
    $ gulp
    ```

---

__Gulp will:__

* Make a symlink of the `Ciliora-Tertia` folder inside the `~/.themes` directory. Even if you change the location of your working directory, running gulp will update the link! *(__NOTE:__ Make sure you don't have a folder named `Ciliora-Tertia` in this dir when you first run gulp!)*

* Compile sass whenever certain files get changed, and...

* Autoreload the theme. (No more `alt-f2 + rt` :smile:.) Open `gulpfile.js` to see what files/folders are being watched.
