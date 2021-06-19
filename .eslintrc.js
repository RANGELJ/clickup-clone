module.exports = { // eslint-disable-line
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    env: {
        jest: true,
        browser: true,
    },
    rules: {
        indent: ['error', 4],
    },
}