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

gulp.task('task1',function(){
    console.log("task1 done");
});
gulp.task('task2',function(){
    console.log("task2 done");
});
gulp.task('task3',function(){
    console.log("task3 done");
});
gulp.task('build',['task1','task2','task3'],function(){
    console.log("build done");
});