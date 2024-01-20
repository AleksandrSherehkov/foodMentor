/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        generalBlack: '#2D3436',
        darkGray: '#616161',
        depGray: '#374234',
        separatorLight: '#E1E1E1',
        disableGreen: '#5FCB39',
        liteGreen: 'rgba(95, 203, 57, 0.20)',
      },
      backgroundImage: {
        goalBgA:
          "url('/src/assets/images/goalA.svg'), linear-gradient(214deg, #F1F1F1 12.33%, #FFF 69.93%)",
        goalBgB:
          "url('/src/assets/images/goalB.svg'), linear-gradient(214deg, #F1F1F1 12.33%, #FFF 69.93%)",
        goalBgC:
          "url('/src/assets/images/goalC.svg'), linear-gradient(214deg, #F1F1F1 12.33%, #FFF 69.93%)",
        goalBgD:
          "url('/src/assets/images/goalD.svg'), linear-gradient(214deg, #F1F1F1 12.33%, #FFF 69.93%)",
        physicalExercise: "url('/icons/physicalExercise.svg')",
      },
    },
  },
  plugins: [],
};
