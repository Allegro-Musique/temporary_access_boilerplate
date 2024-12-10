/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        allegro_red: '#f5573d',
        allegro_red_lighter: '#f2a396',
        allegro_hover: '#f77964',
        allegro_dark_red: '#D00000',
        allegro_gray: '#73808c',
        allegro_purple: '#8775a7',
        allegro_teal: '#43b7ae',
        allegro_blue: '#588EBD',
        allegro_light_gray: '#eeeeee',
        allegro_green: '#209F25',
        allegro_blue_lighter: '#5390BD',
        allegro_blue_darker: '#28284C',
        allegro_light_green: '#D3E5A1',
        allegro_warning: '#FFE599',
        allegro_brown: '#723B14',
      },
      keyframes: {
        smoothOpening: {
          '0%': { opacity: 0, maxHeight: '0'},
          '100%': { opacity: 1, maxHeight: '500px'},
        }
      },
      animation: {
        smoothOpening: 'smoothOpening 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}