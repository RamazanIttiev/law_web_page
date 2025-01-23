import { Container, Typography } from '@mui/material';
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
  padding: 32px 0 56px;
`;

const Title = styled(Typography).attrs({ variant: 'h1' })`
  @media screen and (max-width: 600px) {
    font-size: 24px !important;
  }
`;

const List = styled.ul`
  text-align: start;
`;

const Li = styled.li``;

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
          Жилищные вопросы
        </Title>
        <List>
          <Li>
            Полный спектр юридических услуг в решении жилищных вопросов, от проведения бесплатной
            первой консультации до полного сопровождения дела с получением окончательного судебного
            решения;
          </Li>
          <Li>Более 5 лет успешной практики решения жилищных вопросов;</Li>
          <Li>Гарантия качества и профессионализма;</Li>
          <Li>5 дней – максимальный срок подготовки всех необходимых документов;</Li>
          <Li>Персональный сотрудник и постоянное сопровождение в течение всего дела;</Li>
          <Li>Принимаем дела на любой стадии рассмотрения.</Li>
        </List>

        <Button margin="72" text="Получите бесплатную консультацию" />
      </Container>
    </Wrapper>
  </Base>
);

export default Promo;
