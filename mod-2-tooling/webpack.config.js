module.exports = {
  mode: "development",
  entry: "./src/greeting.jsx",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loaders: ["babel-loader"],
      },
    ],
  },
};
