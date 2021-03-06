module.exports = {
  env: {
    'es6': true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 9,
    ecmaFeatures: {
      'jsx': true
    }
  },
  rules: {
    'no-console': ['error', { allow: ['info', 'warn'] }],
    "react/prop-types": "off",
    'linebreak-style': 0,
    'import/newline-after-import': 'off',
    'object-curly-newline': 'off',
    'no-unused-vars': 'off',
    'object-curly-spacing': 'off',
    'no-multiple-empty-lines': 'off',
    'semi': 'off',
    'max-len': 'off',
    'no-trailing-spaces': 'off',
    'spaced-comment': 'off',
    'arrow-parens': 'off',
    'no-use-before-define': 'off',
    'no-await-in-loop': 'off',
    'indent': 'off',
    'no-continue': 'off',
    'brace-style': 'off',
    'import/extensions': 'off',
    'react/no-unescaped-entities': 'off',
    'no-else-return': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-tag-spacing': 'off',
    'no-shadow': 'off',
    'object-shorthand': 'off',
    'comma-dangle': 'off',
    'operator-linebreak': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-indent': 'off',
    'react/self-closing-comp': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-curly-newline': 'off'
  }
};