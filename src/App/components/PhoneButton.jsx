import { PhoneIphone } from '@mui/icons-material';
import { Box } from '@mui/material';
import { keyframes } from '@mui/styled-engine';
import React from 'react';
import styled from 'styled-components';

const ring = keyframes`
  from {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg); 
  }
`;

const Number = styled.a`
  color: #fff;
  text-decoration: none;
`;

const PhoneButton = () => (
  <Box
    sx={{
      position: 'fixed',
      width: '56px',
      height: '56px',
      bottom: '24px',
      right: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#199c68',
      border: 'none',
      borderRadius: '50%',
      boxShadow: '0px 0px 8px 4px rgb(0 0 0 / 20%)',
      cursor: 'pointer',
      zIndex: 999,
      transition: 'transform 0.3s',

      '&:hover': {
        transform: ' scale(1.1)',
      },
    }}
  >
    <Number href="tel:8-910-467-4000">
      <PhoneIphone
        sx={{
          animationName: `${ring}`,
          animationDuration: '3s',
          animationIterationCount: 'infinite',
          animationDelay: '7s',
        }}
      />
    </Number>
  </Box>
);

export default PhoneButton;
