import { Container, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import {
  VerifiedUser,
  AccessibilityNew,
  ManageAccounts,
  SupervisorAccount,
  DownloadDone,
  SupportAgent,
} from '@mui/icons-material';

const Base = styled(Container)`
  &.css-1oqqzyl-MuiContainer-root {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    text-align: center;
    padding: 56px 0;
  }
`;

const Title = styled(Typography).attrs({ variant: 'h1' })`
  width: 100%;
  text-transform: uppercase;
`;

const Subtitle = styled(Typography).attrs({ variant: 'h2' })`
  &.css-1imety6-MuiTypography-root {
    margin-bottom: 56px;
  }
  width: 100%;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  max-width: 350px;

  svg {
    width: 100px;
    height: 100px;
    display: block;
    fill: ${props => props.theme.palette.primary.main};
    margin-bottom: 16px;
  }
`;

const ItemTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${props => props.theme.palette.primary.main};
  margin: 24px 0;
`;

const Advantages = () => (
  <Base maxWidth="lg">
    <Title>Наши преимущества</Title>
    <Subtitle>Если мы беремся за дело, вы можете быть уверены в положительном результате!</Subtitle>
    <Item>
      <VerifiedUser />
      <ItemTitle>Годы практики</ItemTitle>
      Все наши специалисты имеют опыт юридической практики не менее 5 лет
    </Item>
    <Item>
      <AccessibilityNew />
      <ItemTitle>Персональный подход</ItemTitle>
      Индивидуальная работа с каждым клиентом позволяет решать даже самые сложные проблемы
    </Item>
    <Item>
      <ManageAccounts />
      <ItemTitle>Эффективность</ItemTitle>
      На каждое дело мы выделяем специалиста, который единовременно работает только с Вами
    </Item>
    <Item>
      <SupervisorAccount />
      <ItemTitle>Экспертиза</ItemTitle>
      Сильнейшая команда специалистов и юристов – признанных экспертов в области права. Мы
      сформировали команду опытных юристов и адвокатов, которые практикуют в разных отраслях права
    </Item>
    <Item>
      <DownloadDone />
      <ItemTitle>Результат в 90% случаев</ItemTitle>
      Если мы не сможем вернуть Ваши деньги полностью, то с вероятностью 90% вернём их частично
    </Item>
    <Item>
      <SupportAgent />
      <ItemTitle>Поддержка</ItemTitle>
      Мы полностью берем на себя всю работу, взаимодействие и весь документооборот
    </Item>
  </Base>
);

export default Advantages;
