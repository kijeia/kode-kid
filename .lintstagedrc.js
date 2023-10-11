const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`

const prettier = (filenames) => `yarn prettier --write ${filenames.join(' ')}`

module.exports = {
  '*.{ts,tsx}': [buildEslintCommand, prettier],

  '**/*.{css,scss,md,html,json}': [prettier] 
}