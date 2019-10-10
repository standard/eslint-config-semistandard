'use strict';

/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  extends: 'standard',
  rules: {
    semi: ['error', 'always'],
    'no-extra-semi': 'error'
  }
};
