var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    notify      = require('gulp-notify'),
    gutil       = require('gulp-util'),
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
    gutil.beep();
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
gulp.task('reloadTheme', ['sass'], shell.task([
    'gsettings set org.gnome.shell.extensions.user-theme name default',
    'gsettings set org.gnome.shell.extensions.user-theme name Ciliora-Tertia'
]));


// Make a symlink in the ./themes dir
gulp.task('install', function () {
    fs.unlink(process.env.HOME+'/.themes/Ciliora-Tertia/', function(){})
    fs.symlink(__dirname+'/../../Ciliora-Tertia/', process.env.HOME+'/.themes/Ciliora-Tertia', function () {})
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
                'extesion/**/*'], ['reloadTheme']);
});


// Default task
gulp.task('default', ['sass', 'install', 'watch']);
