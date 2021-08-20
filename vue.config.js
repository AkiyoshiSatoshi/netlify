module.exports = {
  devServer: {
    proxy: 'https://api.coin.z.com',
    compress: true,
    disableHostCheck: true
  },
  publicPath: './',
};