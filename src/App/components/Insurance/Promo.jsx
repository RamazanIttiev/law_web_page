import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import PromoBgr from '../../../assets/Promo_bgr.jpeg';

const Base = styled.div`
  background: url(${PromoBgr});
  text-align: center;
  color: #fff;
`;

const Wrapper = styled.div`
  background-image: -webkit-linear-gradient(top, rgb(52, 90, 128), rgba(163, 163, 163, 0.7));
  padding: 32px 0 56px;
`;

const Title = styled(Typography).attrs({ variant: 'h1' })``;

const Promo = () => (
  <Base>
    <Wrapper>
      <Container>
        <Title
          sx={{
            marginBottom: '56px',
            color: '#fff',
            textAlign: 'start',
            paddingLeft: 2,
          }}
        >
          Споры в сфере страхования
        </Title>
        <Box sx={{ width: '100%', maxWidth: 360 }}>
          <nav>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Досрочное расторжение договора страхования" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Получение страхового возмещения" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Споры при отказе от навязанного договора стразования" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </Container>
    </Wrapper>
  </Base>
);

export default Promo;
