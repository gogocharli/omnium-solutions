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
          style: 'expanded',
        },
      },
    ],
    [
      '@snowpack/plugin-build-script',
      {
        input: ['.css'],
        output: ['.css'],
        cmd: 'npx postcss $file --replace --config postcss.config.js',
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
