const path = require('path');

module.exports = {
    entry: './main.jsx',
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/dist/'
    },
    resolve: {
        extensions : ['.js', '.jsx'],
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat',
            'create-react-class': 'preact-compat/lib/create-react-class'
        }
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