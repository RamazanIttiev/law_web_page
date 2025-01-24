import React from 'react';
import { Container, Grid } from '@mui/material';
import styled from 'styled-components';
import StatisticsBgr from '../../assets/statisticsBgr.jpeg';

const Base = styled.div`
  background: url(${StatisticsBgr}) no-repeat center/cover;
`;

const Background = styled.div`
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 1), rgba(163, 163, 163, 0.7));
  padding: ${props => props.theme.spacing(10)} 0;
`;

const Item = styled(Grid)`
  color: ${props => props.theme.palette.secondary.main};
  text-align: center;
  font-size: 56px;
  font-weight: 600;
  @media screen and (max-width: 600px) {
    font-size: 42px;
  }

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 14px;
  }
`;

const Statistics = () => (
  <Base>
    <Background>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Item item xs={12} sm={12} md={4}>
            5<span>лет успешной юридической практики</span>
          </Item>
          <Item item xs={12} sm={12} md={4}>
            500<span>и более консультаций за последний месяц</span>
          </Item>
          <Item item xs={12} sm={12} md={4}>
            &gt; 10 000
            <span>довольных клиентов, благодаря нашим специалистам</span>
          </Item>
        </Grid>
      </Container>
    </Background>
  </Base>
);

export default Statistics;
