import React from 'react';
import Markdown from 'markdown-to-jsx';
import { Box, Container } from '@mui/material';
import { terms } from '../data/terms';

const Terms = () => (
  <Container maxWidth="lg">
    <Box sx={{ mt: 7, mb: 12 }}>
      <Markdown>{terms}</Markdown>
    </Box>
  </Container>
);

export default Terms;
