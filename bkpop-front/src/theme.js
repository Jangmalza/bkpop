import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f5f5f5',
      100: '#e8e8e8',
      200: '#d1d1d1',
      300: '#b3b3b3',
      400: '#8a8a8a',
      500: '#636363',
      600: '#4f4f4f',
      700: '#3b3b3b',
      800: '#262626',
      900: '#171717',
    },
  },
  fonts: {
    heading: 'Pretendard, sans-serif',
    body: 'Pretendard, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.800',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'md',
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
      },
    },
  },
});

export default theme; 