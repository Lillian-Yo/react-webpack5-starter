const path = require("path");
const Dotenv = require("dotenv-webpack");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico|woff|woff2|eot|ttf|otf)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 8kb
          },
        },
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "..", "./.env"),
      systemvars: true,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx"],
      exclude: ["node_modules"],
      emitWarning: true,
      emitError: true,
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, "..", "./src"),
    },
  },
  output: {
    path: path.resolve(__dirname, "..", "./dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
