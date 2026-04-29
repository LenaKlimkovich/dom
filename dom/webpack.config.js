const path = require('path');

module.exports = {
  entry: './src/js/app.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
      },
      {
  test: /\.css$/i,
  use: ['style-loader', 'css-loader'],
}
    ],
  },

  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
  },
};
