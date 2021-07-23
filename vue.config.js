const path = require('path');

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}
// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      let _base = args[0]['process.env'];
      args[0]['process.env'] = {
        ..._base,
        API_URL: JSON.stringify(process.env.API_URL),
      };
      return args;
    });
  },
  lintOnSave: true,
  configureWebpack: {
    // Set up all the aliases we use in our app.
    resolve: {
      alias: {
        assets: resolveSrc('src/assets'),
      },
    },
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production',
  },
};
