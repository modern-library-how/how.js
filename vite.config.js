export default {
  resolve: {
    alias: [{ find: '@', replacement: '/src' }]
  },
  build: {
    lib: {
      entry: 'src/index.js',
      fileName: (format) => `how.${format}.js`
    }
  }
};
