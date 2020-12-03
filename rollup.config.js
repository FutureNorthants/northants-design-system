import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";import svg from 'rollup-plugin-svg'

const packageJson = require("./package.json");

const extensions = [
  ".js", 
  ".jsx",
  ".ts",
  ".tsx"
]

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: extensions
    }),
    commonjs(),
    svg(),
    typescript({ useTsconfigDeclarationDir: true })
  ]
};
