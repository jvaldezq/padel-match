import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ['ash-gray']: '#ACBDBA',
        azure: '#CDDDDD',
        ['rose-quartz']: '#A599B5',
        jet: '#2E2F2F',
        ['rich-black']: '#051014',
        success: '#2E7D32',
        info: '#0289D1',
        warning: '#ED6C02',
        error: '#D32F2F',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        white: '#ffffff',
        black: '#000000',
        ['anti-flash-white']: '#f0f5f5',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
} satisfies Config;
