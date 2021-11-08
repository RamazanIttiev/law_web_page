import { Container, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Fraud from '../../../assets/fake-news.svg';
import Insurance from '../../../assets/insurance.svg';
import Disputes from '../../../assets/house.svg';

const Title = styled(Typography).attrs({ variant: 'h1' })`
  width: 100%;
  text-transform: uppercase;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 64px;
    height: 64px;
    display: block;
    fill: ${props => props.theme.palette.primary.main};
    margin-bottom: 16px;
  }
`;

const Competence = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ padding: `${theme.spacing(10)} 0` }}>
      <Title
        sx={{
          marginBottom: '32px',
        }}
      >
        Наши компетенции
      </Title>
      <Grid container spacing={6} rowSpacing={6}>
        <Grid item xs={11} sm={4} md={4}>
          <Item>
            <img src={Fraud} alt="" />
            Дела о мошенничестве и возврат денежных средств
          </Item>
        </Grid>
        <Grid item xs={11} sm={4} md={4}>
          <Item>
            <img src={Insurance} alt="" />
            Вопросы страхования
          </Item>
        </Grid>
        <Grid item xs={11} sm={4} md={4}>
          <Item>
            <img src={Disputes} alt="" />
            Жилищные вопросы
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Competence;
