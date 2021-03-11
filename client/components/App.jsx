import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';

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
