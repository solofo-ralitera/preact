const path = require('path');

module.exports = {
    entry: './main.jsx',
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/dist/'
    },
    resolve: {
        extensions : ['.js', '.jsx']
    },
    module : {
        rules : [
            {
                test: /\.(js|jsx)/,
                use : ['babel-loader'],
                exclude: ['/node_modules/']
            }
        ]
    }
};