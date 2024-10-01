const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new (require('webpack')).DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
        // Add other flags as needed
      }),
    ],
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.15.67:8000', // Replace with your backend URL
        changeOrigin: true,  // This will ensure the origin is changed to the target URL
        pathRewrite: { '^/api': '' }, // Optionally, you can rewrite the path if needed
      },
    },
  },
});
