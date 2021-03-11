import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #1f1f1f;
  background-size: 100%;
  margin-right: 20%;
  cursor: pointer;
  border: 1px solid #1f1f1f;
`;

const Github = styled.img`
  width: 50%;
  height: auto;
`;

const Heading = styled.h1`
  font-size: 20pt;
  padding-left: 20%;
`;

const Wrapper = styled.div`
  background-color: #1f1f1f;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
`;

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) {
    newWindow.opener = null;
  }
};

const Header = () => (
  <Wrapper className="Header">
    <Heading>LL Visualizer</Heading>
    <Button
      aria-label="GitHub"
      onClick={() => {
        openInNewTab('https://www.github.com/aisong1/LLVisualizer');
      }}
    >
      <Github src="../img/GitHub-Mark-Light-64px.png" />
    </Button>
  </Wrapper>
);

export default Header;
