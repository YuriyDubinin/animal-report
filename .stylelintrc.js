module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-prettier',
    'stylelint-order',
    'stylelint-config-rational-order/plugin',
  ],
  rules: {
    'prettier/prettier': true,
    'no-empty-source': true,
    'max-empty-lines': 1,
  },
};
