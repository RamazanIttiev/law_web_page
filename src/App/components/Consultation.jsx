import { Container, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { CheckCircle } from '@mui/icons-material';
import ConsultationImg from '../../assets/Consultation.png';

const Base = styled(Container)`
  &.css-1oqqzyl-MuiContainer-root {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
    padding: 56px 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
`;

const Title = styled(Typography).attrs({ variant: 'h1' })`
  &.css-qtipo4-MuiTypography-root {
    margin-bottom: 56px;
  }
  width: 100%;
  text-transform: uppercase;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  padding-left: 0;

  svg {
    margin-right: 8px;
    width: 40px;
    height: 40px;
    display: block;
    fill: ${props => props.theme.palette.primary.main};
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
  margin-top: 24px;
`;

const Image = styled.img`
  width: 650px;
  border-radius: 8px;
`;

const Consultation = () => (
  <Base maxWidth="lg">
    <Title>на консультации вы получите</Title>
    <Wrapper>
      <Item>
        <CheckCircle />
        Ответы на свои вопросы
      </Item>
      <Item>
        <CheckCircle />
        План решения проблемы
      </Item>
      <Item>
        <CheckCircle />
        Список необходимых документов
      </Item>
      <Item>
        <CheckCircle />
        Прогноз результатов и сроков{' '}
      </Item>
      <StyledButton>Проконсультироваться</StyledButton>
    </Wrapper>
    <Image src={ConsultationImg} />
  </Base>
);

export default Consultation;
