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
        'kfm-navy': '#012655',
        'kfm-blue': '#0065bf',
        'kfm-charcoal': '#484d53',
        'kfm-silver': '#a4a6a9',
        'kfm-white': '#ffffff',
        'carbon-black': '#012655',
        'paper-white': '#ffffff',
        'warm-canvas': '#f4f6f9',
        'mist-gray': '#edf2f7',
        'ash': '#a4a6a9',
        'smoke': '#71767c',
        'slate': '#484d53',
        'graphite': '#001a3d',
        'mint-chip': '#0065bf',
        'voltage-yellow': '#0065bf',
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
