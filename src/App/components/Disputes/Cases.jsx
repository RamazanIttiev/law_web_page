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
  width: 100%;
  border-radius: 8px;
`;

const Cases = () => (
  <Container maxWidth="md" sx={{ padding: '56px 0' }}>
    {cases.map(item => (
      <Grid
        alignItems="center"
        container
        spacing={{ xs: 6, md: 12 }}
        key={item.id}
        sx={{ marginBottom: 12, flexDirection: item.id % 2 === 0 ? 'row-reverse' : 'row' }}
      >
        <Grid item xs={11} sm={6} md={6}>
          <CaseTitle
            sx={{ textAlign: 'start', marginBottom: '24px', lineHeight: 1.2, fontSize: '28px' }}
          >
            {item.title}
          </CaseTitle>
          <CaseText sx={{ marginBottom: '32px' }}>{item.paragraph}</CaseText>
          <MoreButton text="Подробнее" {...item} />
        </Grid>
        <Grid item xs={11} sm={6} md={6}>
          <Image src={item.image} />
        </Grid>
      </Grid>
    ))}
  </Container>
);

export default Cases;
