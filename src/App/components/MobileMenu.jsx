import * as React from 'react';
import Box from '@mui/material/Box';
import { Drawer, IconButton, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

const Nav = styled.nav``;

const StyledLink = styled(NavLink)`
  padding: 16px;
  color: #000;
  text-decoration: none;
  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
  }
`;

const Number = styled.div`
  cursor: pointer;
  border-radius: 32px;
  padding: 8px;
  background: ${props => (props.path ? '#ffc700' : '#199c68')};

  a {
    padding: 8px;
    color: ${props => (props.path ? '#000' : '#fff')};
    text-decoration: none;
    display: flex;
    align-items: center;
  }
`;

const MobileMenu = ({ open, toggleDrawer }) => {
  const router = useLocation();

  return (
    <>
      <IconButton
        color="inherit"
        onClick={toggleDrawer(true)}
        sx={{ mr: 2, ...(open && { display: 'none' }) }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
        <Box
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 4,
          }}
        >
          <Nav>
            <List>
              <ListItem>
                <StyledLink
                  activeStyle={{
                    fontWeight: 'bold',
                    borderBottom: '2px solid #f6f6f6',
                  }}
                  to="/"
                >
                  Главная
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink
                  activeStyle={{
                    fontWeight: 'bold',
                    borderBottom: '2px solid #f6f6f6',
                  }}
                  to="/fraud"
                >
                  Дела о мошенничестве
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink
                  activeStyle={{
                    fontWeight: 'bold',
                    borderBottom: '2px solid #f6f6f6',
                  }}
                  to="/insurance"
                >
                  Вопрсы страхования
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink
                  activeStyle={{
                    fontWeight: 'bold',
                    borderBottom: '2px solid #f6f6f6',
                  }}
                  to="/disputes"
                >
                  Жилищные вопросы
                </StyledLink>
              </ListItem>
            </List>
          </Nav>
          <Number path={router.pathname === '/'}>
            <a href="tel:99999999999">99999999999</a>
          </Number>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileMenu;
