module.exports = {
    entry: './src/js/app.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.ttf$/,
          loaders: [
            'url-loader'
          ]
        },
        {
          test: /\.(svg|gif|png|eot|woff|ttf)$/,
          loaders: [
            'url-loader'
          ]
        },
        {
          test: /\.scss$/,
          loaders: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS
          ]
        }
      ]
    }
  }