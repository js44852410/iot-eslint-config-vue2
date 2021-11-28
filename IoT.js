module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
    './rules/strict',
    './rules/vue',
    './rules/iot-config'
  ].map(require.resolve),
  rules: {},
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
        'vue/script-indent': ['error', 2, { baseIndent: 1 }]
      }
    }
  ]
};
