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

const List = styled.ul`
  text-align: start;
`;

const Li = styled.li``;

const Description = () => (
  <Base>
    <Container maxWidth="md">
      <Title sx={{ marginBottom: '56px' }}>Консультация жилищного юриста</Title>
      <Typography sx={{ textIndent: '32px' }}>
        Вопросы, связанные с жильем, представляют собой один из самых больших блоков в
        юриспруденции. Права граждан в данной сфере постоянно нарушаются и на то есть масса причин.
        Однако наиболее частыми причинами возникновения юридических споров являются раздел имущества
        и определения порядка пользования имуществом в результате раздела.
        <br />
        <br />
        <strong>В каких случаях обращаются за помощью к профессиональным юристам?</strong>
        <List>
          <Li>На жилую собственность клиента появились другие претенденты;</Li>
          <Li>Арендатор нарушил условия договора аренды жилья, заключенного с клиентом;</Li>
          <Li>
            У клиента появились иные непредвиденные трудности в рамках совершения сделки
            купли-продажи недвижимого имущества.
          </Li>
        </List>
      </Typography>
      <Typography>
        Подобная проблематика, связанная с жилищными вопросами, является профессиональной
        компетенцией нашей команды высококлассных юристов, которые имеют богатый практический опыт
        решения данных вопросов. Наши специалисты помогают клиентам решить юридические проблемы,
        возникающие при владении, пользовании и распоряжении жилим имуществом.
      </Typography>
    </Container>
  </Base>
);

export default Description;
