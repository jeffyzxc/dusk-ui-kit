const path = require('path')

const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// const devMode = process.env.NODE_ENV !== 'production'
const SRC_DIR = `${__dirname}/src`
const DIST_DIR = `${__dirname}/dist`

// console.log(`Serving from: ${DIST_DIR}`)

module.exports = {
  entry: [`${SRC_DIR}/index.jsx`],
  output: {
    path: DIST_DIR,
    filename: 'duk-bundle.js',
    library: 'dusk-ui-kit',
    libraryTarget: 'umd',
    publicPath: '/dist/',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|sass|css)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.join(__dirname, 'node_modules')],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      // react: path.resolve(__dirname, './node_modules/react'),
      // 'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
  },
  // externals: {
  //   react: {
  //     commonjs: 'react',
  //     commonjs2: 'react',
  //     amd: 'React',
  //     root: 'React',
  //   },
  //   'react-dom': {
  //     commonjs: 'react-dom',
  //     commonjs2: 'react-dom',
  //     amd: 'ReactDOM',
  //     root: 'ReactDOM',
  //   },
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
}
