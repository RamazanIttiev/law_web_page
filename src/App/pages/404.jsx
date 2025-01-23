import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Error = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '294px',
        transform: 'translate(0, 50%)',
      }}
    >
      <Typography>Похоже такой страницы нет</Typography>
      <Button onClick={handleClick}>На главную</Button>
    </Box>
  );
};

export default Error;
