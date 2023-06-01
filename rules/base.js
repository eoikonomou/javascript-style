module.exports = {
    settings: {
        'import/resolver': 'webpack'
    },
    rules: {
        indent: [
            2,
            4,
            {
                SwitchCase: 1
            }
        ],
        'comma-dangle': ['error', 'never'],
        'no-trailing-spaces': ['error', { ignoreComments: true }],
        'max-len': 0,
        'spaced-comment': ['error', 'always', { block: { balanced: true } }],
        'no-case-declarations': 0,
        'no-underscore-dangle': 0,
        radix: 0,
        'no-prototype-builtins': 0,
        'arrow-parens': ['error', 'as-needed'],
        'arrow-body-style': 0,
        'no-void': 0,
        'no-continue': 0,
        'no-plusplus': 0,
        'no-restricted-syntax': 0,
        'class-methods-use-this': 0,
        'no-mixed-operators': 'error',
        'import/no-dynamic-require': 0,
        'prefer-promise-reject-errors': 0,
        'operator-linebreak': ['error', 'after'],
        'function-paren-newline': 0,
        'no-restricted-globals': 0,
        'default-param-last': 0,
        'consistent-return': 0,
        'import/prefer-default-export': 0,
        'no-unused-expressions': ['error', { allowShortCircuit: true }],
        'no-async-promise-executor': 0,
        'max-classes-per-file': 0,
        'prefer-destructuring': 'error',
        'no-self-assign': 'error',
        'no-return-assign': ['error', 'except-parens'],
        'no-param-reassign': 0,

        'import/no-cycle': 'error',
        'import/no-import-module-exports': 0,
        'import/no-unresolved': 0,

        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error'
    }
};
