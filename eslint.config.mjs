import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import playwrightPlugin from 'eslint-plugin-playwright';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.ts'], // Target TypeScript files.
    ignores: ['node_modules/', 'dist/', 'build/'], // Directories to ignore.
    languageOptions: {
      parser: typescriptParser, // TypeScript parser.
      ecmaVersion: 'latest', // Latest ECMAScript support.
      sourceType: 'module', // Handle ES module syntax.
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      playwright: playwrightPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // TypeScript rules.
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',

      // Playwright rules.
      'playwright/no-force-option': 'warn',
      'playwright/no-wait-for-timeout': 'warn',

      // Prettier as an ESLint rule to enforce formatting
      'prettier/prettier': ['error', { singleQuote: true }], // Ensure Prettier follows single quote rule.

      // Custom rules.
      quotes: [
        'error',
        'single', // Prefer single quotes (' ') for strings
        {
          avoidEscape: true, // Allows double quotes (" ") if needed to avoid escaping.
          allowTemplateLiterals: true, // Allows backticks (`` ` ``) for strings, useful when interpolation is needed.
        },
      ],
      'eol-last': ['error', 'always'], // Add a newline at the end of each file.
    },
  },
  // Disable ESLint rules that conflict with Prettier.
  prettierConfig, // Extends Prettier configuration to avoid conflicts.
];
