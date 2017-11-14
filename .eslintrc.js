module.exports = {
    extends: [
        'standard',
        'plugin:react/recommended'
      ],
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
          experimentalObjectRestSpread: true,
          es6: true,
          jsx: true
        }
      },
};