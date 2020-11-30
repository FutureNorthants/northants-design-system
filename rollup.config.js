import resolve from "@rollup/plugin-node-resolve"
import babel from "rollup-plugin-babel"
import url from "@rollup/plugin-url"
import autoExternal from "rollup-plugin-auto-external"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import commonjs from '@rollup/plugin-commonjs'
import json from "@rollup/plugin-json"

const extensions = [
    ".js", 
    ".jsx",
    ".ts",
    ".tsx"
]

export default {
    input: "src/index.js",
    output: {
        file: "dist/bundle.js",
        format: "cjs",
        globals: { 
            "styled-components": "styled"
        }
    },
    plugins: [
        resolve({
            extensions: extensions
        }),
        commonjs(),
        json(),
        peerDepsExternal(),
        autoExternal(),
        url(),
        babel({
            extensions: extensions,
            exclude: "node_modules/**"
        }),
    ],
    external: ["prop-types"],
}