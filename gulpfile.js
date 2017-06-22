var gulp = require("gulp");
var jshint = require("gulp-jshint");
//include plugin


gulp.task('default',['jshint']);


gulp.task('jshint',function(){
    gulp.src('./public/chat.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));

})
