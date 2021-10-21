import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';

const Base = styled.div`
  padding: 124px 0;
`;

const Details = styled(AccordionDetails)``;

const Title = styled(Typography).attrs({ variant: 'h1' })`
  text-transform: uppercase;

  &.css-qtipo4-MuiTypography-root {
    margin-bottom: 32px;
  }
`;

const List = styled.ul`
  padding: 0;
  margin-top: 16px;
`;

const ListItem = styled.li`
  margin: 0 24px;
`;

const StyledTypography = styled(Typography)`
  &.css-1w59d56-MuiTypography-root {
    font-size: 16px;
  }
`;

const AccordionTitle = styled(Typography)`
  &.css-1w59d56-MuiTypography-root {
    font-size: 24px;
    font-weight: 700;
    color: ${props => props.theme.palette.primary.main};
  }
`;

const Subtitle = styled(Typography).attrs({ variant: 'h1' })`
  &.css-qtipo4-MuiTypography-root {
    margin-top: 124px;
  }
`;

const Text = styled(Typography)`
  &.css-1w59d56-MuiTypography-root {
    text-align: center;
    font-size: 24px;
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
  margin: 72px auto 0;
  display: block;
`;

const AccordionServices = () => (
  <Base>
    <Title>мы оказываем все виды юридических услуг</Title>
    <Accordion sx={{ marginBottom: 4, padding: 2 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <AccordionTitle>Консультирование</AccordionTitle>
      </AccordionSummary>
      <Details>
        <StyledTypography>
          По всем юридическим вопросам, наши юристы дадут Вам развернутую консультацию и
          профессиональную поддержку на любом этапе решения проблемы
        </StyledTypography>
      </Details>
    </Accordion>
    <Accordion sx={{ marginBottom: 4, padding: 2 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <AccordionTitle>Представительство</AccordionTitle>
      </AccordionSummary>
      <Details>
        <StyledTypography>
          На любом этапе процесса. <br /> В правоохранительных органах:
        </StyledTypography>
        <List>
          <ListItem>МВД (в т.ч. ГУЭБиПК)</ListItem>
          <ListItem>Прокуратура</ListItem>
          <ListItem>Следственный комитет</ListItem>
        </List>
        <StyledTypography>В судах:</StyledTypography>
        <List>
          <ListItem>мировых</ListItem>
          <ListItem>городских</ListItem>
          <ListItem>областных</ListItem>
          <ListItem>верховных</ListItem>
          <ListItem>арбитражных судах</ListItem>
        </List>
        <StyledTypography>Любой инстанции:</StyledTypography>
        <List>
          <ListItem>первой</ListItem>
          <ListItem>апелляционной</ListItem>
          <ListItem>кассационной</ListItem>
          <ListItem>надзорной</ListItem>
        </List>
      </Details>
    </Accordion>
    <Accordion sx={{ marginBottom: 4, padding: 2 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <AccordionTitle>Составление и экспертиза всех видов документов</AccordionTitle>
      </AccordionSummary>
      <Details>
        <StyledTypography>Составление:</StyledTypography>
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
    <Subtitle>Заказать услугу</Subtitle>
    <Text>Получите бесплатную консультацию по Вашему делу</Text>
    <StyledButton>Проконсультироваться</StyledButton>
  </Base>
);

export default AccordionServices;
