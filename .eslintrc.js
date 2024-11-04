module.exports = {
  "extends": [
    "next/core-web-vitals",
    "next/typescript",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "plugins": [
    "@typescript-eslint",
    "react",
    "react-hooks"
  ],
  overrides: [
    {
      files: ["tailwind.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  "rules": {
    "react/prop-types": "off"
    // suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
  }
};
