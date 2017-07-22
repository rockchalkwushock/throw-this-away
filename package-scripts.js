const npsUtils = require('nps-utils')

const { concurrent, crossEnv, rimraf, series } = npsUtils

module.exports = {
  scripts: {
    build: `${crossEnv('NODE_ENV=production')} rollup -c`,
    clean: series(rimraf('coverage'), rimraf('es'), rimraf('lib')),
    commit: 'git cz',
    default: 'nps',
    lint: {
      default: 'eslint src __tests__',
      fix: series.nps('lint --fix')
    },
    reportCoverage: 'codecov',
    test: {
      default: 'jest --config jest.config.json --runInBand',
      coverage: series.nps('test --coverage --silent'),
      watch: series.nps('test --watch')
    },
    validate: {
      default: concurrent.nps('lint', 'test'),
      withCoverage: concurrent.nps('lint', 'test.coverage')
    }
  }
}
