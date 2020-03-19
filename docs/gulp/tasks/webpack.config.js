const path = require('path');

var setting = {
    entry: {
      "main": '../../src/js/main.es6',
      // "main": "../../dev/assets/devjs/src/es6/main.js",
      // "page01": PATH.dev.devjs + "src/Page01.js",
    },
    output: {
        path: "../../dist/assets/js/",
        // filename: "[name].js"
        filename: "app.js"
    },
    module: {
        loaders: [
            // { test: /\.css$/, loader: "style!css" },
            {
              test: [/\.js$/,/\.es6$/,/\.json$/],
              exclude: /(node_modules|bower_components)/,
              include: [
                path.resolve('../../src/')
              ],
              loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
              query: {
                presets: ["babel-preset-es2015", "babel-preset-es2016", "babel-preset-es2017"]
              },
            },
            // {test: /\.json$/, loaders: ['json', 'strip-json-comments-loader']},
            // {test: /\.(glsl|frag|vert|vs|fs)$/, exclude: /node_modules/, loader: 'glslify-import'},
            // {test: /\.(glsl|frag|vert|vs|fs)$/, loader: 'raw'},
            // {test: /\.(glsl|frag|vert|vs|fs)$/, loader: 'glslify' },
        ]
    },
    cache: false,
    // devtool: 'source-map',
    devtool: 'inline-source-map',
    resolve: {
      root: [
        path.resolve('../../src/'),
        path.join(__dirname, 'node_modules')
       ]
     },
    resolveLoader: {
      root: path.join(__dirname, 'node_modules')
    },
};


module.exports = setting;
