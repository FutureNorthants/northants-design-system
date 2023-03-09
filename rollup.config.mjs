import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import svg from 'rollup-plugin-svg';
import json from '@rollup/plugin-json';
import { readFileSync } from 'node:fs';

// Use import.meta.url to make the path relative to the current source
// file instead of process.cwd(). For more information:
// https://nodejs.org/docs/latest-v16.x/api/esm.html#importmetaurl
const packageJson = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      interop: 'auto',
    },
    {
      file: packageJson.module,
      format: 'es',
      sourcemap: true,
      interop: 'auto',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: extensions,
      preferBuiltins: true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    svg(),
    typescript({ useTsconfigDeclarationDir: true }),
    json({
      // All JSON files will be parsed by default,
      // but you can also specifically include/exclude files
      include: 'node_modules/**',
      exclude: ['node_modules/foo/**', 'node_modules/bar/**'],

      // for tree-shaking, properties will be declared as
      // variables, using either `var` or `const`
      preferConst: true, // Default: false

      // specify indentation for the generated default export —
      // defaults to '\t'
      indent: '  ',

      // ignores indent and generates the smallest code
      compact: true, // Default: false

      // generate a named export for every property of the JSON object
      namedExports: true, // Default: true
    }),
  ],
};
