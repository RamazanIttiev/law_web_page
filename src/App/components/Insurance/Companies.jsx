import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { banks, companies } from '../../data/insuranceCompanies';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 8px;
  background: #4a7db1;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  font-weight: 700;
  text-align: center;
  list-style: none;

  img {
    height: 20px;
    margin-bottom: 8px;
  }
`;

const Companies = () => {
  const mobileScreen = useMediaQuery('(max-width:768px)');

  return (
    <Box sx={{ p: '56px 0', background: '#fff' }}>
      <Container maxWidth="lg">
        <Accordion sx={{ width: `${mobileScreen && '100%'}`, marginBottom: 4, padding: 2 }}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography sx={{ fontSize: 20, fontWeight: 700, color: '#345a80' }}>
              Работаем со всеми страховыми компаниями России:
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              <List>
                {companies.map(({ title, icon }) => (
                  <Grid key={title} item xs={11} sm={6} md={6}>
                    <Li key={title}>
                      <img src={icon} alt={title} />
                      <Typography>{title}</Typography>
                    </Li>
                  </Grid>
                ))}
              </List>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: `${mobileScreen && '100%'}`, marginBottom: 4, padding: 2 }}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography sx={{ fontSize: 20, fontWeight: 700, color: '#345a80' }}>
              Работаем со всеми банками России:
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              <List>
                {banks.map(({ title, icon }) => (
                  <Grid key={title} item xs={11} sm={6} md={6}>
                    <Li key={title}>
                      <img src={icon} alt={title} style={{ height: '28px' }} />
                      <Typography>{title}</Typography>
                    </Li>
                  </Grid>
                ))}
              </List>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};

export default Companies;
