/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    'src/_site': { url: '/', static: true, resolve: false },
    'src/styles': { url: '/styles' },
    'src/scripts': { url: '/scripts' },
  },
  plugins: [
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eleventy',
        watch: '$1 --watch',
      },
    ],
    [
      '@snowpack/plugin-sass',
      {
        native: true,
        compilerOptions: {
          loadPath: './node_modules/gorko/',
        },
      },
    ],
  ],
  alias: {
    '@app': 'src',
    node_modules: './node_modules',
  },
  optimize: {
    // bundle: true,
    // minify: true,
    // target: 'es2020',
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    // Eleventy updates multiple files at once, so add a 300ms delay before we trigger a browser update
    hmrDelay: 300,
  },
  buildOptions: {
    /* ... */
  },
};
