import { Container, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
  background: ${props => props.theme.palette.background.paper};
  padding: ${props => props.theme.spacing(10)} 0;
`;

const Text = styled(Typography)`
  margin-bottom: 48px;
  &:last-child {
    margin: 0;
  }
`;

const Description = () => (
  <Base>
    <Container maxWidth="md">
      <Text sx={{ textIndent: '32px' }}>
        С делами о мошенничестве мы имеем дело на ежедневной основе. Накопленный опыт и отлаженные
        методы работы позволяет нам добиваться успеха в возврате денежных средств в 90% случаев и
        максимально сокращать сроки рассмотрения вопросов. Именно поэтому мы предлагаем своим
        клиентам высококачественные услуги по подготовке всех необходимых документов, представлению
        интересов и возврату денежных средств.
      </Text>
      <Text sx={{ textAlign: 'center', fontSize: '24px', color: '#345a80', m: '32px 0' }}>
        <strong>Наша главная цель – возврат денег клиента! </strong>
      </Text>
      <Text sx={{ textIndent: '32px' }}>
        На сегодняшний день, судебная практика по рассмотрению дел о мошенничестве и взыскании
        задолженности в большинстве случаев является положительной. При этом результативность
        взыскания задолженности зависит от того, на сколько своевременно и грамотно подготовлены
        документы, а также от выбранной юристами стратегии выстраивания дела и способа воздействия
        на мошенников.
      </Text>
    </Container>
  </Base>
);

export default Description;
