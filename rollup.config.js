import { babel } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { uglify } from "rollup-plugin-uglify";
// import pkg from "./package.json";

const extensions = [".js", ".ts"];

export default {
  input: "src/index.ts",
  plugins: [
    nodeResolve({ extensions }),
    babel({ babelHelpers: "bundled", extensions, presets: ["@babel/preset-env", "@babel/preset-typescript"] }),
  ],
  output: [
    {
      file: "./dist/rs-utils.umd.js",
      format: "umd",
      name: "rsUtils",
    },
    {
      file: "./dist/rs-utils.umd.min.js",
      format: "umd",
      name: "rsUtils",
      plugins: [uglify()],
    },
    {
      file: "./dist/rs-utils.mjs",
      format: "es",
    },
  ],
};
