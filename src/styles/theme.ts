import { extendTheme, theme as ChackraTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    purple: {
      500: '#8615DF',
      600: '#570E91',
      800: '#38085C',
      900: '#190429'
    },
    gray: {
      50: '#f6f6f7',
      100: '#eee',
      200: '#d4d4d4',
      300: '#9e9ea7',
      400: '#666665',
      900: '#111',
    },
    red: {
      600: '#DF1545',
    },
    green: {
      600: '#168821',
    },
  },
  fonts: {
    body: 'Inter',
    heading: 'Inter',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  styles: {
    global: {
      body: {
        bg: '#fff',
        color: 'gray.900',
      }
    }
  }

})