import { Container, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { CheckCircle } from '@mui/icons-material';
import ConsultationImg from '../../../assets/consultation.jpeg';
import Button from '../../Ui/FormButton';

const Base = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  padding: ${props => props.theme.spacing(10)} 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
`;

const Title = styled(Typography).attrs({ variant: 'h1' })`
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
    width: 32px;
    height: 32px;
    display: block;
    fill: ${props => props.theme.palette.primary.main};
  }
`;

const Image = styled.img`
  width: 50%;
  border-radius: 8px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Consultation = () => (
  <Container maxWidth="lg">
    <Base>
      <Title
        sx={{
          marginBottom: '56px',
        }}
      >
        на консультации вы получите
      </Title>
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
        <Button text="Проконсультироваться" />
      </Wrapper>
      <Image src={ConsultationImg} />
    </Base>
  </Container>
);

export default Consultation;
