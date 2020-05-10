const resolve = require("@rollup/plugin-node-resolve");
const babel = require("rollup-plugin-babel");
const commonjs = require("@rollup/plugin-commonjs");
const external = require("rollup-plugin-peer-deps-external");
const packageJSON = require("./package.json");

module.exports = {
  input: "lib/index",
  output: {
    file: packageJSON.main,
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/env", "@babel/preset-react"],
    }),
    external(),
    resolve(),
    commonjs(),
  ],
};
