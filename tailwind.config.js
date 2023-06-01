/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'title': ['var(--font-title)'],
        'body': ['var(--font-body)'],
      },
      colors: {
        /** THEME PRIMARY COLORS */
        'primary-100': 'var(--primary-100)',
        'primary-200': 'var(--primary-200)',
        'primary-300': 'var(--primary-300)',
        'primary-400': 'var(--primary-400)',
        'primary-500': 'var(--primary-500)',
        'primary-600': 'var(--primary-600)',
        
        /** THEME SURFACE COLORS */
        'secondary-100': 'var(--secondary-100)',
        'secondary-200': 'var(--secondary-200)',
        'secondary-300': 'var(--secondary-300)',
        'secondary-400': 'var(--secondary-400)',
        'secondary-500': 'var(--secondary-500)',
        'secondary-600': 'var(--secondary-600)',
      },
      textColor: {
        'title': 'var(--title)',
        'body': 'var(--body)',
      }
    }
  },
  plugins: [],
}