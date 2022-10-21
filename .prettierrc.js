module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  proseWrap: 'always',
  printWidth: 80,
  useTabs: false,
  tabWidth: 2,
  plugins: [require.resolve('@prettier/plugin-php')],
  braceStyle: '1tbs',
};