import { Container, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
  background: ${props => props.theme.palette.background.paper};
  padding: ${props => props.theme.spacing(10)} 0;
`;

const Title = styled(Typography).attrs({ variant: 'h1' })`
  width: 100%;
  text-transform: uppercase;
`;

const Text = styled(Typography)`
  &:last-child {
    margin-top: 48px;
  }
`;

const List = styled.ul`
  text-align: start;
`;

const Li = styled.li``;

const Description = () => (
  <Base>
    <Container maxWidth="md">
      <Title sx={{ marginBottom: '56px' }}>Наши услуги</Title>
      <Text>
        В рамках договора в зависимости от ситуации, вам будет предложен наиболее оптимальный и
        менее затратный вариант взаимодействия со страховщиком/банком. Как правило существуют:
        <List>
          <Li>Досудебный порядок урегулирования спора;</Li>
          <Li>Обращение в судебные инстанции для восстановления</Li>
        </List>
        нарушенного права. В ходе досудебного порядка мы помогаем вам грамотно подготовить документы
        и представляем ваши интересы на переговорах со страховщиком/банком. При отказе
        страховщика/банка в досудебном порядке, мы незамедлительно обращаемся в суд и надзорные
        инстанции с жалобами на незаконные действия организации. Таким образом, мы ведем ваше дело
        от начала и до получения вами денег.
      </Text>
      <Text>
        Мы готовы проконсультировать и оказать помощь Вам в разрешении жилищных споров на любой
        стадии и даже представлять Ваши интересы в судах и госорганах, тем самым разрешить его.
      </Text>
    </Container>
  </Base>
);

export default Description;
