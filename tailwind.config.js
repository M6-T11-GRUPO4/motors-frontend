/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        'lexend': ['Lexend',"sans-serif"],
        'inter': ['Inter',"sans-serif"],
      },
      colors: {
        "-brand1": "#4529E6",
        "-brand2": "#5126EA",
        "-brand3": "#B0A6F0",
        "-brand4": "#EDEAFD",
        "-grey-0": "#0B0D0D",
        "-grey-1": "#212529",
        "-grey-2": "#495057",
        "-grey-3": "#868E96",
        "-grey-4": "#ADB5BD",
        "-grey-5": "#CED4DA",
        "-grey-6": "#DEE2E6",
        "-grey-7": "#E9ECEF",
        "-grey-8": "#F1F3F5",
        "-grey-9": "#F8F9FA",
        "-grey-10": "#FDFDFD",
        "-white-fixed": "#FFFFFF", 
        "-alert-1": "#CD2B31",
        "-alert-2": "#FDD8D8",
        "-alert-3": "#FFE5E5",
        "-sucess-1": "#18794E",
        "-sucess-2": "#CCEBD7",
        "-sucess-3": "#DDF3E4",
        "-random-1": "#E34D8C",
        "-random-2": "#C04277",
        "-random-3": "#7D2A4D",
        "-random4": "#7000FF",
        "-random5": "#6200E3",
        "-random6": "#36007D",
        "-random7": "#349974",
        "-random8": "#2A7D5F",
        "-random9": "#153D2E",
        "-random10": "#6100FF",
        "-random11": "#5700E3",
        "-random12": "#30007D",
      },
    },
    
   
  },
  plugins: [require("tailwindcss"), require("autoprefixer")], 
}

