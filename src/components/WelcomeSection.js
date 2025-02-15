import React, { useEffect, useState } from "react";
import { Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Row, Col } from 'react-bootstrap';
import '.././styles/components.css';

const StyledSection = styled('section')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.secondary,
  padding: '2rem 0',

  '& .greeting': {
    color: theme.palette.text.secondary,
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },

  '& .typing-text': {
    color: theme.palette.text.secondary,
    position: 'relative',
    fontWeight: 'bold',
  },
  '& .description':{
    color: theme.palette.text.primary

  },

  '& .cursor': {
    display: 'inline-block',
    width: '3px',
    height: '1em',
    backgroundColor: theme.palette.primary.main,
    marginLeft: '4px',
    animation: 'blink 0.7s infinite',
  },

  '& .highlight': {
    color: theme.palette.primary.main,
    fontWeight: 500,
  },

  '& .email-link': {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },

  '& .profile-image': {
    borderRadius: '10px',
    boxShadow: `0 0 20px ${theme.palette.primary.main}33`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: `0 5px 25px ${theme.palette.primary.main}4D`,
    },
  },

}));

const WelcomeSection = () => {
  const words = ["Hai Nguyen", "a Full-Stack Developer"];
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;

    const type = () => {
      const currentWord = words[wordIndex];
      const shouldDelete = isDeleting;

      setDisplayText(prev => 
        shouldDelete 
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      let typeSpeed = isDeleting ? 50 : 1000; // Typing speed for delete and type

      // Check if the current word is fully displayed
      if (!isDeleting && displayText === currentWord) {
        typeSpeed = 10000; // Pause for 2 seconds before starting to delete
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        typeSpeed = 80000; // Speed for moving to the next word
      }

      timeoutId = setTimeout(type, typeSpeed);
    };

    timeoutId = setTimeout(type, 100); // Initial delay

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, wordIndex, words]);

  return (
    <StyledSection id="welcome" className="welcome-section section-wrapper">
      <Container>
        <Row className="justify-content-center align-items-center vh-50">
          <Box mt={20} mb={7}>
            <h2 className="section-title">
              About me
            </h2>
          </Box>
          <Col xs={6} sm={7} lg={7} className="text-start welcome-content">
            <div className="greeting-text">
              <h1>
                <div className="greeting">Hey there,</div>
                <div className="introduction">
                  I'm{' '}
                  <span className="typing-text">
                    {displayText}
                    <span className="cursor"></span>
                  </span>
                </div>
              </h1>
            </div>
            <div className="description">
              <p>
                Full-stack developer with experience in{' '}
                <span className="highlight">React</span>,{' '}
                <span className="highlight">Java</span>,{' '}
                <span className="highlight">Node.js</span>,{' '}
                <span className="highlight">Docker</span>,{' '}
                <span className="highlight">Redux</span>,{' '}
                <span className="highlight">MySQL</span>, and{' '}
                <span className="highlight">PostgreSQL</span>.
                I enjoy building efficient, scalable applications and always look for 
                new challenges to improve my skills.
              </p>
              <p>
                Feel free to reach out at{' '}
                <a href="mailto:nguyennp.hai@gmail.com" className="email-link">
                  nguyennp.hai@gmail.com
                </a>
              </p>
            </div>
          </Col>
          <Col xs={6} sm={5} lg={4} className="profile-image-container">
            <Box sx={{ width: '100%', height: 'auto' }}>
              <img 
                src={process.env.PUBLIC_URL + '/profile002.jpg'}  
                alt="profile-img" 
                className="img-fluid profile-image" 
                style={{ maxWidth: '70%', height: 'auto' }}
              />
            </Box>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default WelcomeSection;
