import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Apple-inspired neutral palette
        surface: {
          DEFAULT: '#FFFFFF',
          secondary: '#F5F5F7',
          tertiary: '#E8E8ED',
          dark: '#000000',
          'dark-secondary': '#1C1C1E',
          'dark-tertiary': '#2C2C2E',
        },
        content: {
          DEFAULT: '#1D1D1F',
          secondary: '#6E6E73',
          tertiary: '#86868B',
          inverse: '#F5F5F7',
          'inverse-secondary': '#A1A1A6',
        },
        border: {
          DEFAULT: '#D2D2D7',
          dark: '#38383A',
        },
        // Sophisticated accent - muted violet/indigo
        accent: {
          DEFAULT: '#5856D6',
          hover: '#4B49B6',
          light: '#7877E0',
          subtle: '#F3F2FF',
          'subtle-dark': '#2D2B5A',
        },
      },
    },
  },
  plugins: [],
}
export default config
