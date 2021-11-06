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
  text-align: justify;
`;

const List = styled.ul`
  text-align: start;
`;

const Li = styled.li``;

const Description = () => (
  <Base>
    <Container maxWidth="md">
      <Title sx={{ marginBottom: '56px' }}>Наши услуги</Title>
      <Text sx={{ textIndent: '32px' }}>
        В рамках анализа Вашей конкретной ситуации, Вам будет предложен наиболее оптимальный вариант
        ее решения. Как правило существуют два порядка:
        <List>
          <Li>Досудебный порядок урегулирования спора;</Li>
          <Li>Направление искового заявления в суд. </Li>
        </List>
      </Text>
      <Text sx={{ textIndent: '32px' }}>
        В рамках досудебного порядка мы готовим необходимые заявления и комплект документов,
        представляем Ваши интересы в рамках переговоров со страховыми компаниями и банками. В случае
        отказа страховой компании или банка в решении вопроса в досудебном порядке, наши специалисты
        незамедлительно готовят и направляют обращения в суд и надзорные органы с жалобами на
        неправомерные действия. Таким образом, наша компания занимается ведением дела с момента
        Вашего первого обращения до момента возврата денег.
      </Text>
    </Container>
  </Base>
);

export default Description;
