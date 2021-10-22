import { Container, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import {
  AccountBalance,
  MonetizationOn,
  WifiProtectedSetup,
  NightShelter,
  FamilyRestroom,
  Home,
} from '@mui/icons-material';

const Base = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  text-align: center;
  padding: ${props => props.theme.spacing(10)} 0;
`;

const Title = styled(Typography).attrs({ variant: 'h1' })`
  width: 100%;
  text-transform: uppercase;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;

  svg {
    width: 64px;
    height: 64px;
    display: block;
    fill: ${props => props.theme.palette.primary.main};
    margin-bottom: 16px;
  }
`;

const Competence = () => (
  <Container maxWidth="lg">
    <Base>
      <Title
        sx={{
          marginBottom: '32px',
        }}
      >
        Наши компетенции
      </Title>
      <Item>
        <AccountBalance />
        Взыскание долгов с МФО и брокеров
      </Item>
      <Item>
        <MonetizationOn />
        Дела о мошенничестве
      </Item>
      <Item>
        <WifiProtectedSetup />
        Возврат денежных средств с КПК
      </Item>
      <Item>
        <NightShelter />
        Защита прав потребителей
      </Item>
      <Item>
        <FamilyRestroom />
        Семейные споры
      </Item>
      <Item>
        <Home />
        Жилищные споры
      </Item>
    </Base>
  </Container>
);

export default Competence;
