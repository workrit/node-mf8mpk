const path = require("path");
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    // work around
    // disableHostCheck: true,
    watchOptions: {
      poll: 1000 // Check for changes every second
    },
    target: ['web','es5'],
    mode: 'development', 
    entry:{
        bundle: path.resolve(__dirname,'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
      },
      devtool: 'source-map',
      devServer: {
        static: {
          directory: path.resolve(__dirname, 'dist'),
        },
        port: 8010,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
      },
  
    module: {
        rules: [
            {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
            },
            {
              
                loader: 'babel-loader',
                test: /\.js$|jsx/,
                exclude: /node_modules/
              },
              {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Webpack App',
          filename: 'index.html',
          template: 'src/template.html',
        }),
      ],
}
