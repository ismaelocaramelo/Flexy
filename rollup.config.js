const resolve = require("@rollup/plugin-node-resolve");
const babel = require("rollup-plugin-babel");
const commonjs = require("@rollup/plugin-commonjs");
const external = require("rollup-plugin-peer-deps-external");
const uglify = require("rollup-plugin-uglify").uglify;

const minifyExtension = (pathToFile) => pathToFile.replace(/\.js$/, ".min.js");

const basePlugins = [
  babel({
    exclude: "node_modules/**",
    presets: ["@babel/env", "@babel/preset-react"],
  }),
  external(),
  resolve(),
  commonjs(),
];

const input = "lib/index";

module.exports = [
  {
    input,
    output: {
      file: "dist/flexy.bundle.js",
      format: "cjs",
      sourcemap: true,
    },
    plugins: basePlugins,
  },
  {
    input,
    output: {
      file: minifyExtension("dist/flexy.bundle.js"),
      format: "cjs",
    },
    plugins: [...basePlugins, uglify()],
  },
];
