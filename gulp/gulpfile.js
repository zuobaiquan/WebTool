// /*引入gulp及相关插件 require('node_modules里对应模块')*/
var gulp = require('gulp');
var minifyCss = require("gulp-minify-css");
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// //压缩
// gulp.task('minify-css', function () {
//     gulp.src('./css/*.css')
//         .pipe(minifyCss())
//         .pipe(gulp.dest('dist/css/'));
// });
// //
// gulp.task('script', function () {
//     gulp.src('./js/*.js')
//         .pipe(concat('all.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });
// gulp.task('default',['minify-css','script']); 

//执行gulp task1 命令执行task1的任务
gulp.task('task1',function(){
    console.log("task1 done");
});
//执行gulp task2 命令执行task2的任务
gulp.task('task2',function(){
    console.log("task2 done");
});
//执行gulp task3 命令执行task3的任务
gulp.task('task3',function(){
    console.log("task3 done");
});
//执行gulp build 命令同时执行task1、task2、task3三个任务
gulp.task('build',['task1','task2','task3'],function(){
    console.log("build done");
});