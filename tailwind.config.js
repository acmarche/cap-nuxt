/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                pathway: ["Pathway Gothic One", ...defaultTheme.fontFamily.sans],
                "pathway-medium": [
                    "pathway-medium",
                    ...defaultTheme.fontFamily.sans,
                ],
                "pathway-thin": ["pathway-thin", ...defaultTheme.fontFamily.sans],
                "pathway-light": [
                    "pathway-light",
                    ...defaultTheme.fontFamily.sans,
                ],
                "pathway-extra-light": [
                    "pathway-extra-light",
                    ...defaultTheme.fontFamily.sans,
                ],
                "pathway-regular": [
                    "pathway-regular",
                    ...defaultTheme.fontFamily.sans,
                ],
                "pathway-bold": ["pathway-bold", ...defaultTheme.fontFamily.sans],
                "pathway-semi-bold": [
                    "pathway-semi-bold",
                    ...defaultTheme.fontFamily.sans,
                ],
                "pathway-extra-bold": [
                    "pathway-extra-bold",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            colors: {
                blue: {
                    default: "#608BA4",
                    light: "#608ba4",
                    lighter: "#4f8ea5",
                    hard: "#0d6efd",
                    small: "#50afd2",
                    banner: "#9AD7F7"
                },
                green: {
                    default: "#A2BE63",
                    light: "#94af4d",
                    lighter: "#a8c564",
                    checks: "#00d19f",
                },
                grey: {
                    dark: "#707070",
                    footer: "#797979",
                    d: "#6c6b6b",
                    e: "#828080",
                    light: "#F8F8F8",
                    lighter: "#ededec"
                },
            }
        },
        objectPosition: {
            "top-center": "top center",
            "center-center": "center center",
            "bottom-center": "bottom center",
            "bottom-left": "bottom left"
        },
      backgroundImage: {
          'hero-pattern': "url('/assets/src/resources/homepageBackground.png')",
          'geometric': "url('/assets/src/resources/bg-geometric-left.png')",
          'checks': "url('/assets/src/resources/bg-cheques3.png')",
          'merchants-map': "url('/assets/src/resources/bg-map-diagonal.png')",
          'footer-texture': "url('/img/footer-texture.png')",
      }
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio")
    ],
}

