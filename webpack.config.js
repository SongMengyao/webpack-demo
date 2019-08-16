const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 入口文件
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  // 找寻bug所在的确切位置
  devtool: 'inline-source-map',
  // web server，监视所有文件的变化，自动打包，自动刷新浏览器
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    // build 前清空dist文件夹
    new CleanWebpackPlugin(),
    // 生成dist文件夹里面的index.html文件
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  // 输出文件
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      // 处理css文件  style-loader css-loader
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // 处理图片  file-loader
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      // 处理字体  file-loader
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      // 处理 csv tsv文件  csv-loader
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      // 处理 xml 文件  xml-loader
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
};
