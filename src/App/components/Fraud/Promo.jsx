import { Container, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import PromoBgr from '../../../assets/Promo_bgr.jpeg';
import Button from '../../Ui/FormButton';

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
          Стали жертвой мошенничества? Мы поможем вернуть Ваши деньги
        </Title>
        <Subtitle>
          Квалифицированная помощь по возврату денег у мошенников в Москве и Московской области
        </Subtitle>
        <Button margin="72" text="Получите бесплатную консультацию" />
      </Container>
    </Wrapper>
  </Base>
);

export default Promo;
