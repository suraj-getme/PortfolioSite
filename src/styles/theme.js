import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  background: '#ffffff',
  text: '#333333',
  textSecondary: '#666666',
  primary: '#3498db',
  primaryHover: '#2980b9',
  cardBackground: '#f8f8f8',
  border: '#e0e0e0',
  inputBackground: '#ffffff',
  toggleBackground: '#f0f0f0',
  toggleIcon: '#333333',
  buttonText: '#ffffff',
  disabled: '#cccccc',
  success: '#2ecc71',
  error: '#e74c3c',
};

export const darkTheme = {
  background: '#1a1a1a',
  text: '#f0f0f0',
  textSecondary: '#b0b0b0',
  primary: '#3498db',
  primaryHover: '#2980b9',
  cardBackground: '#2c2c2c',
  border: '#444444',
  inputBackground: '#333333',
  toggleBackground: '#333333',
  toggleIcon: '#f0f0f0',
  buttonText: '#ffffff',
  disabled: '#555555',
  success: '#2ecc71',
  error: '#e74c3c',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }
`;

