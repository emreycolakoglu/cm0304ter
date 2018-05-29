var gulp = require("gulp");
var sass = require("gulp-sass");
var clean = require("gulp-clean");

gulp.task("sass", function() {
  return gulp
    .src("./src/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("clean", function() {
  return gulp.src("./dist/**/*").pipe(clean({ force: true, read: false }));
});

gulp.task("sass:watch", function() {
  gulp.watch("./src/**/*.scss", ["sass"]);
});

gulp.task("watch", ["sass:watch"])