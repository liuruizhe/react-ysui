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
    "jsx-a11y/img-has-alt": ["off"],
    "react/jsx-space-before-closing": ["off"],
    "react/jsx-tag-spacing": ["error", {"beforeSelfClosing": "always"}],
    "react/jsx-filename-extension": ["warn", {"extensions": [".js", ".jsx"]}],
  },
  "plugins": [
    "import",
    "react",
    "jsx-a11y",
  ],
  "globals": {
    "it": true,
    "describe": true,
  }
};
