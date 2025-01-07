/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'parallaxBg1': "url('./src/assets/home/chef-service.jpg')",
        'parallaxBg2': "url('./src/assets/home/featured.jpg')",
        'authBg': "url('./src/assets/others/authentication.png')",

      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}