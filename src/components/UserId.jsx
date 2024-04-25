import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f8e8e8;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;

const Container = styled.div`
  background-color: #fff3e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  border-radius: 25px;
  height: 250px;
  padding: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ff69b4;
  border-radius: 20px;
  margin-bottom: 20px;
  text-align: center;
  &::placeholder {
    color: #ff69b4;
  }
`;

const SaveButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ff8c00;
  }
`;

const UserDataContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 2px solid #ff69b4;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const UserId = () => {
  const [name, setName] = useState('');
  const [userData, setUserData] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSave = () => {
    if (name.trim() === '') {
      // If the input field is empty, don't generate a user ID
      return;
    }

    const userId = generateUserId();
    const user = { name, userId };
    setUserData(user);
  };

  const generateUserId = () => {
    return Math.random().toString(36).substring(2, 10);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Input
          type="text"
          placeholder="Enter name 💖"
          value={name}
          onChange={handleNameChange}
        />
        {userData && (
          <UserDataContainer>
            <pre>{JSON.stringify(userData, null, 2)}</pre>
          </UserDataContainer>
        )}
        <SaveButton onClick={handleSave}>Save</SaveButton>
      </Container>
    </>
  );
};

export default UserId;