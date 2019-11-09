const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './resources/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname + '/public/', 'assets'),
  },
  plugins: [
    new Dotenv(),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter'),
          fix: true,
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            'presets': ['@babel/preset-env'],
            'plugins': [
              ['@babel/transform-runtime'],
            ],
          },
        },
      },
    ],
  },
};
