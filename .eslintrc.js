module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb-base/legacy"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "linebreak-style": 0,
    "object-curly-spacing": 0,
    "no-unused-expressions": 0,
    "no-console": 0,
    "padded-blocks": 1
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    },
  }
};
