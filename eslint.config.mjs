import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import playwrightPlugin from 'eslint-plugin-playwright';

export default [
  {
    files: ['**/*.ts'], // Target TypeScript files.
    ignores: ['node_modules/', 'dist/', 'build/'], // Directories to ignore.
    languageOptions: {
      parser: typescriptParser, // TypeScript parser.
      ecmaVersion: 'latest', // Latest ECMAScript support.
      sourceType: 'module' // Handle ES module syntax.
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      'playwright': playwrightPlugin
    },
    rules: {
      // TypeScript rules.
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',

       // Custom rules.
       quotes: [ 'error', 'single', // Prefer single quotes (' ') for strings
        {
          'avoidEscape': true,        // Allows double quotes (" ") if needed to avoid escaping
          'allowTemplateLiterals': true  // Allows backticks (`` ` ``) for strings, useful when interpolation is needed
        }
      ],

      // Playwright rules.
      'playwright/no-force-option': 'warn',
      'playwright/no-wait-for-timeout': 'warn'
    }
  }
];
