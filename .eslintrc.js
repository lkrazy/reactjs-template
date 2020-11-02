module.exports = {
  root: true,
  'plugins': [
    'react',
    'jest',
    'prettier'
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'env': {
    'es6': true,
    'browser': true,
    'node': true,
    'mocha': true
  },
  'extends': [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  'rules': {
    'semi': ['error', 'never'],
    'indent': ['error', 2, {
      SwitchCase: 1
    }],
    'react/prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'prettier/prettier': 'error',
    'object-curly-spacing': ['error', 'always'],
    'no-extra-parens': 'error',
    'max-len': ['error', { 'code': 100 }],
    'no-multi-spaces': 'error',
    'no-use-before-define': ['error', { 'functions': false }],
    'no-param-reassign': ['error', { 'props': false }],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'no-plusplus': 'off'
  },
  'settings': {
    'react': {
      'version': '16.3'
    },
    'import/resolver': {
      alias: {
        map: [
          ['@', './src']
        ],
        extensions: ['.js', '.jsx', '.json']
      }
    }
  },
  'overrides': [
    {
      'files': [
        '**/*.spec.js',
        '**/*.test.js',
        '**/*.spec.jsx'
      ],
      'env': {
        'jest': true
      }
    }
  ]
}
