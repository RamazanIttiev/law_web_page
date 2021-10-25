import { Container, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
  background: ${props => props.theme.palette.background.paper};
  padding: ${props => props.theme.spacing(10)} 0;
`;

const Title = styled(Typography).attrs({ variant: 'h1' })`
  width: 100%;
  text-transform: uppercase;
`;

const Text = styled(Typography)`
  text-align: center;

  &:last-child {
    margin-top: 48px;
  }
`;

const Description = () => (
  <Base>
    <Container maxWidth="md">
      <Title sx={{ marginBottom: '56px' }}>Наши преимущества</Title>
      <Text>
        Жилищные споры - один из самых больших разделов юриспруденции. В жилищных отношениях права
        граждан могут нарушаться по многим причинам и частой проблемой является защита прав
        собственников жилых помещений из-за раздела, порядка пользования и т.д., что приводит к
        частым путаницам. Бывает, нужно и долю выделить, и порядок использования определить, а еще и
        учесть, что имеются разного рода обременения на это жилое помещение, поэтому для успешного
        разрешения возникшей ситуации требуются знания не только жилищного, но и процессуального
        законодательства.
      </Text>
      <Text>
        Мы готовы проконсультировать и оказать помощь Вам в разрешении жилищных споров на любой
        стадии и даже представлять Ваши интересы в судах и госорганах, тем самым разрешить его.
      </Text>
    </Container>
  </Base>
);

export default Description;
