module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2016,
    "sourceType": "module",
    "ecmaFeatures":{
      "jsx": true
    }
  },
  "rules": {
    "jsx-a11y/label-has-for": [2, {"required": {"every": ["id"]} }],
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "webpack.dev.js"
      }
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jest": true
  }
};
