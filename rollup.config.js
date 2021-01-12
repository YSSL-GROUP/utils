import { babel } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { uglify } from "rollup-plugin-uglify";
import dts from "rollup-plugin-dts";
// import pkg from "./package.json";

const extensions = [".js", ".ts"];

export default [
  {
    input: "src/index.ts",
    external: ["react"],
    plugins: [
      nodeResolve({ extensions }),
      babel({ babelHelpers: "bundled", extensions, presets: ["@babel/preset-env", "@babel/preset-typescript"] }),
    ],
    output: [
      {
        file: "./lib/index.js",
        format: "cjs",
        exports: "named",
      },
      {
        file: "./lib/rs-utils.umd.js",
        format: "umd",
        name: "rsUtils",
      },
      {
        file: "./lib/rs-utils.umd.min.js",
        format: "umd",
        name: "rsUtils",
        plugins: [uglify()],
      },
      {
        file: "./lib/index.mjs",
        format: "es",
      },
    ],
  },
  {
    input: "src/index.ts",
    output: [{ file: "lib/type.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
