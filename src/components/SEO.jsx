import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = () => {
  return (
    <Helmet>
      <title>Suraj Getme - React & React Native Developer</title>
      <meta name="description" content="Portfolio of [Your Name], a skilled React and React Native developer specializing in cross-platform mobile and web applications." />
      <meta name="keywords" content="React, React Native, JavaScript, Web Development, Mobile Development" />
      <meta name="author" content="Your Name" />
      <meta property="og:title" content="Your Name - React & React Native Developer" />
      <meta property="og:description" content="Portfolio of [Your Name], a skilled React and React Native developer specializing in cross-platform mobile and web applications." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.yourportfolio.com" />
      <meta property="og:image" content="https://www.yourportfolio.com/og-image.jpg" />
      <link rel="canonical" href="https://www.yourportfolio.com" />
    </Helmet>
  );
};

export default SEO;

