import { Container, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Eagle from '../../assets/eagleImg.png';

const Base = styled.div`
  background: ${props => props.theme.palette.background.paper};
  padding: 56px 0;
`;

const Text = styled(Typography)`
  text-align: center;
`;

const Article = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
`;

const Link = styled.a`
  text-decoration: none;
  padding: 16px;
  color: black;
`;

const EagleIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
`;

const Guaranties = () => (
  <Base>
    <Container maxWidth="lg">
      <Text>
        «Каждому гарантируется право на получение квалифицированной юридической помощи. В случаях,
        предусмотренных законом, юридическая помощь оказывается бесплатно»
      </Text>
      <Article>
        <EagleIcon src={Eagle} />
        <Link
          href="http://www.consultant.ru/document/cons_doc_LAW_28399/78dcbb89fb8a04e896d5863e68edd708540f844c/ "
          target="_blank"
        >
          ст.48 Конституции РФ
        </Link>
      </Article>
    </Container>
  </Base>
);

export default Guaranties;
