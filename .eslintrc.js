module.exports = {
    rules: {
        indent: [2, 4],
        quotes: [2, 'single'],
        'linebreak-style': [2, 'unix'],
        semi: [2, 'always'],
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                tabWidth: 4,
                printWidth: 120
            }
        ]
    },
    env: {
        es6: true,
        browser: true
    },
    plugins: ['prettier'],
    extends: 'prettier'
};
