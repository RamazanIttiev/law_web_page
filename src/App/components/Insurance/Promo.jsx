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
import { Link } from 'react-router-dom';
import PromoBgr from '../../../assets/Promo_bgr.jpeg';
import { insuranceCases } from '../../data/insuranceCases';

const Base = styled.div`
  background: url(${PromoBgr}) no-repeat center/cover;
  text-align: center;
  color: #fff;
`;

const Wrapper = styled.div`
  background-image: -webkit-linear-gradient(top, rgb(52, 90, 128), rgba(163, 163, 163, 0.7));
  padding: 32px 0 56px;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
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
            paddingLeft: 2,
          }}
        >
          Вопросы страхования
        </Title>
        <Box sx={{ width: '100%' }}>
          <nav>
            <List sx={{ display: 'flex' }}>
              {insuranceCases.map(item => (
                <ListItem
                  sx={{ background: 'rgb(0,0,0,.2)', margin: '0 16px', borderRadius: '8px' }}
                  key={item.caseId}
                  disablePadding
                >
                  <ListItemButton>
                    <StyledLink to={`/insuranceCase/${item.caseId}`}>
                      <ListItemText primary={item.primary} />
                    </StyledLink>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </nav>
        </Box>
      </Container>
    </Wrapper>
  </Base>
);

export default Promo;
