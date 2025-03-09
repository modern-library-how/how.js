export default {
  build: {
    lib: {
      entry: 'src/index.js',
      fileName: (format) => `how.${format}.js`
    }
  }
};
