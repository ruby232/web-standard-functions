const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    "web-standard-functions": "./src/index.ts"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    libraryTarget: "umd",
    library: "WebStandardFunctions",
    umdNamedDefine: true
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/
      }
    ]
  }
};
