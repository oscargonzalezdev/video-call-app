import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import App from './App';
import { ContextProvider } from './Context';
import { ChakraProvider } from '@chakra-ui/react'
import Layout from './components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ContextProvider>
        <Layout>
          <App />
        </Layout>
      </ContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);