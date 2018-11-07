var gulp = require("gulp");
var $ = require("gulp-load-plugins")();
var browserSync = require("browser-sync").create();

var sassPaths = [
    "node_modules/foundation-sites/scss",
    "node_modules/motion-ui/src"
];

// Static Server + watching scss/html files
gulp.task("serve", ["sass"], function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("scss/**/*.scss", ["sass"]);
    gulp.watch("*.html").on("change", browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task("sass", function() {
    return gulp
        .src("scss/**/*.scss")
        .pipe(
            $
                .sass({
                    includePaths: sassPaths,
                    outputStyle: "compressed" // if css compressed **file size**
                })
                .on("error", $.sass.logError)
        )
        .pipe(
            $.autoprefixer({
                browsers: ["last 2 versions", "ie >= 9"]
            })
        )
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task("default", ["serve"]);
