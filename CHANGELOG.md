# eslint-config-semistandard change log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## 4.0.0 - 2015-06-16
### BREAKING CHANGE: react rules removed from standard and moved to eslint-config-standard-react
* To include the react rules, extend from both packages in your eslint config:
```
{
  "extends": ["semistandard", "standard-react"]
}
```

* New Rules coming from eslint-config-standard:
* [accessor-pairs](http://eslint.org/docs/rules/accessor-pairs.html) - warns if setters are defined without getters.
* ["one-var": [2, { "initialized": "never" }]](http://eslint.org/docs/rules/one-var.html) - Split initialized 'var' declarations into multiple statements.

## 3.0.0 - 2015-06-03

### BREAKING CHANGE: New Rules
* [no-extra-semi](http://eslint.org/docs/rules/no-extra-semi) - This rule is aimed at eliminating extra unnecessary semicolons. While not technically an error, extra semicolons can be a source of confusion when reading code.

* [semi-spacing](http://eslint.org/docs/rules/semi-spacing) - Disallow a space before semicolons and force a space after them.

## 2.0.0 - 2015-05-30
* Update to `standard` 2.0.0 which has a breaking change:
  * new rule [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak.html)
