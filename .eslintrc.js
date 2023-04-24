/* eslint-env node */
// eslint-disable-next-line import/no-commonjs, unicorn/prefer-module
module.exports = {
    parser: '@typescript-eslint/parser',
    ignorePatterns: ['node_modules', 'dist', 'build', 'coverage', 'next.config.js', 'next-env.d.ts'],
    extends: [
        'eslint:recommended',
        'next',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:github/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:sonarjs/recommended',
        'plugin:unicorn/recommended',
        'prettier',
        'react-app',
    ],
    plugins: ['@typescript-eslint', 'github', 'jsx-a11y', 'prettier', 'sonarjs'],
    rules: {
        // OFF
        'no-unused-vars': 'off', //  handled by @typescript-eslint/no-unused-vars
        'i18n-text/no-en': 'off',
        'filenames/match-regex': 'off', // handled by unicorn/filename-case
        'import/named': 'off', // doesn't work well
        'import/no-deprecated': 'off', // takes too long
        'import/default': 'off', // takes too long
        'import/no-unresolved': 'off', // module bundle is vite
        'import/no-named-as-default-member': 'off', // takes too long
        'import/no-namespace': 'off', // enable namespaces
        // ERRORS
        '@next/next/no-html-link-for-pages': ['error', 'front/src/pages'],
        '@typescript-eslint/no-unused-vars': 'error',
        'import/extensions': [
            'error',
            'never',
            {
                json: 'always',
                css: 'always',
                scss: 'always',
                svg: 'always',
                png: 'always',
                jpg: 'always',
                jpeg: 'always',
                gif: 'always',
                webp: 'always',
            },
        ],
        'import/order': [
            'error',
            {
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'internal',
                    },
                ],
                pathGroupsExcludedImportTypes: ['type'],
                groups: [
                    'builtin', // Node "builtin" modules, eg: import path from "path";
                    'external', // External modules, eg: import moment from "moment";
                    'internal', // Internal modules (absolute imports), eg: import {apiService} from "app/services/core";
                    ['sibling', 'parent', 'index'], // Relative imports, eg: import foo from "../foo"; / import bar from "./bar"; / import main from "./";
                    'object', // "object"-imports (TypeScript only), eg: import log = console.log;
                    'type', // "type" imports (TypeScript only), eg: import type { Foo } from "foo";
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'import/no-anonymous-default-export': ['error', { allowNew: true }],
        'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
        'prettier/prettier': 'error',
        'unicorn/filename-case': [
            'error',
            {
                cases: {
                    camelCase: true,
                    pascalCase: true,
                },
                ignore: ['^[A-Za-z0-9]+\\.[A-Za-z0-9]+$'], // To allow syntax like TripDAO.ts
            },
        ],
        'unicorn/no-null': 'off', // To allow null values, need for some libs
        'unicorn/prefer-node-protocol': 'off', // Not really useful and some errors when using it with path like 'constants/paths.ts'
        'unicorn/prevent-abbreviations': [
            'error',
            {
                replacements: {
                    prop: false,
                    props: false,
                    i: false,
                    str: false,
                    args: false,
                    doc: false,
                    docs: false,
                },
            },
        ],
    },
};
