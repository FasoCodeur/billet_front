module.exports = {
  "plugins": [
    "tailwindcss",
    "@typescript-eslint",
    // "react",
    // "react-hooks"
  ],
  "extends": [
    "next/core-web-vitals",
    "next/typescript",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
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
  settings: {
    tailwindcss: {
      callees: ["cn"],
    },
  },
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "off",
    // "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "off"
    // suppress errors for missing 'import React' in files
    // "react/react-in-jsx-scope": "off",
  }
};
