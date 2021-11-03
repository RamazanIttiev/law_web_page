import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Step from './InsuranceCase/Step';

const Base = styled.div`
  padding: ${props => props.theme.spacing(10)} 0;
`;

const Title = styled(Typography).attrs({ variant: 'h1' })`
  width: 100%;
  text-transform: uppercase;
`;

const InsuranceSteps = ({ insuranceSteps }) => (
  <Base>
    <Container maxWidth="lg">
      <Title sx={{ marginBottom: '56px' }}>Этапы решения страховых вопросов</Title>
      <Grid container spacing={2}>
        <Grid item>
          <Step insuranceSteps={insuranceSteps} />
        </Grid>
      </Grid>
    </Container>
  </Base>
);

export default InsuranceSteps;
