import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif']
      },
      colors: {
        primary: '#1D3273',
        'primary-light': '#2a4494',
        'primary-dark': '#13214c',
        secondary: '#2BC7D9',
        'secondary-light': '#5ce0f0',
        'secondary-dark': '#1ba7b7',
        tertiary: '#72BF6F',
        'tertiary-light': '#91d48e',
        'tertiary-dark': '#56a353',

        // Aliases
        navy: '#1D3273',
        'navy-light': '#2a4494',
        'navy-dark': '#13214c',
        ink: '#121e42',
        cyan: '#2BC7D9',
        'cyan-light': '#5ce0f0',
        'cyan-dark': '#1ba7b7',
        purple: '#72BF6F',
        'purple-light': '#91d48e',
        'purple-dark': '#56a353',

        surface: '#f3f6fa',
        'surface-card': '#ffffff',
        'surface-muted': '#f8fafc'
      },
      boxShadow: {
        premium: '0 20px 50px rgba(29, 50, 115, 0.08)',
        premiumGlow:
          '0 0 0 4px rgba(43, 199, 217, 0.15), 0 20px 40px rgba(43, 199, 217, 0.12)',
        cardHover: '0 30px 60px rgba(29, 50, 115, 0.12)'
      }
    }
  }
} satisfies Config
