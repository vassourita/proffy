const { name } = require('./package.json')
const tsconfig = require("./tsconfig.json")
const moduleNameMapper = require("tsconfig-paths-jest")(tsconfig)

module.exports = {
  displayName: name,
  name,
  preset: 'ts-jest',
  moduleNameMapper
}
