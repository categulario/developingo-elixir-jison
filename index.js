var gulp   = require('gulp'),
    elixir = require('developingo-elixir'),
    jison  = require('gulp-jison');

elixir.extend('jison', function (src, output, options) {

    var jisonPath = this.assetsDir + 'grammars/*.jison';

    gulp.task('jison', function () {
        return gulp.src(jisonPath)
            .pipe(jison({
                moduleType: 'global',
            }))
            .pipe(gulp.dest('./public/js/grammars/'));
    });

    this.registerWatcher('jison', jisonPath);

    return this.queueTask('jison');
});
