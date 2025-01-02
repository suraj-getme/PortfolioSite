import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AboutMe from './AboutMe';

const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 0 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
`;

const HomePage = () => {
  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        Hello , I'm Suraj Getme a Website and Mobile App Developer
      </Title>
      <Subtitle
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Crafting Cross-Platform Experiences with React & React Native
      </Subtitle>
      <Description
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        I'm a passionate software developer specializing in creating seamless, 
        efficient, and user-friendly applications using React and React Native. 
        With a keen eye for detail and a love for clean code, I bring ideas to life 
        across multiple platforms.
      </Description>
    </HomeContainer>
   
  );
};

export default HomePage;

