const path = require('path');
const { entry } = require('../using-babel-loader/webpack.config');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/bundle.js',
    },
};