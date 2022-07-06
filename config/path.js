const pathSrc = "./src";
const pathDest = "./dist"; // Можно поменять Output файлов (./dist, ./docs, ./public)

module.exports = {
  root: pathDest,

  html: {
    src: pathSrc + "/html/*.html",
    watch: pathSrc + "/html/**/*.html",
    dest: pathDest,
  },

  scss: {
    src: pathSrc + "/sass/*.{sass,scss}",
    watch: pathSrc + "/sass/**/*.{sass,scss}",
    dest: pathDest + "/css",
  },

  js: {
    src: pathSrc + "/js/*.js",
    watch: pathSrc + "/js/**/*.js",
    dest: pathDest + "/js",
  },

  img: {
    src: pathSrc + "/img/**/*.{png,jpg,jpeg,svg,gif}",
    watch: pathSrc + "/img/**/*.{png,jpg,jpeg,svg,gif}",
    dest: pathDest + "/img",
  },

  fonts: {
    src: pathSrc + "/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    watch: pathSrc + "/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    dest: pathDest + "/fonts",
  },
};
