module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'testing-library',
    'jest-dom',
  ],
  rules: {
    'no-console': 'off',
    'max-len': 'off',
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
    },
  ],
};
