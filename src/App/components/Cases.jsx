import React from 'react';
import styled from 'styled-components';
import { Box, Container, Grid, Typography } from '@mui/material';
import MoreButton from '../Ui/MoreButton';

const CaseTitle = styled(Typography).attrs({ variant: 'h1', component: 'h2' })``;

const CaseText = styled(Typography).attrs({ variant: 'body', component: 'div' })`
  max-height: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  content: '';
  position: relative;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: -webkit-linear-gradient(top, transparent, rgba(255, 255, 255, 0.9));
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const Cases = ({ data }) => (
  <Box
    sx={{
      background: '#fff',
    }}
  >
    <Container maxWidth="md" sx={{ padding: '56px 0' }}>
      {data.map(item => (
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
            <MoreButton margin={0} text="Подробнее" {...item} />
          </Grid>
          <Grid item xs={11} sm={6} md={6}>
            <Image src={item.image} />
          </Grid>
        </Grid>
      ))}
    </Container>
  </Box>
);

export default Cases;
