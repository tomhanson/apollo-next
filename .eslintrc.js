module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "plugins": [
        "prettier",
        "flowtype"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "prettier/prettier": [
            "warn",
            {
                "printWidth": 100,
                "singleQuote": true,
                "trailingComma": "es5",
                "bracketSpacing": true,
                "jsxBracketSameLine": false,
                "parser": "babylon",
                "semi": true
            }
        ],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "jsx-a11y/anchor-is-valid": [0, {
            "components": ["Link"],
            "specialLink": ["hrefLeft", "hrefRight"],
            "aspects": ["noHref", "invalidHref", "preferButton"]
        }],
        "react/prefer-stateless-function": [2, { "ignorePureComponents": true }]
    }
};