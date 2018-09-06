const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

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
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        include: /\.js$/,
        parallel: true
      })
    ]
  },
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
// {
//   entry: "./src/index.ts",
//   devtool: "source-map",
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: "ts-loader",
//         exclude: /node_modules/
//       }
//     ]
//   },
//   plugins: [new CleanWebpackPlugin(["dist"])],
//   resolve: {
//     extensions: [".tsx", ".ts", ".js"]
//   },
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist")
//   }
// }
