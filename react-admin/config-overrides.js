const {override, fixBabelImports, addLessLoader, adjustStyleLoaders} = require('customize-cra');
module.exports = override(
  // 针对antd实现按需打包: 根据import来打包(使用babel-plugin-import)
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,  // 自动打包相关的样式
  }),

  // 使用less-loader对源码中的less的变量进行重新指定
  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: {'@primary-color': '#1DA57A'},
  // }),

    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#1DA57A' },
        },
    }),
    // ↓加了这么个配置
    adjustStyleLoaders(({ use: [, , postcss] }) => {
        const postcssOptions = postcss.options;
        postcss.options = { postcssOptions };
    }),
)