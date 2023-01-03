/*jshint esversion: 6 */

const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist/js"),
  },

  devServer: {
    hot: true,
    static: {
      directory: "./dist/js",
      watch: true,
    },
  },
};
