import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import stepBgr from '../../../assets/fraud_steps.jpeg';

const Title = styled(Typography).attrs({ variant: 'h1' })``;

const Text = styled(Typography)``;

const Step = styled(Typography)`
  position: relative;
  margin: 32px 0;
  padding: 0 56px;

  &:before {
    content: '';
    position: absolute;
    top: 8px;
    left: 24px;
    width: 10px;
    height: 10px;
    background: #199c68;
    box-shadow: 0px 1px 12px 4px #199c68;
    border: none;
    border-radius: 50%;
    margin-right: 16px;
  }
`;

const Services = () => {
  const mobileScreen = useMediaQuery('(max-width:768px)');

  return (
    <Box sx={{ background: `url(${stepBgr})` }}>
      <Box sx={{ background: 'rgba(0, 0, 0, 0.6)', color: '#fff' }}>
        <Container maxWidth="lg" sx={mobileScreen && { p: '0' }}>
          <Grid container sx={{ alignItems: 'center' }} spacing={!mobileScreen && 2}>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              sx={{ textAlign: 'start', p: mobileScreen && '56px 16px' }}
            >
              <Title sx={{ marginBottom: '56px', textAlign: 'start', color: '#fff' }}>
                Изучим Ваш случай и предложим персональную стратегию возврата денежных средств
              </Title>
              <Text>
                Опираемся на высокие профессионализм и большой практический опыт наших сотрудников и
                несем ответственность за результат.
                <br />
                Полный спектр услуг от первичной бесплатной консультации до полного ведения дела
                «под ключ»
              </Text>
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{ background: 'rgba(0, 0, 0, 0.7)' }}>
              <Box>
                <Step>Полное юридическое сопровождение</Step>
                <Step>Бесплатная первая консультация с оценкой ситуации</Step>
                <Step>Выстраивание наиболее эффективной стратегии</Step>
                <Step>
                  Подготовка необходимо комплекта документов, доказательной базы и направление
                  заявлений в правоохранительные органы, суды, банки
                </Step>
                <Step>Оспаривание отказов</Step>
                <Step>Представление интересов</Step>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;
