import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsContainer = styled(motion.div)`
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

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const SkillCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const SkillBar = styled(motion.div)`
  height: 10px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 5px;
`;

const skills = [
  { name: 'React', level: 90 },
  { name: 'React Native', level: 90 },
  { name: 'JavaScript', level: 95 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'Node.js', level: 75 },
  { name: 'SQL', level: 70 },
  { name: 'GitHub', level: 85 },
  {name:'Java', level: 80},
];

const Skills = () => {
  return (
    <SkillsContainer
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
        Skills
      </Title>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <SkillName>{skill.name}</SkillName>
            <SkillBar
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ delay: index * 0.1, duration: 0.8, type: 'spring', stiffness: 50 }}
            />
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;

