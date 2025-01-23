import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';
import { Container, useMediaQuery } from '@mui/material';

const Base = styled.div`
  padding: ${props => props.theme.spacing(10)} 0;
  background: ${props => props.theme.palette.background.paper};
`;

const Details = styled(AccordionDetails)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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

  &:last-child {
    background: #b1b1b1;
  }
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
  `"ПРИЗМА"`,
  'И другие',
];

const Companies = () => {
  const mobileScreen = useMediaQuery('(max-width:768px)');

  return (
    <Base>
      <Container maxWidth="lg">
        <Accordion
          sx={{
            width: `${mobileScreen && '100%'}`,
            marginBottom: 4,
            padding: 2,
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <AccordionTitle sx={{ fontSize: 20, fontWeight: 700, color: '#345a80' }}>
              Список компаний, жертвами которых становились наши клиенты:
            </AccordionTitle>
          </AccordionSummary>
          <Details>
            {AllCompanies.map(company => (
              <Company
                key={company}
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
      </Container>
    </Base>
  );
};

export default Companies;
