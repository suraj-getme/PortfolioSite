import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ToggleButton = styled(motion.button)`
  position: fixed;
  top: 100px;
  right: 20px;
  background-color: ${({ theme }) => theme.toggleBackground};
  color: ${({ theme }) => theme.toggleIcon};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <ToggleButton
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </ToggleButton>
  );
};

export default ThemeToggle;

