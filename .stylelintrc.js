module.exports = {
  root: true,
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-html',
    'stylelint-config-recommended-less',
    // comment next line to resolve conflicting with less
    // 'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-order'],
  overrides: [
    {
      files: ['**/*.(less|vue)'],
      customSyntax: 'postcss-less',
    },
    {
      files: ['**/*.(sass|scss|vue)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'less/no-duplicate-variables': null,
    'function-no-unknown': null,
  },
};
