import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';

const Base = styled.div`
  padding: ${props => props.theme.spacing(10)} 0;
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
`;

const Company = styled(Typography)`
  margin: 8px;
  background: #345a80;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  font-weight: 700;
  min-width: 250px;
  text-align: center;
`;

const AccordionTitle = styled(Typography)``;

const AllCompanies = [
  `КПК "РУСФИНАНС"`,
  `ООО "ИНВЕСТ ГРУПП"`,
  `ООО "РУССИНВЕСТГРУПП"`,
  `ООО МКК "РУСКАПИТАЛГРУПП"`,
  `МОССБЕРФОНД`,
  `FOREX CLUB (FX CLUB)`,
  `БАСТИОН (BASTIONCOOP)`,
  `МСФ КАПИТАЛ`,
  `ООО "СБЕРИНВЕСТ"`,
  `ООО ИД "ЖИЗНЬ"`,
  `"СБЕРКАПИТАЛ`,
  `КПК "СИТИСБЕРЪ"`,
  `АФК "НАСЛЕДИЕ"`,
  `КАПИТАЛ ПЛЮС`,
  `ПРОМФИНАНС БРОКЕР`,
  `КПК «ДОВЕРИЕ 24»`,
  `КПК «МИРФИНАНСОВ»`,
  `ИК "ФИНИКО" (FINIKO)`,
  `ИК "АНТАРЕС"`,
];

const Companies = () => (
  <Base>
    <Title
      sx={{
        marginBottom: '48px',
      }}
    >
      списки компаний с которыми мы работаем
    </Title>
    <Accordion sx={{ marginBottom: 4, padding: 2 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <AccordionTitle sx={{ fontSize: 20, fontWeight: 700, color: '#345a80' }}>
          Консультирование
        </AccordionTitle>
      </AccordionSummary>
      <Details>
        {AllCompanies.map(company => (
          <Company
            sx={{
              fontSize: 14,
              margin: 1,
              background: '#345a80',
              color: '#fff',
              padding: 1,
              borderRadius: 2,
              fontWeight: 700,
              minWidth: 250,
              textAlign: 'center',
            }}
          >
            {company}
          </Company>
        ))}
      </Details>
    </Accordion>
  </Base>
);

export default Companies;
