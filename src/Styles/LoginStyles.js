// LoginStyles.js
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: #3380c8;
`;

export const Button = styled.button`
  background-color: #688daf;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;


export const CustomBackground = styled.div`
  background-color: #2c89e1; /* Set the desired background color */
  color: #f4f0f0; /* Set the desired text color */
  font-family: 'YourFontName', sans-serif; /* Replace with your desired font family */
  font-size: 3rem; /* Adjust font size as needed */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;