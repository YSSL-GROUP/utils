import path from "path";
import babel from "rollup-plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import pkg from "./package.json";

import { uglify } from "rollup-plugin-uglify";

const extensions = [".js", ".ts"];

const resolve = function (...args) {
  return path.resolve(__dirname, ...args);
};

module.exports = {
  input: resolve("./src/index.ts"),
  output: {
    file: resolve("./", pkg.main), // 为了项目的统一性，这里读取 package.json 中的配置项
    format: "umd",
  },
  plugins: [
    nodeResolve({
      extensions,
      modulesOnly: true,
    }),
    babel({
      exclude: "node_modules/**",
      extensions,
    }),
  ],
};

if (process.env.NODE_ENV === "production") {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
      },
      warnings: false,
    }),
  );
}

module.exports = config;
