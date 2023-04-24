/* eslint-disable prettier/prettier */
module.exports = {
  lintOnSave: false,
  devServer: {
    port: 3012,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      library: "vueApp",
      libraryTarget: "umd",
    },
  },
};
