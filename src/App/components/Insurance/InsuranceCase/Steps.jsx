import { Container, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Step from './Step';

const Base = styled.div`
  padding: ${props => props.theme.spacing(10)} 0;
`;

const Title = styled(Typography).attrs({ variant: 'h1' })`
  width: 100%;
  text-transform: uppercase;
`;

const Steps = ({ insuranceSteps }) => (
  <Base>
    <Container maxWidth="lg">
      <Title sx={{ marginBottom: '56px' }}>
        В каких случаях обычно обращаются к юристу для решения своей проблемы?
      </Title>
      <Step insuranceSteps={insuranceSteps} />
    </Container>
  </Base>
);

export default Steps;
