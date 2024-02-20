import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pale-blue': 'hsl(221,100%,96%)',
        'slate-blue': {
          light: 'hsl(252,100%,67%)',
          dark: 'hsl(241,81%, 54%)',
        },
        'light-red': {
          full: 'hsl(0, 100%, 67%)',
          alfa: 'hsla(0, 100%, 67%,0.1)',
        },
        'violet-blue': 'hsla(256,72%,46%, 1)',
        'persian-blue': 'hsla(241,72%, 40%,0.07)',
        'orange-yellow': {
          full: 'hsl(39, 100%, 56%)',
          alfa: 'hsla(39, 100%, 56%, 0.07)',
        },
        'green-teal': {
          full: 'hsl(166,100%,37%)',
          alfa: 'hsla(166,100%,37%, 0.07)',
        },
        'cobalt-blue': {
          full: 'hsl(234,85%, 45%)',
          alfa: 'hsla(234,85%, 45%, 0.07)',
        },
      },
    },
  },
  plugins: [],
}
export default config
