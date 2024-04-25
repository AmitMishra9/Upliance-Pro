import React, { useState, useEffect } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ffefd5;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;

const TextEditorContainer = styled.div`
  background-color: #fff3e0;
  padding: 20px;
  border-radius: 20px;
  height: 270px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TextBox = styled.div.attrs((props) => ({
  style: {
    fontWeight: props.isBold ? 'bold' : 'normal',
    textDecoration: props.isUnderline ? 'underline' : 'none',
    fontStyle: props.isItalic ? 'italic' : 'normal',
  },
}))`
  width: 100%;
  padding: 10px;
  border: 2px solid #ffa07a;
  border-radius: 10px;
  min-height: 100px;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ff8c00;
  }
`;

const TextEditor = () => {
  const [editorData, setEditorData] = useState('');
  const [isBold, setIsBold] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('UserformData');
    if (storedData) {
      setEditorData(storedData);
    }
  }, []);

  const handleBold = () => {
    setIsBold(!isBold);
  };

  const handleUnderline = () => {
    setIsUnderline(!isUnderline);
  };

  const handleItalic = () => {
    setIsItalic(!isItalic);
  };

  const handleGetData = () => {
    const storedData = localStorage.getItem('UserformData');
    if (storedData) {
      setEditorData(storedData);
    }
  };

  return (
    <>
      <GlobalStyle />
      <TextEditorContainer>
        <TextBox isBold={isBold} isUnderline={isUnderline} isItalic={isItalic}>
          {editorData.split('\n').map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </TextBox>
        <ButtonContainer>
          <Button onClick={handleBold}>🅱️ Bold</Button>
          <Button onClick={handleUnderline}>🆄 Underline</Button>
          <Button onClick={handleItalic}>🅸 Italic</Button>
          <Button onClick={handleGetData}>Get Data</Button>
        </ButtonContainer>
      </TextEditorContainer>
    </>
  );
};

export default TextEditor;
