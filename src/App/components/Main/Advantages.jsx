import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { useTheme } from '@emotion/react';
import Certificate from '../../assets/certificate.svg';
import Approach from '../../assets/approach.svg';
import Efficiency from '../../assets/efficiency.svg';
import Experts from '../../assets/experts.svg';
import Cup from '../../assets/cup.svg';
import Support from '../../assets/support.svg';

const Title = styled(Typography).attrs({ variant: 'h1' })`
  width: 100%;
  text-transform: uppercase;
`;

const Subtitle = styled(Typography).attrs({ variant: 'h2' })`
  width: 100%;
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

const ItemTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${props => props.theme.palette.primary.main};
  margin: 24px 0;
`;

const Advantages = () => {
  const theme = useTheme();

  return (
    <Box sx={{ padding: `${theme.spacing(10)} 0` }}>
      <Container maxWidth="lg">
        <Title>Наши преимущества</Title>
        <Subtitle sx={{ marginBottom: 4 }}>
          Доверяя нам Ваше дело, можете быть уверены в быстром и качественном результате!
        </Subtitle>
        <Grid container spacing={6} rowSpacing={6}>
          <Grid item xs={11} sm={11} md={4}>
            <Item>
              <img src={Certificate} alt="Certificate" />
              <ItemTitle>Годы практики</ItemTitle>У всех наших специалистов большой практический
              опыт
            </Item>
          </Grid>
          <Grid item xs={11} sm={11} md={4}>
            <Item>
              <img src={Approach} alt="Certificate" />
              <ItemTitle>Персональный подход</ItemTitle>
              Персональный подход к каждому клиенту дает возможность решать даже самые сложные
              проблемы
            </Item>
          </Grid>
          <Grid item xs={11} sm={11} md={4}>
            <Item>
              <img src={Efficiency} alt="Certificate" />
              <ItemTitle>Эффективность</ItemTitle>
              Наш специалист выделяет все его время на решение только Вашей проблемы
            </Item>
          </Grid>
          <Grid item xs={11} sm={11} md={4}>
            <Item>
              <img src={Experts} alt="Certificate" />
              <ItemTitle>Экспертиза</ItemTitle>
              Одна из самых сильных команд специалистов и юристов. У нас сформировалась команда
              юристов и адвокатов, которые имеют большой опыт и практикуют в разных отраслях права
            </Item>
          </Grid>
          <Grid item xs={11} sm={11} md={4}>
            <Item>
              <img src={Cup} alt="Certificate" />
              <ItemTitle>Результат в 90% случаев</ItemTitle>
              Мы сделаем все возможное для того, чтобы вернуть Ваши деньги полностью, а если нет, то
              с большой вероятностью вернем их частично
            </Item>
          </Grid>
          <Grid item xs={11} sm={11} md={4}>
            <Item>
              <img src={Support} alt="Certificate" />
              <ItemTitle>Поддержка</ItemTitle>
              Вам не придется возиться с документами, всю работу берем на себя
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Advantages;
