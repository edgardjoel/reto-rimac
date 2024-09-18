import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser'; // Asegúrate de que esto esté incluido
import prettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser, // Incluye el parser de TypeScript
      parserOptions: {
        project: './tsconfig.app.json', // Asegúrate de que apunte al archivo correcto
        sourceType: 'module',
        ecmaVersion: 2020,
      },

      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tsEslint,
      prettier: prettier, // Incluye el plugin de Prettier
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-unused-vars': ['warn'],
      'no-var': 'error', // Prohíbe el uso de `var`
    },
    ignores: ['dist'],
  },
];
