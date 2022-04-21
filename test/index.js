'use strict';

const { ESLint } = require('eslint');
const test = require('tape');

const overrideConfigFile = require.resolve('../eslintrc.json');
const linter = new ESLint({ overrideConfigFile });

test('api: lintText', async t => {
  t.plan(1);
  const [result] = await linter.lintText("console.log('hi there')\n\n");
  t.equal(result.messages[0].message, 'Missing semicolon.');
});
