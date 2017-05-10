let gulp = require("gulp");
let webpack = require("webpack-stream");

gulp.task('default', function () {
    gulp.src('./browser.jsx')
        .pipe(webpack({
            output: {
                pathinfo: true,
                filename: 'release.js'
            },
            module: {
                loaders: [
                    {test: /\.jsx$/, loader: 'babel-loader', query: {presets: ['es2015', 'react']}}
                ]
            }
        }))
        .pipe(gulp.dest(__dirname + '/.release'));
});