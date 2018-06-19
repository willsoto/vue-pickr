import vue from 'rollup-plugin-vue';
import filesize from 'rollup-plugin-filesize';
import eslint from 'rollup-plugin-eslint';

import pkg from './package.json';

// sourcemaps currently broken:
// https://github.com/vuejs/rollup-plugin-vue/issues/194
const outputs = [
  {
    format: 'umd',
    file: pkg.main,
    name: 'VuePickr',
    globals: {
      'pickr-widget': 'Pickr'
    }
  },
  {
    format: 'esm',
    file: pkg.module
  },
  {
    format: 'cjs',
    file: 'dist/VuePickr.ssr.js'
  }
];

const libs = outputs.map((output) => {
  return {
    input: 'src/vue-pickr.vue',
    output: output,
    external: ['pickr-widget'],
    plugins: [eslint(), vue(), filesize()]
  };
});

export default libs;
