const merge = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",

  output: {
    filename: "[name].[hash:5].js",
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        exclude: /\/node_modules\//,
      }),
    ]
  }
});
