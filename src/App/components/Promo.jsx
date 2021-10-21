import { Container, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import PromoBgr from '../../assets/Promo_bgr.jpeg';
import Button from '../Ui/Button';

const Base = styled.div`
  background: url(${PromoBgr});
  text-align: center;
  color: #fff;
`;

const Wrapper = styled.div`
  background-image: -webkit-linear-gradient(top, rgb(52, 90, 128), rgba(163, 163, 163, 0.7));
  padding: 32px 0 56px;
`;

const Title = styled.h1`
  font-size: 56px;
  font-weight: 700;
  color: #fff;
`;

const Subtitle = styled(Typography).attrs({ variant: 'h2' })`
  &.css-1imety6-MuiTypography-root {
    margin: 48px 0;
  }
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
        <Button margin="72" text="Получите бесплатную консультацию" />
      </Container>
    </Wrapper>
  </Base>
);

export default Promo;
