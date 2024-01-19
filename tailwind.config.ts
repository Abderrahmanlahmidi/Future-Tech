import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      colors:{
        "Dark-Primary": "#141414",
        "Dark-Secondary": "#262626",
        "Grey": "#98989A",
        "Yellow": "#FFD11A"
      }
  },
  plugins: [],
}
export default config
