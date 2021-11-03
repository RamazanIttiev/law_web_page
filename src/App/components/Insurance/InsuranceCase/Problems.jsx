import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Title = styled(Typography).attrs({ variant: 'h1', component: 'h2' })``;

const Problems = ({ problems, subtitle }) => (
  <Container maxWidth="lg" sx={{ p: 7 }}>
    <Title sx={{ mb: 3 }}>{subtitle}</Title>
    <Grid container spacing={4}>
      {problems.map(problem => (
        <Grid item xs={12} sm={4} md={4}>
          <Card
            sx={{
              minHeight: '332px',
              textAlign: 'justify',
              transition: 'all 0.5s',
              '&:hover': {
                background: '#345a80',
                boxShadow: '0px 1px 20px 8px lightgrey',
                color: '#fff',
              },
            }}
          >
            <CardContent>
              <Typography gutterBottom>{problem}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Problems;