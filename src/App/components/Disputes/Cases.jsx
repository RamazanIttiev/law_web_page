import React from 'react';
import styled from 'styled-components';
import { Container, Grid, Typography } from '@mui/material';
import MoreButton from '../../Ui/MoreButton';
import { cases } from '../../data/cases';

const CaseTitle = styled(Typography).attrs({ variant: 'h1', component: 'h2' })``;

const CaseText = styled(Typography).attrs({ variant: 'body', component: 'div' })`
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Image = styled.img`
  width: 300px;
  height: 200px;
`;

const Cases = () => (
  <Container maxWidth="lg" sx={{ padding: '56px 0' }}>
    <Grid container alignItems="center">
      {cases.map(item => (
        <>
          <Grid item s={12} sm={12} md={4}>
            <CaseTitle
              sx={{ textAlign: 'start', marginBottom: '24px', lineHeight: 1.2, fontSize: '28px' }}
            >
              {item.title}
            </CaseTitle>
            <CaseText sx={{ marginBottom: '32px' }}>{item.paragraph}</CaseText>
            <MoreButton text="Подробнее" {...item} />
          </Grid>
          <Grid item s={12} sm={12} md={4}>
            <Image src={item.image} />
          </Grid>
        </>
      ))}
    </Grid>
  </Container>
);

export default Cases;
