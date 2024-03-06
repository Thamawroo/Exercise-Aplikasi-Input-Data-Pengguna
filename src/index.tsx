// Import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import App from './App'; // Assuming App is your main component

// Extend the theme with custom colors
const theme = extendTheme({
  colors: {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  },
});

// Render the application
ReactDOM.render(
  <React.StrictMode>
    {/* Pass the custom theme to ChakraProvider */}
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
