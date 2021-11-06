import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
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

const Promo = () => {
  const mobileScreen = useMediaQuery('(max-width:768px)');

  return (
    <Base>
      <Wrapper>
        <Container>
          <Title
            sx={{
              marginBottom: '56px',
              color: '#fff',
            }}
          >
            Вопросы страхования
          </Title>
          <Box sx={{ width: '100%' }}>
            <nav>
              <List sx={mobileScreen ? { display: 'block' } : { display: 'flex' }}>
                {insuranceCases.map(item => (
                  <ListItem
                    sx={{
                      background: 'rgb(0,0,0,.2)',
                      margin: !mobileScreen ? '0 16px' : '16px 0',
                      borderRadius: '8px',
                    }}
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
};

export default Promo;
