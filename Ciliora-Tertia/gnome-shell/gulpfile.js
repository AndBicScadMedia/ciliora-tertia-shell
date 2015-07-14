var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    notify      = require('gulp-notify'),
    gutil       = require('gulp-util'),
    beep        = require('beepbeep'),
    shell       = require('gulp-shell'),
    fs          = require('fs'),
    sass        = require('gulp-sass');


// Error handler
var onError = function (err) {
    var lineNumber = (err.line) ? 'Line ' + err.line : '';

    notify({
        title: 'Task Failed  [ ' + err.plugin + ' ]',
        message: lineNumber
    }).write(err);
    beep();
    gutil.log(gutil.colors.red(err));
    this.emit('end');
};


// Compile sass
gulp.task('sass', function () {
    return gulp.src('sass/gnome-shell.scss')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest('.'));
});


// Wait for sass to compile & reload theme
gulp.task('reloadTheme', ['sass'], function() {
    return gulp.src('')
        .pipe(shell([
            'gsettings set org.gnome.shell.extensions.user-theme name default',
            'gsettings set org.gnome.shell.extensions.user-theme name Ciliora-Tertia'
        ]));
});


// Make a symlink in the ~/.themes dir
gulp.task('install', function () {
    try {
        fs.mkdirSync(process.env.HOME+'/.themes')
    } catch (err) {
        if (err.code !== 'EEXIST') throw err;
    }
        fs.unlinkSync(process.env.HOME+'/.themes/Ciliora-Tertia')
        fs.symlinkSync(__dirname+'/../../Ciliora-Tertia', process.env.HOME+'/.themes/Ciliora-Tertia')
});


// Watch
gulp.task('watch', function () {
    gulp.watch(['sass/**/*',
                'background-assets/**/*',
                'button-assets/**/*',
                'misc-assets/**/*',
                'overview-assets/**/*',
                'panel-assets/**/*',
                'widget-assets/**/*',
                'menu-icons/**/*',
                'extensions/**/*'], ['reloadTheme']);
});


// Default task
gulp.task('default', ['install', 'watch'], function() {
    gulp.start('reloadTheme');
});
