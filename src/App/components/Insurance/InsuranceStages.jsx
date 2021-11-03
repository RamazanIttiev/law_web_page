import { Container, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Step from './Step';
import { steps } from '../../data/steps';

const Base = styled.div`
  padding: ${props => props.theme.spacing(10)} 0;
`;

const Title = styled(Typography).attrs({ variant: 'h1' })`
  width: 100%;
  text-transform: uppercase;
`;

const InsuranceStages = () => (
  <Base>
    <Container maxWidth="lg">
      <Title sx={{ marginBottom: '56px' }}>Этапы решения страховых вопросов</Title>

      <Step steps={steps} />
    </Container>
  </Base>
);

export default InsuranceStages;
