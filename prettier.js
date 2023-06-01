module.exports = {
    trailingComma: 'none',
    singleQuote: true,
    printWidth: 100,
    tabWidth: 4,
    bracketSameLine: false,
    arrowParens: 'avoid',
    endOfLine: 'lf',
    overrides: [
        {
            files: ['*Style.js', '*.{css,scss}'],
            options: {
                tabWidth: 2
            }
        }
    ]
};
