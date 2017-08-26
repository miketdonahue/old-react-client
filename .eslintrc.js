module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react"
  ],
  "parser": "babel-eslint", // You only need to use babel-eslint if you are using types (Flow) or experimental features not supported in ESLint itself yet
  "parserOptions": {
    "ecmaVersion": 2016,
    "sourceType": "module",
    "ecmaFeatures":{
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jest": true
  }
};
