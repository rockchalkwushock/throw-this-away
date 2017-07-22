import babel from 'rollup-plugin-babel'
import cleanup from 'rollup-plugin-cleanup'
import filesize from 'rollup-plugin-filesize'
import gzip from 'rollup-plugin-gzip'
import multidest from 'rollup-plugin-multi-dest'

const opts = {
  babel: {
    exclude: 'node_modules/**',
    babelrc: false,
    presets: [['env', { loose: true, modules: false }]],
    plugins: ['external-helpers']
  },
  gzip: { minSize: 1000 }
}

export default {
  entry: 'src/index.js',
  format: 'es',
  dest: 'es/index.js',
  plugins: [
    multidest([
      {
        format: 'cjs',
        dest: 'lib/index.js',
        plugins: [babel(opts.babel)]
      }
    ]),
    gzip(opts.gzip),
    filesize(),
    cleanup()
  ]
}
