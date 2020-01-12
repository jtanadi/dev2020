module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    }, {
      test: /\.css$/,
      use: 'css-loader',
    })
    return config
  },
}
