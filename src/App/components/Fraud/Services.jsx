import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import stepBgr from '../../assets/fraud_steps.jpeg';

const Title = styled(Typography).attrs({ variant: 'h1' })``;

const List = styled.ul`
  text-align: start;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;
  margin: 0;
  padding: 24px 0px;
`;

const Li = styled.li`
  position: relative;
  margin: 8px 0;
  padding-left: 56px;
  list-style: none;

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
    <Box sx={{ background: `url(${stepBgr}) no-repeat center/cover` }}>
      <Box sx={{ background: 'rgba(0, 0, 0, 0.6)', color: '#fff' }}>
        <Container maxWidth="lg" sx={mobileScreen && { p: '0' }}>
          <Grid container sx={{ alignItems: 'stretch' }} spacing={!mobileScreen && 2}>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              sx={{ textAlign: 'start', p: mobileScreen && '16px', m: '32px 0' }}
            >
              <Title sx={{ marginBottom: '32px', textAlign: 'start', color: '#fff' }}>
                Изучим Ваш случай и предложим персональную стратегию возврата денежных средств
              </Title>
              <Typography>
                Опираемся на высокий профессионализм и большой практический опыт наших сотрудников и
                несем ответственность за результат.
                <br />
                Полный спектр услуг от первичной бесплатной консультации до полного ведения дела
                «под ключ»
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{ background: 'rgba(0, 0, 0, 0.7)' }}>
              <List>
                <Li>Полное юридическое сопровождение</Li>
                <Li>Бесплатная первая консультация с оценкой ситуации</Li>
                <Li>Выстраивание наиболее эффективной стратегии</Li>
                <Li>
                  Подготовка необходимого комплекта документов, доказательной базы и направление
                  заявлений в правоохранительные органы, суды, банки
                </Li>
                <Li>Оспаривание отказов</Li>
                <Li>Представление интересов</Li>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;
