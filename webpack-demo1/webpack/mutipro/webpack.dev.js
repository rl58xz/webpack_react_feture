const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');
const path = require('path');
const { srcPath, distPath } = require('./paths');

module.exports = merge(webpackCommon,{
    mode:"development",
    devServer: {
        contentBase: path.join(distPath),
        open:true,
        compress:true,
        port:8080
    }
});
