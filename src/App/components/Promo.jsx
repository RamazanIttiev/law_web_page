import { Container, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import PromoBgr from '../../assets/Promo_bgr.jpeg';

const Base = styled.div`
  background: url(${PromoBgr});
  text-align: center;
`;
const Wrapper = styled.div`
    background-image: -webkit-linear-gradient(top, rgb(52, 90, 128), rgba(163, 163, 163, 0.7));
    padding: 32px 0;
}`;

const Title = styled(Typography).attrs({ variant: 'h1' })``;

const Subtitle = styled(Typography).attrs({ variant: 'h2' })`
  &.css-1imety6-MuiTypography-root {
    margin: 48px 0;
  }
`;

const StyledButton = styled.button`
  background: ${props => props.theme.palette.secondary.main};
  border-radius: 50px;
  color: #fff;
  padding: 24px;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 50px;
`;

const Promo = () => (
  <Base>
    <Wrapper>
      <Container>
        <Title>
          Вы вложили ваши деньги в КПК Капитал Плюс? Вас обманули и вы хотите вернуть свои средства?
          Мы поможем вам!
        </Title>
        <Subtitle>
          Позвоните на нашу горячую линию и получите бесплатную консультацию от наших юристов.
        </Subtitle>
        <StyledButton>Получите бесплатную консультацию</StyledButton>
      </Container>
    </Wrapper>
  </Base>
);

export default Promo;
