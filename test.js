module.exports = {
    extends: ['./base', './rules/test'].map(require.resolve)
};
