const { src, dest } = require("gulp");

// Plugins
const plumber = require("gulp-plumber");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const size = require("gulp-size");
// const gulpIf = require("gulp-if");

const path = require("../config/path.js");
const app = require("../config/app.js");

// const img = () => {
//   return src(path.img.src)
//     .pipe(plumber())
//     .pipe(newer(path.img.dest))
//     .pipe(gulpIf(app.isProd, imagemin(app.imagemin)))
//     .pipe(dest(path.img.dest));
// };

const img = () => {
  return src(path.img.src)
    .pipe(plumber())
    .pipe(newer(path.img.dest))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(size())
    .pipe(dest(path.img.dest));
};

module.exports = img;
