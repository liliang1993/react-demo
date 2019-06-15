const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addLessLoader
} = require("customize-cra");
// const rewireLess = require("react-app-rewire-less");

const path = require("path");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true // change importing css to less
  }),
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
    components: path.resolve(__dirname, "src/components"),
    layout: path.resolve(__dirname, "src/layout")
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" }
  })
);
