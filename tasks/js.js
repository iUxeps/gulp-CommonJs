const { src, dest } = require("gulp");

// Plugins
const plumber = require("gulp-plumber");
const babel = require("gulp-babel");
const webpack = require("webpack-stream");
// const uglify = require("gulp-uglify");
const concat = require("gulp-concat");

const path = require("../config/path.js");
const app = require("../config/app.js");

const js = () => {
  return (
    src(path.js.src)
      .pipe(plumber())
      .pipe(babel())
      .pipe(webpack(app.webpack))
      // .pipe(uglify())
      .pipe(concat("main.js"))
      .pipe(dest(path.js.dest))
  );
};

module.exports = js;
