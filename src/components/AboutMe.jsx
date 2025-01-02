import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Contact from './Contact';

const AboutContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.primary};
`;

const Content = styled(motion.div)`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 50%;
`;

const TextContainer = styled(motion.div)`
  flex: 2;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const AboutMe = () => {
  return (
    <AboutContainer
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
        About Me
      </Title>
      <Content>
        <ImageContainer
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ProfileImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AR5iFpr7tkS-WPgmKJ-sh9T110WhV5k4Kg&s" alt="Your Name" />
        </ImageContainer>
        <TextContainer
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Paragraph>
            Hello! I'm Suraj, a passionate software developer with a strong focus on React and React Native. 
            My journey in the world of programming began [2] years ago, and since then, I've been on an exciting 
            adventure of continuous learning and growth.
          </Paragraph>
          <Paragraph>
            I specialize in creating cross-platform applications that provide seamless user experiences across 
            various devices. My expertise lies in leveraging the power of React and React Native to build 
            efficient, scalable, and maintainable applications.
          </Paragraph>
          <Paragraph>
            Throughout my career, I've had the opportunity to work on diverse projects, from small startups 
            to large enterprises. This experience has honed my skills in problem-solving, collaboration, and 
            delivering high-quality software solutions.
          </Paragraph>
          <Paragraph>
            When I'm not coding, you can find me [your hobbies or interests]. I believe in the power of 
            technology to make a positive impact, and I'm always excited to take on new challenges and 
            push the boundaries of what's possible in software development.
          </Paragraph>
        </TextContainer>
      </Content>
    </AboutContainer>
  );
};

export default AboutMe;

