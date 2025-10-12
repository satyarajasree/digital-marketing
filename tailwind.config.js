module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#2563eb',
          dark: '#1e293b',
          light: '#f8fafc'
        }
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
      }
    },
  },
  plugins: [],
}