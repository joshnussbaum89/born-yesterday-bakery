/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      heading: ['Bobby Jones Soft Outline', 'sans-serif'],
      body: ['Bobby Jones Soft', 'serif'],
    },
    colors: {
      yellow: '#FFB93B',
    },
  },
  plugins: [],
}
