import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
  { ignores: ['dist/', '.astro/', 'node_modules/', 'public/', '*.config.{js,mjs,ts}'] },

  // Base JS recommended.
  js.configs.recommended,

  // TypeScript recommended (non-type-checked).
  ...tseslint.configs.recommended,

  // Astro recommended + a11y.
  ...astro.configs.recommended,
  ...astro.configs['jsx-a11y-recommended'],

  // React 19 + hooks + a11y for .tsx files.
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        matchMedia: 'readonly',
        IntersectionObserver: 'readonly',
        IntersectionObserverEntry: 'readonly',
        HTMLElement: 'readonly',
        Element: 'readonly',
        DOMRectReadOnly: 'readonly',
        navigator: 'readonly',
      },
    },
    settings: {
      react: { version: '19' },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      // React 19 doesn't need React in scope.
      'react/react-in-jsx-scope': 'off',
    },
  },

  // Disable stylistic rules that conflict with Prettier — keep LAST.
  prettier,
);
