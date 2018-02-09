const path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: {
    main: ["./src/index.js"],
    metro: ["./src/scss/themes/metro/main.scss"],
    aero: ["./src/scss/themes/aero/main.scss"],
    cocoa: ["./src/scss/themes/cocoa/main.scss"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "source-map", // any "source-map"-like devtool is possible
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader']
          })

      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','sass-loader']
        })
      },
      {
        test: /\.svg$/,
        loader: 'file-loader'
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: '[name].css',
      allChunks: true,
    }),
  ],
};
