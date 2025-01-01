/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D3557', // Navy blue - primary brand color
          light: '#457B9D', // Medium blue
          dark: '#0D1B2A', // Darker navy
          hover: '#2A4A80', // Specific hover for contact button
        },
        secondary: {
          DEFAULT: '#F1FAEE', // Mint green
          lighter: '#FFFFFF', // White
          light: '#F8F9FA', // Light gray
          dark: '#E9ECEF', // Darker mint
        },
        accent: {
          DEFAULT: '#FFE4E6', // Light rose
          light: '#FFF1F2', // Lighter rose
          dark: '#FDA4AF', // Darker rose
          hover: '#FECDD3', // Rose hover
        },
        text: {
          primary: '#1D3557', // Navy for main text
          secondary: '#457B9D', // Medium blue for secondary
          muted: '#6B7280', // Gray for muted text
        },
        background: {
          DEFAULT: '#FFFFFF', // White
          alt: '#F8F9FA', // Light gray
          dark: '#1D3557', // Navy
          rose: '#FFF1F2', // Light rose
        }
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
}
