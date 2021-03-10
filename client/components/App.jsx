import React from 'react';
import Header from './Header';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #131313;
    color: #ffffff;
  }
`;

const App = () => (
  <div>
    <GlobalStyle />
    <Header />
  </div>
);

export default App;
