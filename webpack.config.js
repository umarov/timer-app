const path = require('path');

module.exports = {
  entry: './src/timer-app/timer-app.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'timer-app.js',
    path: path.resolve(__dirname, 'dist', 'timer-app')
  }
};
