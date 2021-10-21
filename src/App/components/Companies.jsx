import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';

const Base = styled.div`
  padding: 124px 0;
  background: ${props => props.theme.palette.background.paper};
`;

const Details = styled(AccordionDetails)`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
`;

const Title = styled(Typography).attrs({ variant: 'h1' })`
  text-transform: uppercase;

  &.css-qtipo4-MuiTypography-root {
    margin-bottom: 32px;
  }
`;

const StyledTypography = styled(Typography)`
  &.css-1w59d56-MuiTypography-root {
    font-size: 16px;
    margin: 8px;
    background: #345a80;
    color: #fff;
    padding: 8px;
    border-radius: 4px;
    font-weight: 700;
    min-width: 250px;
    text-align: center;
  }
`;

const AccordionTitle = styled(Typography)`
  &.css-1w59d56-MuiTypography-root {
    font-size: 24px;
    font-weight: 700;
    color: ${props => props.theme.palette.primary.main};
  }
`;

const Companies = () => (
  <Base>
    <Title>списки компаний с которыми мы работаем</Title>
    <Accordion sx={{ marginBottom: 4, padding: 2 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <AccordionTitle>Консультирование</AccordionTitle>
      </AccordionSummary>
      <Details>
        <StyledTypography>КПК `РУСФИНАНС`</StyledTypography>
        <StyledTypography>ООО `ИНВЕСТ ГРУПП`</StyledTypography>
        <StyledTypography>ООО `РУССИНВЕСТГРУПП`</StyledTypography>
        <StyledTypography>ООО МКК `РУСКАПИТАЛГРУПП`</StyledTypography>
        <StyledTypography>МОССБЕРФОНД</StyledTypography>
        <StyledTypography>ООО `СБЕРИНВЕСТ`</StyledTypography>
        <StyledTypography>ООО ИД `ЖИЗНЬ`</StyledTypography>
        <StyledTypography>`СБЕРКАПИТАЛ, КПК `СИТИСБЕРЪ`</StyledTypography>
        <StyledTypography> АФК `НАСЛЕДИЕ`</StyledTypography>
        <StyledTypography>КАПИТАЛ ПЛЮС</StyledTypography>
        <StyledTypography>ПРОМФИНАНС БРОКЕР</StyledTypography>
        <StyledTypography>КПК `ДОВЕРИЕ 24`</StyledTypography>
        <StyledTypography>КПК `МИРФИНАНСОВ`</StyledTypography>
        <StyledTypography>КПК `МИРФИНАНСОВ`</StyledTypography>
        <StyledTypography>FOREX CLUB (FX CLUB)</StyledTypography>
        <StyledTypography>ИК `ФИНИКО` (FINIKO)</StyledTypography>
        <StyledTypography>БАСТИОН (BASTIONCOOP)</StyledTypography>
        <StyledTypography>ИК `АНТАРЕС`</StyledTypography>
      </Details>
    </Accordion>
  </Base>
);

export default Companies;
