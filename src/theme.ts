import { mode } from '@chakra-ui/theme-tools';
import { extendTheme, StyleFunctionProps } from '@chakra-ui/react';

// Base Values
const colors = {
  blue: {
    700: 'hsl(209, 23%, 22%)',
    800: 'hsl(207, 26%, 17%)',
    900: 'hsl(200, 15%, 8%)'
  },
  gray: {
    50: 'hsla(0, 0%, 52%, 0.6)',
    100: 'hsl(0, 0%, 98%)',
    500: 'hsl(0, 0%, 52%)'
  },

  loader: 'hsla(0, 0%, 0%, 0.6)'
};

// Custom Components
const Container = {
  baseStyle: {
    maxW: [null, null, '8xl', '100rem', '110rem'],
    pl: ['4', null, '20'],
    pr: ['4', null, '16']
  }
};

// Configurations
const config = { initialColorMode: 'light', useSystemColorMode: true };

export default extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      '*': {
        WebkitTapHighlightColor: 'transparent',
        scrollBehavior: 'smooth'
      },
      body: {
        backgroundColor: mode('gray.100', 'blue.800')(props),
        scrollbarGutter: 'stable',
        minH: '100vh'
      },
      '#root': {
        minH: '100vh',
        w: 'full',
        display: 'flex',
        flexDirection: 'column'
      }
    })
  },
  colors,
  fonts: {
    body: '"Nunito Sans", sans-serif',
    heading: '"Nunito Sans", sans-serif'
  },
  components: { Container },
  config
});
