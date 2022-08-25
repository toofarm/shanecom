module.exports = {
  env: {
    browser: true, // Allows for the use of predefined global variables for browsers (document, window, etc.)
    jest: true, // Allows for the use of predefined global variables for Jest (describe, test, etc.)
    node: true, // Allows for the use of predefined global variables for Node.js (module, process, etc.)
  },
  extends: [
    'react-app', // Use the recommended rules from eslint-config-react-app (bundled with Create React App)
    'eslint:recommended', // Use the recommened rules from eslint
    'plugin:@typescript-eslint/recommended', // Use the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:react/recommended', // Use the recommended rules from eslint-plugin-react
    'prettier', // Enables eslint-plugin-prettier to display Prettier errors as ESLint errors
    'next/core-web-vitals'
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: [
    '@typescript-eslint', // Allows for manually setting @typescript-eslint/* rules
    'react', // Allows for manually setting react/* rules
  ],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'no-await-in-loop': 0,
    'max-len': ['error', { code: 120 }],
    'jsx-quotes': ['warn', 'prefer-single'],
    quotes: ['warn', 'single'],
    semi: ['warn', 'never'],
    'dot-notation': 'warn',
    indent: ['warn', 2],
    'function-paren-newline': ['warn', { minItems: 2 }]
  },
  overrides: [
    // Tell ESLint we don't need prop checking on our .tsx components
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
}
