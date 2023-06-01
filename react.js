module.exports = {
    extends: ['airbnb-base', 'airbnb-base/rules/strict', 'airbnb/rules/react'].concat(
        ['./rules/base', './rules/react'].map(require.resolve)
    ),
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    }
};
