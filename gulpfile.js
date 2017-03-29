/*
 * @Author: step
 * @Date:   2017-03-15 17:15:06
 * @Last Modified by:   step
 * @Last Modified time: 2017-03-24 10:46:29
 */

'use strict';
var gulp = require('gulp');
var less = require('gulp-less');

var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var fileinclude = require('gulp-file-include');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

/*style*/
gulp.task('style', function() {
    gulp.src('src/style/*.less')
        .pipe(less())
        .pipe(cssnano())
        .pipe(gulp.dest('dist/style'))
        .pipe(reload({
            stream: true
        }));
});
gulp.task('css', function() {
    gulp.src('src/style/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/style'))
        .pipe(reload({
            stream: true
        }));
});

/*js*/
gulp.task('script', function() {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(reload({
            stream: true
        }));
});

/**fonts*/
gulp.task('font', function() {
    gulp.src('src/fonts/*.*')
        .pipe(gulp.dest('dist/fonts'))
        .pipe(reload({
            stream: true
        }));
});

/*图片,视频等*/
gulp.task('images', function() {
    gulp.src('src/images/**/*.*')
        .pipe(gulp.dest('dist/images'))
        .pipe(reload({
            stream: true
        }));
});;



/*html处理*/
gulp.task('html', function() {
    gulp.src(['src/**/*.html', '!src/include/*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(reload({
            stream: true
        }));
});

/*fileinclude*/
gulp.task('fileinclude', function() {
    //排除include下的html
    gulp.src(['src/**/*.html', '!src/include/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(htmlmin({
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(reload({
            stream: true
        }));
});


/*服务*/
gulp.task('ser', ['style', 'css', 'script', 'font', 'images', 'fileinclude'], function() {
    browserSync({
        notify: false,
        port: 2017,
        server: {
            baseDir: ['dist']
        }
    });

    gulp.watch('src/**/*.html', ['fileinclude']);
    gulp.watch('src/style/*.less', ['style']);
    gulp.watch('src/style/*.css', ['css']);
    gulp.watch('src/js/*.js', ['script']);
    gulp.watch('src/fonts/*.*', ['font']);
    gulp.watch('src/images/**/*.*', ['images']);

});
