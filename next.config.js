const path = require('path');

module.exports = () => {
  let config = {
    webpack(conf) {
      conf.resolve.alias['@'] = path.resolve(__dirname, 'src');
      conf.module.rules.push({
        test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
        loader: 'file-loader',
        query: { name: 'static/media/[name].[hash:8].[ext]' },
      });

      conf.module.rules.push({
        test: /react-spring/,
        sideEffects: true,
      });

      return conf;
    },
  };
  config = {
    ...config,
    images: {
      domains: [],
    },
  };

  return { ...config };
};
