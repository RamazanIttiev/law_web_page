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

const Text = styled(Typography)``;

const Steps = () => (
  <Base>
    <Container maxWidth="lg">
      <Title sx={{ marginBottom: '56px' }}>
        В каких случаях обычно обращаются к юристу для решения своей проблемы?
      </Title>
      <Text sx={{ mb: 6 }}>
        Юридическая поддержка может потребоваться каждому из нас и абсолютно в любой ситуации. При
        помощи приобретенного опыта нам удалось разобраться, при каких обстоятельствах к нам чаще
        всего обращаются:
      </Text>
      <Step />
    </Container>
  </Base>
);

export default Steps;
