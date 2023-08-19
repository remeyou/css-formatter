module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
    'stylelint-config-rational-order/plugin',
  ],
  rules: {
    'no-missing-end-of-source-newline': null, // 为true的时候，每一段css或者scss在最后必须要以新的空行为结尾
    'max-nesting-depth': 10, // 限制scss中&字符嵌套深度
    'selector-max-compound-selectors': 10, // 限制选择器深度
    'at-rule-no-unknown': null, // 为true sass有些语法会报错
    'scss/at-rule-no-unknown': true, //如果@extend错写成@exend，则stylelint会因为此规则而报错。
  },
};
