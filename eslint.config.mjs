import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import jsxA11y from "eslint-plugin-jsx-a11y";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:prettier/recommended",
  ),
  {
    plugins: {
      "jsx-a11y": jsxA11y,
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          printWidth: 80,
          tabWidth: 2,
          singleQuote: false,
          trailingComma: "all",
          arrowParens: "always",
          semi: true,
          endOfLine: "auto",
        },
      ],
      "jsx-a11y/alt-text": [
        "warn",
        {
          elements: ["img"],
          img: ["Image"],
        },
      ],
      // "jsx-a11y/aria-props": "warn",
      // "jsx-a11y/aria-proptypes": "warn",
      // "jsx-a11y/aria-unsupported-elements": "warn",
      // "jsx-a11y/role-has-required-aria-props": "warn",
      // "jsx-a11y/role-supports-aria-props": "warn",
      // "react/no-unknown-property": "error",
    },
  },
];

export default eslintConfig;
