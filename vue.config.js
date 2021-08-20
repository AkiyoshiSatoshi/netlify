module.exports = {
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: "https://api.coin.z.com",
    compress: true,
    disableHostCheck: true,
  },
  publicPath: "./",
};