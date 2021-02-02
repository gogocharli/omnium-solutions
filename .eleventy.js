const i18n = require('eleventy-plugin-i18n');
const translations = require('./src/_data/i18n/index');

const htmlMinTransform = require('./src/transforms/html-min-transform');

const isDev = process.env.NODE_ENV === 'development';

module.exports = function (config) {
  config.setTemplateFormats([
    // Templates:
    'html',
    'njk',
    'md',
    // Static Assets:
    'css',
    'jpeg',
    'jpg',
    'png',
    'svg',
    'woff',
    'woff2',
  ]);

  config.addPlugin(i18n, {
    translations,
    fallbackLocales: {
      fr: 'en',
    },
  });

  if (!isDev) {
    config.addTransform('htmlmin', htmlMinTransform);
  }

  config.addPassthroughCopy('static');

  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true,

    dir: {
      input: 'src',
      output: 'public',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
    },
  };
};
