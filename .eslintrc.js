module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'ignorePatterns': ['cypress', 'public'],
    'settings': {
        'react': {
            'version': 'detect',
        }
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'project': 'tsconfig.json',
        'ecmaFeatures': {
            'jx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'react-hooks',
        '@typescript-eslint'
    ],
    'rules': {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'react/prop-types': ['off'],
        'react/prefer-stateless-function': ['error'],
        'no-unused-vars': ['off'],
        '@typescript-eslint/no-unused-vars-experimental': ['error'],
    }
};
