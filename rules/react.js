module.exports = {
    rules: {
        'react/jsx-indent-props': [2, 4],
        'react/jsx-indent': [2, 4],
        'react/forbid-prop-types': 0,
        'react/no-danger': 0,
        'react/no-unescaped-entities': 'error',
        'react/no-array-index-key': 0,
        'react/no-find-dom-node': 'error',
        'react/button-has-type': 0,
        'react/destructuring-assignment': 'error',
        'react/function-component-definition': [
            2,
            { namedComponents: ['function-declaration', 'arrow-function'] }
        ],
        'react/require-default-props': 0,
        'react/no-unknown-property': [
            'error',
            { ignore: ['actionKey', 'actionkey', 'inhand', 'css'] }
        ],
        'react/jsx-no-bind': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-props-no-spreading': 0,
        'react/jsx-no-useless-fragment': 'error',
        'react/prefer-stateless-function': 0
    }
};
