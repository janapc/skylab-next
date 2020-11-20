import React from 'react';

import { ChakraProvider } from "@chakra-ui/react";

import theme from '../../styles/theme';

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  )
}

export default ThemeContainer;