import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceContainer = styled(motion.div)`
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

const Timeline = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 800px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.primary};
    transform: translateX(-50%);
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  position: relative;
  margin: 10px 0;
  width: 50%;

  &:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
  }
`;

const TimelineContent = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const TimelineDot = styled(motion.div)`
  position: absolute;
  top: 0;
  right: -8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};

  ${TimelineItem}:nth-child(odd) & {
    left: -8px;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const Company = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.primary};
`;

const Date = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
`;

const experiences = [
  {
    jobTitle: 'Senior React Developer',
    company: 'Tech Innovators Inc.',
    date: 'Jan 2021 - Present',
    description: 'Led a team of developers in creating large-scale React applications. Implemented best practices and improved overall code quality and performance.',
  },
  {
    jobTitle: 'React Native Developer',
    company: 'Mobile Solutions Ltd.',
    date: 'Mar 2019 - Dec 2020',
    description: 'Developed and maintained cross-platform mobile applications using React Native. Collaborated with design and backend teams to deliver high-quality products.',
  },
  {
    jobTitle: 'Frontend Developer',
    company: 'Web Creations Co.',
    date: 'Jun 2017 - Feb 2019',
    description: 'Built responsive and interactive web applications using React and other modern frontend technologies. Worked closely with UX designers to implement pixel-perfect designs.',
  },
];

const Experience = () => {
  return (
    <ExperienceContainer
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
        Experience
      </Title>
      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <TimelineContent>
              <JobTitle>{exp.jobTitle}</JobTitle>
              <Company>{exp.company}</Company>
              <Date>{exp.date}</Date>
              <Description>{exp.description}</Description>
            </TimelineContent>
            <TimelineDot
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.3 }}
            />
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceContainer>
  );
};

export default Experience;

