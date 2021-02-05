/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/' },
    src: { url: '/dist' },
  },
  plugins: [
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eleventy',
        watch: '$1 --watch',
      },
    ],
    '@snowpack/plugin-postcss',
    [
      '@snowpack/plugin-sass',
      {
        native: true,
      },
    ],
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
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
