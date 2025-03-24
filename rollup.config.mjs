import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import packageJson from './package.json' assert {type: 'json'}
import url from '@rollup/plugin-url';
import { terser } from "rollup-plugin-terser";
import ignore from 'rollup-plugin-ignore';


export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: ['react', 'react-dom', 'react/jsx-runtime', '@storybook/react', '@storybook/addon-essentials',],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json'}),
      postcss({
        extensions: ['.css'],
        minimize: true,
        sourceMap: true,
        modules: true,
        inject: { insertAt: 'top' },
      }),
      url({
        include: ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif"],
        limit: 10000, // 10kb 이하 이미지는 Base64로 인라인 처리
        emitFiles: true, // 파일을 빌드 폴더에 복사
      }),
      terser(),
      ignore(['@storybook/react', '@storybook/addon-essentials']),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    extends: [/\.css$/],
  },
];