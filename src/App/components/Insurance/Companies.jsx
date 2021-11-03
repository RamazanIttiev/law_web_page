import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { companies } from '../../data/insuranceCompanies';

const Title = styled(Typography).attrs({ variant: 'h1' })`
  margin-bottom: 48px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  margin: 8px;
  background: #345a80;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  font-weight: 700;
  width: 25%;
  text-align: center;
  list-style: none;

  @media screen and (max-width: 768px) {
    width: 45%;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

const Companies = () => (
  <Box sx={{ p: '56px 0', background: '#fff' }}>
    <Container maxWidth="lg">
      <Title>Работам со всеми страховыми компаниями России:</Title>
      <List>
        {companies.map(company => (
          <Li>{company}</Li>
        ))}
      </List>
    </Container>
  </Box>
);

export default Companies;
