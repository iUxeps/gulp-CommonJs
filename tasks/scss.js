const { src, dest } = require("gulp");

// Plugins
const plumber = require("gulp-plumber");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const sassGlob = require("gulp-sass-glob");

const path = require("../config/path.js");
const app = require("../config/app.js");

const scss = () => {
  return src(path.scss.src)
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(dest(path.scss.dest))
    .pipe(rename({ suffix: '.min' }))
    .pipe(csso())
    .pipe(dest(path.scss.dest));
};

module.exports = scss;
