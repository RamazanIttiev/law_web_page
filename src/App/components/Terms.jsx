import React, { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import { Box, Container } from '@mui/material';

const Terms = ({ data }) => {
  const [post, setPost] = useState('');

  useEffect(() => {
    fetch(data)
      .then(res => res.text())
      .then(res => setPost(res));
  });

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 7, mb: 12 }}>
        <Markdown>{post}</Markdown>
      </Box>
    </Container>
  );
};

export default Terms;
