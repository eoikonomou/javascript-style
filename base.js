module.exports = {
    extends: ['airbnb-base'].concat(['./rules/base'].map(require.resolve)),
    rules: {}
};
