import React from 'react';
import { Container } from '@mui/material';
import styled from 'styled-components';
import StatisticsBgr from '../../assets/statisticsBgr.jpeg';

const Base = styled.div`
  background: url(${StatisticsBgr}) no-repeat center/cover;
`;

const Background = styled.div`
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 1), rgba(163, 163, 163, 0.7));
  padding: 56px 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
`;

const Item = styled.div`
  color: ${props => props.theme.palette.secondary.main};
  text-align: center;
  font-size: 68px;
  font-weight: 600;
  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 320px;
    color: #fff;
    font-size: 16px;
  }
`;

const Statistics = () => (
  <Base>
    <Background>
      <Container maxWidth="lg">
        <Wrapper>
          <Item>
            5<span>лет успешной юридической практики</span>
          </Item>
          <Item>
            500<span>среднее количество консультаций в месяц</span>
          </Item>
          <Item>
            &gt; 10 000
            <span>успешных дел, проведенных специалистами нашей фирмы</span>
          </Item>
        </Wrapper>
      </Container>
    </Background>
  </Base>
);

export default Statistics;
