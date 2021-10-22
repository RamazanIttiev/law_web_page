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

const Title = styled(Typography).attrs({ variant: 'h1' })``;

const Subtitle = styled(Typography).attrs({ variant: 'h2' })``;

const Promo = () => (
  <Base>
    <Wrapper>
      <Container>
        <Title
          sx={{
            marginBottom: '56px',
            color: '#fff',
          }}
        >
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
