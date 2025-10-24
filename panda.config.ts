import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          // Rick and Morty theme colors extracted from current design
          primary: {
            dark: { value: '#52331a' },      // Main brown color
            light: { value: '#bdada0' },     // Light brown/beige
            accent: { value: '#5c3412' },    // Darker brown
          },
          rick: {
            blue: { value: '#00b4d8' },      // Rick's shirt blue
            green: { value: '#90e0ef' },     // Portal green
            yellow: { value: '#ffd60a' },    // Morty's shirt yellow
          },
          neutral: {
            50: { value: '#fafafa' },
            100: { value: '#f5f5f5' },
            200: { value: '#e5e5e5' },
            300: { value: '#d4d4d4' },
            400: { value: '#a3a3a3' },
            500: { value: '#737373' },
            600: { value: '#525252' },
            700: { value: '#404040' },
            800: { value: '#262626' },
            900: { value: '#171717' },
          }
        },
        fonts: {
          poppins: { value: 'Poppins, sans-serif' },
          merienda: { value: 'Merienda, sans-serif' },
        },
        spacing: {
          'nav-height': { value: '2vh' },
          'main-width': { value: '90vw' },
          'main-max-width': { value: '1024px' },
        },
        shadows: {
          card: { value: '0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)' },
        },
        radii: {
          full: { value: '50%' },
        }
      },
      semanticTokens: {
        colors: {
          bg: {
            DEFAULT: { value: '{colors.primary.light}' },
            card: { value: '{colors.neutral.50}' },
          },
          text: {
            DEFAULT: { value: '{colors.primary.dark}' },
            muted: { value: '{colors.primary.accent}' },
            light: { value: '{colors.primary.light}' },
          },
          border: {
            DEFAULT: { value: '{colors.neutral.300}' },
            dark: { value: '{colors.primary.dark}' },
          }
        }
      }
    }
  },

  // The output directory for your css system
  outdir: 'styled-system',

  // Global CSS selector
  globalCss: {
    html: {
      boxSizing: 'border-box',
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },
    body: {
      margin: 0,
      padding: 0,
      fontFamily: 'poppins',
      backgroundColor: 'bg',
      color: 'text',
    },
    '@import': [
      'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800;900&family=Merienda:wght@400;700&display=swap'
    ]
  },

  // Custom patterns for common UI patterns
  patterns: {
    container: {
      description: 'Main container layout',
      properties: {
        maxWidth: { type: 'property', value: 'main-max-width' },
        width: { type: 'property', value: 'main-width' },
        margin: { type: 'property', value: '0 auto' },
        padding: { type: 'string' },
        background: { type: 'property', value: 'bg' },
        boxShadow: { type: 'property', value: 'card' },
      },
      defaultValues: {
        padding: '15px',
      },
      transform(props: any) {
        return {
          maxWidth: props.maxWidth,
          width: props.width,
          margin: props.margin,
          padding: props.padding,
          background: props.background,
          boxShadow: props.boxShadow,
        }
      }
    },
    cardGrid: {
      description: 'Grid layout for character cards',
      transform() {
        return {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
        }
      }
    },
    characterCard: {
      description: 'Individual character card styling',
      properties: {
        minWidth: { type: 'string' },
        width: { type: 'string' },
      },
      defaultValues: {
        minWidth: '20rem',
        width: '30%',
      },
      transform(props: any) {
        return {
          border: '1px solid {colors.border}',
          minWidth: props.minWidth,
          width: props.width,
          margin: '1%',
          padding: '1rem',
          backgroundColor: 'bg.card',
          borderRadius: 'md',
        }
      }
    }
  }
})