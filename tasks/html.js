const { src, dest } = require("gulp");

// Plugins
const plumber = require("gulp-plumber");
const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");

const path = require("../config/path.js");
const app = require("../config/app.js");

// Обработка HTML
const html = () => {
  return src(path.html.src)
    .pipe(plumber())
    .pipe(fileInclude())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(size())
    .pipe(dest(path.html.dest));
};

module.exports = html;
