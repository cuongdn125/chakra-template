import { ChakraProvider, extendTheme, Flex, theme } from '@chakra-ui/react';
import React from 'react';
import NavBar from './components/NavBar';
import ProdectDetail from './components/ProductDetail';
import Sidebar from './components/Sidebar';

const sizes = {
  sizes: {
    ...theme.space,
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '8xl': '90rem',
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
};

function App() {
  const theme = extendTheme({ sizes });
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <ProdectDetail />

      {/* <Sidebar /> */}
    </ChakraProvider>
  );
}

export default App;
