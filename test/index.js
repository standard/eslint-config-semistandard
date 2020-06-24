'use strict';

const { CLIEngine } = require('eslint');
const test = require('tape');

const configFile = require.resolve('../.eslintrc');
const linter = new CLIEngine({ configFile });

test('api: lintText', t => {
  t.plan(1);
  const result = linter.executeOnText("console.log('hi there')\n\n");
  t.equals(result.results[0].messages[0].message, 'Missing semicolon.');
});
