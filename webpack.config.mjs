import { fileURLToPath } from 'url'
import ShebangPlugin from 'webpack-shebang-plugin'

export default {
  target: 'node'
, mode: 'none'
, node: {
    global: true,
    __filename: true,
    __dirname: true,
  }
, entry: './lib/cli.js'
, output: {
    path: fileURLToPath(new URL('dist', import.meta.url))
  , filename: 'cli.cjs'
  }
, plugins: [
    new ShebangPlugin()
  ]
, externals: {
    'fsevents': 'commonjs fsevents'
  , 'better-sqlite3': 'commonjs better-sqlite3'
  , 'extra-disk-cache': 'commonjs extra-disk-cache'
  }
}
