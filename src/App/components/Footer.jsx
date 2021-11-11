import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../../assets/Logo.svg';

const Iframe = styled.iframe`
  width: 100%;
`;

const Info = styled.div`
  padding: 32px;

  p {
    word-break: break-word;
    margin-bottom: 8px;
    font-size: 18px;

    @media screen and (max-width: 600px) {
      font-size: 14px;
    }
  }
`;

const Bold = styled.span`
  color: ${props => props.theme.palette.primary.main};
  font-weight: 700;
  font-size: 18px;
  
  @media screen and (max-width:600px) {
    font-size: 16px;
  },
`;

const StyledLink = styled.a`
  padding: 8px;
  color: black;
`;

const TermsPolicy = styled(Typography)`
  font-size: 13px !important;
`;

const Logo = styled.div`
  cursor: pointer;
  font-size: 24px;
  margin-bottom: 16px;

  a {
    max-width: 240px;
    color: black;
    text-decoration: none;
    background: white;
    padding: 8px;
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
  }

  img {
    display: block;
    width: 48px;
    height: 48px;
    margin-right: 16px;
  }
`;

const Contacts = () => (
  <footer>
    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems="center">
      <Grid item xs={12} sm={6} md={6}>
        <Info>
          <Logo>
            <NavLink to="/">
              <img src={LogoImg} alt="Центр юридической помощи" />
              <Typography sx={{ mb: '0 !important' }}>ООО &quot;Бастион&quot;</Typography>
            </NavLink>
          </Logo>
          <Typography>
            <Bold>Мы работаем:</Bold> с 9 до 21, пн-сб. Приём заявок 24/7
          </Typography>
          <Typography>
            <Bold>Телефон:</Bold>
            <StyledLink href="tel:tel:8-910-467-4000">8 910 467 4000</StyledLink>
          </Typography>
          <Typography>
            <Bold>Email:</Bold>
            <StyledLink href="mailto:groupbastion@yandex.ru">groupbastion@yandex.ru</StyledLink>
          </Typography>
          <Typography>
            <Bold>ИНН:</Bold>
            &nbsp;9704081475
          </Typography>
          <Typography>
            <Bold>ОГРН:</Bold>
            &nbsp;1217700363462
          </Typography>
          <TermsPolicy sx={{ mt: '48px' }}>
            <Link target="_blank" to="/terms">
              Положение
            </Link>
            &nbsp;и&nbsp;
            <Link target="_blank" to="/accept">
              согласие
            </Link>
            &nbsp;на обработку персональных данных
          </TermsPolicy>
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
