/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // color palette reference: https://coolors.co/palette/d9ed92-b5e48c-99d98c-76c893-52b69a-34a0a4-168aad-1a759f-1e6091-184e77
      colors: {
        "primary-color1":"#D9ED92",
        "primary-color2":"#B5E48C",
        "primary-color3":"#99D98C",
        "primary-color4":"#76C893",
        "primary-color5":"#52B69A",
        "secondary-color1":"#34A0A4",
        "secondary-color2":"#168AAD",
        "secondary-color3":"#1A759F",
        "secondary-color4":"#1E6091",
        "secondary-color5":"#184E77",
      }
    },
  },
  plugins: [],
}