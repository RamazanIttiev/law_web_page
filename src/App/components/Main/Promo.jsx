import { Container, Typography, useMediaQuery } from '@mui/material';
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
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 1), rgba(163, 163, 163, 0.7));
  padding: 81px 0 56px;
`;

const Title = styled(Typography).attrs({ variant: 'h1' })``;

const Subtitle = styled(Typography).attrs({ variant: 'h2' })``;

const Text = styled(Typography).attrs({ variant: 'h2', component: 'div' })``;

const Promo = () => {
  const desctopScreen = useMediaQuery('(min-width:600px)');

  return (
    <Base>
      <Wrapper>
        <Container>
          <Title
            sx={{
              marginBottom: '56px',
              color: '#fff',
              textAlign: 'start',
              lineHeight: 1,
              fontWeight: 700,
              fontSize: desctopScreen ? '48px' : '40px',
            }}
          >
            Юридические {desctopScreen && <br />} и консультационные услуги
          </Title>
          <Subtitle
            sx={{
              color: '#ffc700',
              textAlign: 'start',
              marginBottom: '32px',
              fontWeight: 700,
            }}
          >
            В Москве и Московской области
          </Subtitle>
          <Text
            sx={{
              color: '#fff',
              textAlign: 'start',
              fontWeight: 700,
            }}
          >
            Бесплатные юридические консультаций для физических и юридических лиц
          </Text>
          <Button margin="72" text="Получите бесплатную консультацию" />
        </Container>
      </Wrapper>
    </Base>
  );
};

export default Promo;
