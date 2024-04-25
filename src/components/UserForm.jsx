import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ffefd5;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 310px;
`;

const FormContainer = styled.div`
  background-color: #fff3e0;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormInput = styled.input`
  width: 80%;
  padding: 10px;
  margin-bottom: 15px;
  border: 2px solid #ffa07a;
  border-radius: 10px;
  font-size: 16px;
  &::placeholder {
    color: #ffa07a;
  }
`;

const FormButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ff8c00;
  }
`;

const UserForm = () => {
  const [UserformData, setUserFormData] = useState({
    address: '',
    email: '',
    phone: '',
  });
  const [showTextEditor, setShowTextEditor] = useState(false);

  const handleChange = (e) => {
    setUserFormData({ ...UserformData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Remove the existing data from local storage
    localStorage.removeItem('UserformData');
    // Store the new data in local storage
    localStorage.setItem('UserformData', JSON.stringify(UserformData));
    // Reset the form data after saving
    setUserFormData({ address: '', email: '', phone: '' });
    // Show the TextEditor component
    setShowTextEditor(true);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
       
          <FormContainer>
            <form onSubmit={handleSubmit}>
              <FormInput
                type="text"
                name="address"
                value={UserformData.address}
                onChange={handleChange}
                placeholder="Address 🏠"
              />
              <FormInput
                type="email"
                name="email"
                value={UserformData.email}
                onChange={handleChange}
                placeholder="Email ✉️"
              />
              <FormInput
                type="tel"
                name="phone"
                value={UserformData.phone}
                onChange={handleChange}
                placeholder="Phone ☎️"
              />
              <FormButton type="submit">Save</FormButton>
            </form>
          </FormContainer>
      </Container>
    </>
  );
};

export default UserForm;