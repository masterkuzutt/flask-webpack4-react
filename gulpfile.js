const gulp = require('gulp');
const webpackStream = require("webpack-stream");
const webpack = require("webpack");

const webpackConfig = require('./webpack.config');

gulp.task('default',()=>{
    // dest should be the same with webpack setings
    return webpackStream(webpackConfig,webpack).pipe(gulp.dest("app/static/js")) ;
})

gulp.watch('client/src/*.jsx').on('change',gulp.series('default'));

