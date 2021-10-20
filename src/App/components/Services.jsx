import React from 'react';
import styled from 'styled-components';
import { CheckCircle, Cancel } from '@mui/icons-material';
import { Container } from '@mui/material';

const Base = styled.div`
  padding: 72px 0;
`;

const Table = styled.table`
  text-decoration: none;
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  box-shadow: 0px 0px 25px 0px rgb(0 0 0 / 10%);
  border-radius: 16px;
`;

const Thead = styled.thead`
  font-weight: normal;
  font-size: 14px;
  color: #ffffff;
  background-color: ${props => props.theme.palette.primary.main};
  font-size: 16px;
  font-weight: 700;
`;

const Tbody = styled.tbody``;

const Row = styled.tr``;

const Data = styled.td`
  padding: 16px;
`;

const Check = styled(CheckCircle)`
  &.css-1jxdcj3-MuiSvgIcon-root {
    fill: #199c68;
  }
`;

const Cross = styled(Cancel)`
  &.css-1jxdcj3-MuiSvgIcon-root {
    fill: ${props => props.theme.palette.secondary.main};
  }
`;

const Services = () => (
  <Base>
    <Container maxWidth="md">
      <Table>
        <Thead>
          <Row>
            <Data>Услуги</Data>
            <Data>Бесплатно</Data>
            <Data>Клиентское обслуживание</Data>
          </Row>
        </Thead>
        <Tbody>
          <Row>
            <Data>Получение справочной информации</Data>
            <Data>
              <Check />
            </Data>
            <Data>
              <Check />
            </Data>
          </Row>
          <Row>
            <Data>Уточнение типа суда или учреждения, в которые нужно обратиться</Data>
            <Data>
              <Check />
            </Data>
            <Data>
              <Check />
            </Data>
          </Row>
          <Row>
            <Data>Консультирование по типовым ситуациям</Data>
            <Data>
              <Check />
            </Data>
            <Data>
              <Check />
            </Data>
          </Row>
          <Row>
            <Data>Пояснение механизмов взаимодействия с органами и ведомствами</Data>
            <Data>
              <Check />
            </Data>
            <Data>
              <Check />
            </Data>
          </Row>
          <Row>
            <Data>Прочие консультационные услуги</Data>
            <Data>
              <Check />
            </Data>
            <Data>
              <Check />
            </Data>
          </Row>
          <Row>
            <Data>Тщательное изучение обстоятельств дела и правовой анализ ситуации</Data>
            <Data>
              <Cross />
            </Data>
            <Data>
              <Check />
            </Data>
          </Row>
          <Row>
            <Data>
              Индивидуальная работа с документами: сбор, подготовка, составление жалоб, апелляций,
              исков и пр.
            </Data>
            <Data>
              <Cross />
            </Data>
            <Data>
              <Check />
            </Data>
          </Row>
          <Row>
            <Data>Представительство в судах различных юрисдикций</Data>
            <Data>
              <Cross />
            </Data>
            <Data>
              <Check />
            </Data>
          </Row>
          <Row>
            <Data>
              Сопровождение сделок, в том числе проверка чистоты и правоустанавливающей документации
            </Data>
            <Data>
              <Cross />
            </Data>
            <Data>
              <Check />
            </Data>
          </Row>
          <Row>
            <Data>Регистрация прав</Data>
            <Data>
              <Cross />
            </Data>
            <Data>
              <Check />
            </Data>
          </Row>
        </Tbody>
      </Table>
    </Container>
  </Base>
);

export default Services;
