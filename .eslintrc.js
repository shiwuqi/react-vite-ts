module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        createDefaultProgram: true,
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'constructor-super': 'off',
                'getter-return': 'off',
                'no-const-assign': 'off',
                'no-dupe-args': 'off',
                'no-dupe-class-members': 'off',
                'no-dupe-keys': 'off',
                'no-func-assign': 'off',
                'no-new-symbol': 'off',
                'no-obj-calls': 'off',
                'no-redeclare': 'off',
                'no-this-before-super': 'off',
                'no-undef': 'off',
                'no-unreachable': 'off',
                'no-unsafe-negation': 'off',
                'valid-typeof': 'off',
                'import/named': 'off',
                'import/no-unresolved': 'off',
            },
        },
    ],
    plugins: [
        '@typescript-eslint',
        'react-hooks',
        'react',

    ],
    extends: [
        'airbnb-typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.d.ts'],
        },
        'import/resolver': {
            node: {
                extensions: ['.mjs', '.js', '.ts', '.json'],
            },

            typescript: {
                alwaysTryTypes: true,
            }
        },
        'import/resolver': {
            node: {
                extensions: ['.mjs', '.js', '.ts', '.json', 'jsx', 'tsx'],
            }
        },
        react: {
            pragma: 'React',
            version: 'detect',
        },
        propWrapperFunctions: [
            'forbidExtraProps',
            'exact',
            'Object.freeze',
        ],
    },
    rules: {
        "react/state-in-constructor": 0,
        "comma-dangle": [2, 'always-multiline'],
        "no-console": 0,
        "no-irregular-whitespace": 0,
        "no-underscore-dangle": 0,
        "array-bracket-spacing": [2, 'never'],
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'warn',

        'brace-style': 'off',
        '@typescript-eslint/brace-style': baseRules['brace-style'],

        'camelcase': 'off',
        '@typescript-eslint/naming-convention': [
            'off',
            {
                'selector': 'variable',
                'format': ['camelCase', 'PascalCase', 'UPPER_CASE'],
            },
            {
                'selector': 'function',
                'format': ['camelCase', 'PascalCase'],
            },
            {
                'selector': 'typeLike',
                'format': ['PascalCase'],
            },
        ],
        'no-underscore-dangle': 'off',
        'jsx-quotes': ['error', 'prefer-double'],
    }
}