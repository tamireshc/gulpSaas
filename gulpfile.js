//adiciona os modulos instalados
const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

//função para compilar o sass e add prefixos
function compilaSass() {
  return gulp
    .src("css/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("css/"))
    .pipe(browserSync.stream())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    );
}
// tarefa de gulp para função de sass
//gulp.task("sass", compilaSass);

// as task mudaram agora é

exports.compilaSass = compilaSass

//função para inciciar o browser
function browser() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
}
// tarefa de gulp para função de browser-sync
//gulp.task("browser-sync", browser);

// as task mudaram agora é

exports.browser = browser

//função de watch do Gulp
function watch() {
  gulp.watch("css/scss/**/*.scss", compilaSass);
  gulp.watch("*.html").on("change", browserSync.reload);
}
//inicia a ptarefa de watch
//gulp.task("watch", watch);

// as task mudaram agora é

exports.watch = watch

//tarefa padrao do gulp, que incicia o watch e browser-synca
gulp.task("default", gulp.parallel("watch", "browser-sync"));
