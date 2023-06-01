module.exports = {
    extends: ['./react', './rules/test', './rules/test-react'].map(require.resolve)
};
