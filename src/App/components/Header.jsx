import { AppBar, Container, Toolbar, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import LogoImg from '../../assets/scales.svg';

const Logo = styled.div`
  cursor: pointer;
  font-size: 24px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    padding: 0;
  }

  img {
    display: block;
    width: 32px;
    height: 32px;
    margin-bottom: 8px;
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

const StyledLink = styled(NavLink)`
  padding: 8px;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
  }

  &:hover {
    border-bottom: 2px solid #fff;
  }
`;

const Number = styled.div`
  cursor: pointer;
  background: #199c68;
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
  const mobileScreen = useMediaQuery('(max-width:768px)');
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar sx={{ boxShadow: 'none' }} position="static">
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            padding: '16px 0 !important',
          }}
        >
          <Logo>
            <NavLink to="/" style={{ color: '#fff', textDecoration: 'none' }}>
              <img src={LogoImg} alt="" />
              <Typography>Бастион</Typography>
            </NavLink>
          </Logo>
          {mobileScreen ? (
            <MobileMenu toggleDrawer={toggleDrawer} open={open} />
          ) : (
            <>
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
              <Number>
                <a href="tel:99999999999">99999999999</a>
              </Number>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
