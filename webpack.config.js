const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');

module.exports = (env) => {
  const isProduction = env === 'production';
  const envs = dotenv.config().parsed;

  const envKeys = Object.keys(envs).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(envs[next]);
    return prev;
  }, {});

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ],
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  }
}
