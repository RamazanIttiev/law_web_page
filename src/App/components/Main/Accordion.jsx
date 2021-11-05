import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';
import { Container, useMediaQuery } from '@mui/material';
import Button from '../../Ui/FormButton';

const Base = styled.div`
  padding: ${props => props.theme.spacing(10)} 0;
  background: ${props => props.theme.palette.background.paper};
`;

const Details = styled(AccordionDetails)``;

const Title = styled(Typography).attrs({ variant: 'h1' })`
  text-transform: uppercase;
`;

const List = styled.ul`
  padding: 0;
  margin-top: 16px;
`;

const ListItem = styled.li`
  margin: 0 24px;
`;

const DetailsText = styled(Typography)``;

const AccordionTitle = styled(Typography)``;

const Subtitle = styled(Typography).attrs({ variant: 'h1', paragraph: true })``;

const Text = styled(Typography)``;

const AccordionServices = () => {
  const mobileScreen = useMediaQuery('(max-width:768px)');

  return (
    <Base>
      <Container maxWidth="lg">
        <Title
          sx={{
            marginBottom: '32px',
          }}
        >
          мы оказываем все виды юридических услуг
        </Title>
        <Accordion sx={{ width: `${mobileScreen && '100%'}`, marginBottom: 4, padding: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <AccordionTitle sx={{ fontSize: 20, fontWeight: 700, color: '#345a80' }}>
              Консультирование
            </AccordionTitle>
          </AccordionSummary>
          <Details>
            <DetailsText>
              Вы сможете получить подробную информацию о Вашей проблеме. Наши юристы
              проконсультируют Вас и подготовят дальнейший план действий
            </DetailsText>
          </Details>
        </Accordion>
        <Accordion sx={{ width: `${mobileScreen && '100%'}`, marginBottom: 4, padding: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <AccordionTitle sx={{ fontSize: 20, fontWeight: 700, color: '#345a80' }}>
              Представительство
            </AccordionTitle>
          </AccordionSummary>
          <Details>
            <DetailsText>
              На любом этапе процесса. <br /> В правоохранительных органах:
            </DetailsText>
            <List>
              <ListItem>МВД (в т.ч. ГУЭБиПК)</ListItem>
              <ListItem>Прокуратура</ListItem>
              <ListItem>Следственный комитет</ListItem>
            </List>
            <DetailsText>В судах:</DetailsText>
            <List>
              <ListItem>мировых</ListItem>
              <ListItem>городских</ListItem>
              <ListItem>областных</ListItem>
              <ListItem>верховных</ListItem>
              <ListItem>арбитражных судах</ListItem>
            </List>
            <DetailsText>Любой инстанции:</DetailsText>
            <List>
              <ListItem>первой</ListItem>
              <ListItem>апелляционной</ListItem>
              <ListItem>кассационной</ListItem>
              <ListItem>надзорной</ListItem>
            </List>
          </Details>
        </Accordion>
        <Accordion sx={{ width: `${mobileScreen && '100%'}`, marginBottom: 4, padding: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <AccordionTitle sx={{ fontSize: 20, fontWeight: 700, color: '#345a80' }}>
              Составление и экспертиза всех видов документов
            </AccordionTitle>
          </AccordionSummary>
          <Details>
            <DetailsText>Составление:</DetailsText>
            <List>
              <ListItem>заявлений</ListItem>
              <ListItem>договоров</ListItem>
              <ListItem>претензий</ListItem>
              <ListItem>исковых заявлений</ListItem>
              <ListItem>ходатайств</ListItem>
              <ListItem>мировых соглашений</ListItem>
              <ListItem>иных документов</ListItem>
            </List>
          </Details>
        </Accordion>
        <Subtitle
          sx={{
            marginTop: '124px',
            marginBottom: '0',
          }}
        >
          Заказать услугу
        </Subtitle>
        <Text
          sx={{
            textAlign: 'center',
          }}
        >
          Получите бесплатную консультацию по Вашему делу
        </Text>
        <Button margin="36" text="Заказать" />
      </Container>
    </Base>
  );
};

export default AccordionServices;
