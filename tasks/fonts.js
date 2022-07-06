const { src, dest } = require("gulp");

// Plugins
const plumber = require("gulp-plumber");
const newer = require("gulp-newer");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");


const path = require("../config/path.js");
const app = require("../config/app.js");

const fonts = () => {
  return src(path.fonts.src)
    .pipe(plumber())
    .pipe(newer(path.fonts.dest))
    .pipe(fonter(app.fonter))
    .pipe(dest(path.fonts.dest))
    .pipe(ttf2woff2())
    .pipe(dest(path.fonts.dest))
};

module.exports = fonts;
