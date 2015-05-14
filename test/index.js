var eslint = require('eslint')
var fs = require('fs')
var test = require('tape')
var path = require('path')
var cfg = require('../index.js')

fs.writeFileSync(path.join(__dirname, 'semistandard.json'), JSON.stringify(cfg))

var linter = new eslint.CLIEngine({
  configFile: path.join(__dirname, 'semistandard.json')
})

test('api: lintText', function (t) {
  t.plan(1)
  var result = linter.executeOnText("console.log('hi there')\n\n")
  t.equals(result.results[0].messages[0].message, 'Missing semicolon.')
})
