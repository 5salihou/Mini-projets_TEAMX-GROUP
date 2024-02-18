import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Wrapper from './contexte/Wrapper';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Wrapper>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Wrapper>
);
