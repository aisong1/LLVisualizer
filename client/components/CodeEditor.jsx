import React, { useState } from 'react';
import styled from 'styled-components';
import Editor from '@monaco-editor/react';
import helper from './helperVars/defaultString';

const CodeEditorWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CodeEditor = () => {
  const [text, setText] = useState(helper.defaultString);

  return (
    <CodeEditorWrapper>
      <Editor
        name="code"
        aria-label="code"
        label="code"
        height="100vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={text}
        onChange={setText}
      />
    </CodeEditorWrapper>
  );
};

export default CodeEditor;
