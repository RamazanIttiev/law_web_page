import { Gavel } from '@mui/icons-material';
import { AppBar, Container, Toolbar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Logo = styled.div`
  cursor: pointer;
  font-size: 24px;

  a {
    padding: 0;
  }
`;

const Nav = styled.nav`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin: 0 24px;
`;

const StyledLink = styled(Link)`
  padding: 8px;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
  }
`;

const Number = styled.div`
  cursor: pointer;
  background: ${props => (props.path ? '#ffc700' : '#199c68')};
  border-radius: 32px;
  padding: 8px;

  a {
    padding: 8px;
    color: ${props => (props.path ? '#000' : '#fff')};
    text-decoration: none;
    display: flex;
    align-items: center;
  }
`;

const Header = () => {
  const router = useLocation();

  return (
    <AppBar
      sx={{ boxShadow: 'none', backgroundColor: router.pathname === '/' && 'rgba(0, 0, 0, 1)' }}
      position="static"
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            padding: '16px 0 !important',
          }}
        >
          <Logo>
            <StyledLink to="/">
              <Gavel /> Бастион
            </StyledLink>
          </Logo>
          <Nav>
            <List>
              <ListItem>
                <StyledLink to="/fraud">Дела о мошенничестве</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/insurance">Вопрсы страхования</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/disputes">Жилищные споры</StyledLink>
              </ListItem>
            </List>
          </Nav>
          <Number path={router.pathname === '/'}>
            <a href="tel:99999999999">99999999999</a>
          </Number>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
