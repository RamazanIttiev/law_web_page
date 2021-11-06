import { Container, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import PromoBgr from '../../../assets/Promo_bgr.jpeg';
import Button from '../../Ui/FormButton';

const Base = styled.div`
  background: url(${PromoBgr}) no-repeat center/cover;
  text-align: center;
  color: #fff;
`;

const Wrapper = styled.div`
  background-image: -webkit-linear-gradient(top, rgb(52, 90, 128), rgba(163, 163, 163, 0.7));
  padding: 81px 0 56px;
`;

const Title = styled(Typography).attrs({ variant: 'h1' })`
  @media screen and (max-width: 600px) {
    font-size: 24px !important;
  }
`;

const Subtitle = styled(Typography).attrs({ variant: 'h2' })``;

const Text = styled(Typography).attrs({ component: 'div' })``;

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
              lineHeight: 1,
              fontWeight: 700,
              fontSize: desctopScreen ? '48px' : '32px',
            }}
          >
            Центр юридической помощи
          </Title>
          <Subtitle
            sx={{
              marginBottom: '32px',
              fontWeight: 700,
              fontSize: desctopScreen ? '24px' : '16px',
            }}
          >
            В Москве и Московской области
          </Subtitle>
          <Text
            sx={{
              color: '#fff',
              fontWeight: 700,
              fontSize: '16px',
            }}
          >
            Бесплатные юридические консультации для физических лиц
          </Text>
          <Button margin="72" text="Получите бесплатную консультацию" />
        </Container>
      </Wrapper>
    </Base>
  );
};

export default Promo;
