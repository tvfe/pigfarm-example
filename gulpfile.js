const fs = require('fs');
const gulp = require('gulp');
const insert = require('gulp-insert');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config');

gulp.task('default', function () {
    return gulp.src('src/app.js')
               .pipe(webpack(webpackConfig))
               .pipe(gulp.dest('front-end/'));
});

gulp.task('server', function () {
    return gulp.src('server/index.js')
           .pipe(webpack(webpackConfig))
           .pipe(insert.prepend(fs.readFileSync('./server/serverDeps.js', 'utf8')))
           .pipe(gulp.dest('server/'));
});