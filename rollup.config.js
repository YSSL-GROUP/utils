import { babel } from "@rollup/plugin-babel";
// import pkg from "./package.json";

// import { uglify } from "rollup-plugin-uglify";
const extensions = [".js", ".ts"];

export default {
  input: "src/index.ts",
  output: {
    format: "umd",
  },
  plugins: [babel({ babelHelpers: "bundled", extensions })],
};
