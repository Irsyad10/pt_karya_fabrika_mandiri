// tailwind.config.ts
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'carbon-black': '#000000',
        'paper-white': '#ffffff',
        'warm-canvas': '#e5e5e5',
        'mist-gray': '#f3f3f3',
        'ash': '#c6c6c6',
        'smoke': '#979797',
        'slate': '#444444',
        'graphite': '#2f2f2f',
        'mint-chip': '#d1ffca',
        'voltage-yellow': '#fff100',
      },
      fontFamily: {
        condensed: ['Barlow Condensed', ...defaultTheme.fontFamily.sans],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      borderRadius: {
        'tag': '64px',
        'card': '32px',
        'button': '8px',
        'pill': '48px',
        'large': '64px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};

export default config;
