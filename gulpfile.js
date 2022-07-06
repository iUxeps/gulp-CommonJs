const { src, dest, watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();

const path = require("./config/path.js");
const app = require("./config/app.js");

// Tasks

const html = require("./tasks/html.js");
const scss = require("./tasks/scss.js");
const js = require("./tasks/js.js");
const img = require("./tasks/img.js");
const fonts = require("./tasks/fonts.js");
const clear = require("./tasks/clear.js");

// Server
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  });
};

// Watch
const watcher = () => {
  watch(path.html.watch, html).on("all", browserSync.reload);
  watch(path.scss.watch, scss).on("all", browserSync.reload);
  watch(path.js.watch, js).on("all", browserSync.reload);
  watch(path.img.watch, img).on("all", browserSync.reload);
  watch(path.fonts.watch, fonts).on("all", browserSync.reload);
};

const build = series(clear, parallel(html, scss, js, img, fonts));

const dev = series(build, parallel(watcher, server));

exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.fonts = fonts;

exports.default = app.isProd ? build : dev;
