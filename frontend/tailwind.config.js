/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60A5FA', // light blue
          DEFAULT: '#3B82F6', // blue
          dark: '#2563EB', // darker blue
        },
        secondary: {
          light: '#A78BFA', // light purple
          DEFAULT: '#8B5CF6', // purple
          dark: '#7C3AED', // darker purple
        },
      },
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
