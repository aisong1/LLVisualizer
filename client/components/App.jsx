import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import CodeEditor from './CodeEditor';
import Visualizer from './Visualizer';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    width: 100%;
    background-color: #131313;
    color: #ffffff;
    overflow: hidden;
  }
`;

const ContentBody = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-around;
`;

const ContentItem = styled.div`
  width: 50%;
`;

const App = () => (
  <div>
    <GlobalStyle />
    <Header />
    <ContentBody>
      <ContentItem>
        <CodeEditor />
      </ContentItem>
      <ContentItem>
        <Visualizer />
      </ContentItem>
    </ContentBody>
  </div>
);

export default App;
