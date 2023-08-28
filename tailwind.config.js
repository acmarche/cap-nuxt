/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
                pathway: ['Pathway Extreme', ...defaultTheme.fontFamily.sans],
                'pathway-medium': [
                    'pathway-medium',
                    ...defaultTheme.fontFamily.sans,
                ],
                'pathway-thin': [
                    'pathway-thin', ...defaultTheme.fontFamily.sans
                ],
                'pathway-light': [
                    'pathway-light',
                    ...defaultTheme.fontFamily.sans,
                ],
                'pathway-extra-light': [
                    'pathway-extra-light',
                    ...defaultTheme.fontFamily.sans,
                ],
                'pathway-regular': [
                    'pathway-regular',
                    ...defaultTheme.fontFamily.sans,
                ],
                'pathway-bold': [
                    'pathway-bold', ...defaultTheme.fontFamily.sans
                ],
                'pathway-semi-bold': [
                    'pathway-semi-bold',
                    ...defaultTheme.fontFamily.sans,
                ],
                'pathway-extra-gold': [
                    'pathway-extra-bold',
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            colors: {
                blue: {
                    default: '#608BA4',
                    light: '#608ba4',
                    lighter: '#4f8ea5',
                    hard: '#0d6efd',
                    small: '#50afd2',
                    banner: '#9AD7F7',
                    search: '#3a87a4',
                },
                green: {
                    default: '#A2BE63',
                    light: '#94af4d',
                    lighter: '#a8c564',
                    checks: '#00d19f',
                },
                grey: {
                    dark: '#707070',
                    footer: '#797979',
                    shop: '#6c6b6b',
                    e: '#828080',
                    light: '#F8F8F8',
                    lighter: '#ededec',
                    white: '#fefefc',
                    tt: '#f5fafce8'
                },
            }
        },
        objectPosition: {
            'top-center': 'top center',
            'center-center': 'center center',
            'bottom-center': 'bottom center',
            'bottom-left': 'bottom left'
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio')
    ],
}

