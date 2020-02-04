const path = require('path')

const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const sass = require('node-sass')
const sassUtils = require('node-sass-utils')(sass)

const duskTheme = require('./src/config/dusk.theme.js')

function convertStringToSassDimension(result) {
  if (typeof result !== 'string') {
    return result
  }
  const cssUnits = [
    'rem',
    'em',
    'vh',
    'vw',
    'vmin',
    'vmax',
    'ex',
    '%',
    'px',
    'cm',
    'mm',
    'in',
    'pt',
    'pc',
    'ch',
  ]
  const parts = result.match(/[a-zA-Z]+|[0-9]+/g)
  const value = parts[0]
  const unit = parts[parts.length - 1]
  if (cssUnits.indexOf(unit) !== -1) {
    return new sassUtils.SassDimension(parseInt(value, 10), unit)
  }
  return result
}

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
              sassOptions: {
                functions: {
                  'get($keys)': function(keys) {
                    // console.log('getting key...')
                    keys = keys.getValue().split('.')
                    let result = duskTheme
                    let i
                    // console.log(keys)
                    for (i = 0; i < keys.length; i++) {
                      result = result[keys[i]]
                      if (typeof result === 'string') {
                        result = convertStringToSassDimension(result)
                      } else if (typeof result === 'object') {
                        Object.keys(result).forEach(function(key) {
                          const value = result[key]
                          result[key] = convertStringToSassDimension(value)
                        })
                      }
                    }
                    // console.log(result)
                    result = sassUtils.castToSass(result)
                    // console.log(result)
                    return result
                  }
                },
              },
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
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
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
