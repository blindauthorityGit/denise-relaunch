// /** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                ...fontFamily,
                freight: ["freight-display-pro", "serif"],
            },
            colors: {
                primaryColor: {
                    DEFAULT: "#AEA46B",
                    50: "#EFEDE2",
                    100: "#E8E5D4",
                    200: "#D9D5BA",
                    300: "#CBC4A0",
                    400: "#BCB485",
                    500: "#AEA46B",
                    600: "#918850",
                    700: "#6D663C",
                    800: "#494428",
                    900: "#252214",
                    950: "#12110A",
                },
                darkText: "#4C4D4F",
            },
        },
    },
    plugins: [],
};
