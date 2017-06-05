var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './app.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './src')
    },
    plugins: [new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development, 
        // ./public directory is being served 
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['src'] }
    })
    ]
}