import React from 'react';
import Markdown from 'markdown-to-jsx';
import { Box, Container } from '@mui/material';
import { accept } from '../data/accept';

const Accept = () => (
  <Container maxWidth="lg">
    <Box sx={{ mt: 7, mb: 12 }}>
      <Markdown>{accept}</Markdown>
    </Box>
  </Container>
);

export default Accept;
