import { Box, Card, CardContent, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Title = styled(Typography).attrs({ variant: 'h1', component: 'h2' })``;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;
const Problems = ({ problems, subtitle }) => {
  const mobileScreen = useMediaQuery('(max-width:768px)');

  return (
    <Box sx={{ p: '56px 0' }}>
      <Container maxWidth="lg">
        <Title sx={{ mb: 3 }}>{subtitle}</Title>
        {problems.map(({ icon, text }) => (
          <Grid
            key={text}
            container
            spacing={4}
            sx={{ alignItems: 'center', justifyContent: 'center', mb: 3 }}
          >
            {!mobileScreen && (
              <Grid item xs={1} sm={1} md={1}>
                <Image src={icon} alt="" />
              </Grid>
            )}
            <Grid item xs={11} sm={8} md={8}>
              <Card
                sx={{
                  textAlign: 'justify',
                  transition: 'all 0.5s',
                  '&:hover': {
                    boxShadow: '0px 1px 20px 8px lightgrey',
                  },
                }}
              >
                <CardContent>
                  <Typography gutterBottom>{text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        ))}
      </Container>
    </Box>
  );
};

export default Problems;
