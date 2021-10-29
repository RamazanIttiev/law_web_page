import { Grid, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Iframe = styled.iframe`
  width: 100%;
`;

const Info = styled.div`
  padding: 32px;

  p {
    word-break: break-word;
    margin-bottom: 24px;
    font-size: 18px;

    @media screen and (max-width:600px) {
      font-size: 14px;
    },
  }
`;

const Bold = styled.span`
  color: ${props => props.theme.palette.primary.main};
  font-weight: 700;
  font-size: 20px;
  
  @media screen and (max-width:600px) {
    font-size: 16px;
  },
`;

const Link = styled.a`
  padding: 8px;
  color: black;
`;

const Contacts = () => (
  <footer>
    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems="center">
      <Grid item xs={12} sm={6} md={6}>
        <Info>
          <Typography>
            <Bold>Мы работаем:</Bold> с 9 до 21, пн-сб. Приём заявок 24/7
          </Typography>
          <Typography>
            <Bold>Телефон:</Bold>
            <Link href="tel:+7 932 777 77 52">+7 932 777 77 52</Link>
          </Typography>
          <Typography>
            <Bold>Email:</Bold>
            <Link href="mailto:rightsprotectionrf@yandex.ru">rightsprotectionrf@yandex.ru</Link>
          </Typography>
        </Info>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Iframe
          title="map"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A2c0fb630e9a8661cdf0bf01a87572d46ded932a066be8b02d7247754a098a2b6&amp;source=constructor"
          width="781"
          height="400"
          frameBorder="0"
        />
      </Grid>
    </Grid>
  </footer>
);

export default Contacts;
