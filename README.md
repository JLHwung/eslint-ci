# eslint-ci

[![Greenkeeper badge](https://badges.greenkeeper.io/JLHwung/eslint-ci.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/JLHwung/eslint-ci.svg?branch=master)](https://travis-ci.org/JLHwung/eslint-ci)

Fast ESLint for CI, inspired from [yaspeller-ci](https://github.com/ai/yaspeller-ci).

It is a simple wrap for [ESLint](https://github.com/eslint/eslint) and works well with ESLint from 1.x to the latest version. It runs lint check only in first CI job so that we can speed up build time and reduce unnecessary computation burden for CI service.

## Usage
Install `eslint-ci`
```bash
yarn add eslint-ci --dev
```
Note that `eslint` must be also installed since `eslint-ci` states peer dependencies on `eslint`.

Add it to npm scripts
```json
{
  "scripts": {
    "lint": "eslint-ci",
    "test": "npm run unit && npm run lint"
  }
}
```
