/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                mainPink: "#EEBECE",
                darkPink: "#FF8787",
                mainBlue: "#0B24FB"
            },
        },
        plugins: [],
    }
}