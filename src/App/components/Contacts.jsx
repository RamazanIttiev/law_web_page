import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.palette.background.paper};
`;

const Iframe = styled.iframe`
  width: 50%;
`;

const Info = styled.div`
  padding: 72px;
  p {
    line-height: 4;
    font-size: 18px;
  }
`;

const Bold = styled.span`
  color: ${props => props.theme.palette.primary.main};
  font-weight: 700;
  font-size: 20px;
`;

const Link = styled.a`
  text-decoration: none;
  padding: 8px;
  color: black;
`;

const Contacts = () => (
  <Base>
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
    <Iframe
      title="map"
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A2c0fb630e9a8661cdf0bf01a87572d46ded932a066be8b02d7247754a098a2b6&amp;source=constructor"
      width="781"
      height="400"
      frameBorder="0"
    />
  </Base>
);

export default Contacts;
