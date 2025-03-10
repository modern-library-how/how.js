export default {
  build: {
    lib: {
      entry: 'src/index.js',
      fileName: (format: string) => `how.${format}.ts`
    }
  }
};
