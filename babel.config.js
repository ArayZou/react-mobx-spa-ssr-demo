module.exports = {
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        modules: false,
        targets: {
          browsers: ['last 2 versions', 'Chrome >= 58', 'ie >= 10', 'ios >= 10'],
          node: 'current'
        }
      }
    ],
    ['@babel/preset-react']
  ]
}
