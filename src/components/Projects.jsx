import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.primary};
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
`;

const projects = [
  {
    title: 'Cross-Platform Mobile App',
    description: 'A React Native app for both iOS and Android, featuring real-time data synchronization and offline capabilities.',
    image: '/placeholder.svg?height=200&width=300',
    github: 'https://github.com/suraj-getme/NikeFitHub',
    demo: 'https://demo-link-1.com',
  },
  {
    title: 'E-commerce Web Application',
    description: 'A full-stack React application with a Node.js backend, showcasing product management and secure payment integration.',
    image: '/placeholder.svg?height=200&width=300',
    github: 'https://github.com/suraj-getme/GetLevelWater',
    demo: 'https://demo-link-2.com',
  },
  {
    title: 'Social Media Dashboard',
    description: 'A responsive web application built with React and Redux, displaying real-time analytics and user engagement metrics.',
    image: '/placeholder.svg?height=200&width=300',
    github: 'https://github.com/suraj-getme/NikeFitHub',
    demo: 'https://demo-link-3.com',
  },
];

const Projects = () => {
  return (
    <ProjectsContainer
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
        Projects
      </Title>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLinks>
                <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">GitHub</ProjectLink>
                <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</ProjectLink>
              </ProjectLinks>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;

