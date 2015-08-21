var gulp   = require('gulp'),
    elixir = require('developingo-elixir'),
    jison  = require('gulp-jison');

elixir.extend('jison', function (src, output, options) {

    var config = this,
        defaultSrc = [
            'resources/grammars/*.jison'
        ];

    src = src || defaultSrc;

    this.registerWatcher('jison', )
    return this.queueTask('jison');
});
