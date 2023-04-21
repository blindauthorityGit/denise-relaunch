// /** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                ...fontFamily,
                freight: ["freight-display-pro", "serif"],
                barlow: ["Barlow Condensed", "sans-serif"],
            },
            colors: {
                primaryColor: {
                    DEFAULT: "#B1A269",
                    50: "#F0EDE2",
                    100: "#E9E5D4",
                    200: "#DBD4BA",
                    300: "#CDC39F",
                    400: "#BFB384",
                    500: "#B1A269",
                    600: "#95864D",
                    700: "#70653A",
                    800: "#4B4327",
                    900: "#262214",
                    950: "#13110A",
                },
                darkText: "#4C4D4F",
                darkBG: "#1B1B1C",
                bg: "#FBFBF5",
                redColor: "#FE654F",
                greenColor: "#61E8E1",
            },
            height: {
                "calc-screen": "calc(100vh - 5rem)",
            },
        },
    },
    plugins: [],
};
