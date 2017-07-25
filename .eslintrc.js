module.exports = {
  "extends": "airbnb",
  "installedESLint": true,
  "env": {
    "browser": true,
    "node": true,
  },
  "rules": {
    "linebreak-style": ["error", "unix"],
    "strict": ["off", "global"],
  },
  "plugins": [
    "react"
  ],
  "globals": {
    "it": true,
    "describe": true
  }
};
