/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'es5',
  printWidth: 110,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  bracketSameLine: true,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cn'],
}

module.exports = config
