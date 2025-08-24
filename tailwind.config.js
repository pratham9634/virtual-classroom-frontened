/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class", 
content: ["./index.html", "./src/**/*.{js,jsx}"],
theme: {
container: { center: true, padding: "1rem" },
extend: {
colors: {
brand: {
DEFAULT: "#5b7cfa",
dark: "#3d5ae6",
light: "#7e96ff",
},
},
fontFamily: {
sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
},
},
},
plugins: [],
};

