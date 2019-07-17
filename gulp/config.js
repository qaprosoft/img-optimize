const src = process.env.SRC_FOLDER ? `${process.env.SRC_FOLDER}` : 'src',
  dist = process.env.DIST_FOLDER ? `${process.env.DIST_FOLDER}` : 'dist';

module.exports = {
  src: `${src}/`,
  dist: `${dist}/`,

  assets: {
    img: `${src}/**/*.+(png|gif|jpg|jpeg|PNG|JPG|JPEG|SVG|svg|webp)`,
  },
};

