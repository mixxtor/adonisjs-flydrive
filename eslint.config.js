// eslint.config.js

import { ESLint } from 'eslint'

export default new ESLint({
  ignorePatterns: ['packages', 'build', 'ace.js', 'tailwind.config.js', 'resources'],
  baseConfig: {
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 2020,
      project: ['./tsconfig.json'],
    },
    extends: ['@adonisjs/eslint-config/app'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/prefer-optional-chain': 'off',
      '@typescript-eslint/dot-notation': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      'no-useless-escape': 'off',
      'no-unsafe-optional-chaining': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@adonisjs/prefer-lazy-controller-import': 'off',
      'unicorn/no-await-expression-member': 'off',
      'object-curly-spacing': 'off',
      'max-len': 'off',
    },
  },
})
