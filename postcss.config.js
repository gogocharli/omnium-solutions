const autoprefixer = require('autoprefixer');
const presetEnv = require('postcss-preset-env');

const plugins = [presetEnv, autoprefixer];
// If not in development mode, apply purgecss as a plugin to the plugins list
const isDev = process.env.APP_ENV === 'development';
if (!isDev) {
  const cssnano = require('cssnano');

  [].push.apply(plugins, [
    cssnano({
      preset: 'default',
    }),
  ]);
}

module.exports = { plugins };
