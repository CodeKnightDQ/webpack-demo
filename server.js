/*
 * @Author: daiqi@sogou-inc.com
 * @Date: 2021-07-09 19:46:32
 * @Description: 
 */
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

app.listen(3000, function() {
    console.log('example app listening!');
});