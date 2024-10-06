import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    gridTemplateColumns: {
      'fill-auto': 'repeat(auto-fill, minmax(300px, 1fr))',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'primary-dark-navy': '#0F1C2E',
        'secondary-dark-navy': '#1F3A5F',
        'primary-dark-gray': '#1f2b3e',
        'secondary-dark-gray': '#374357',
        'light-gray': '#e0e0e0',
        'dark-skyblue': '#4d648d',
        'light-skyblue': '#cee8ff',
      },
    },
  },
  plugins: [],
};
export default config;
