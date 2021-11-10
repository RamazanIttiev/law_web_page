import { AppBar, Container, Toolbar, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import LogoImg from '../../assets/Logo.svg';

const Logo = styled.div`
  cursor: pointer;
  font-size: 24px;

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
`;

const MobileLogo = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-right: 0px;
`;

const DesctopLogo = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-right: 8px;
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
  margin: 0 16px;

  @media screen and (max-width: 1024px) {
    margin: 0 10px;
  }
`;

const StyledLink = styled(NavLink)`
  padding: 8px;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  border-bottom: 2px solid rgba(255, 255, 255, 0);

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
  const tabletScreen = useMediaQuery('(max-width:1024px)');
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
            <NavLink to="/">
              {mobileScreen ? (
                <MobileLogo src={LogoImg} alt="Центр юридической помощи" />
              ) : (
                <>
                  <DesctopLogo src={LogoImg} alt="Центр юридической помощи" />
                  {!tabletScreen && <Typography>Центр юридической помощи</Typography>}
                </>
              )}
            </NavLink>
          </Logo>
          {mobileScreen ? (
            <MobileMenu toggleDrawer={toggleDrawer} open={open} />
          ) : (
            <>
              <Nav>
                <List>
                  {!tabletScreen && (
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
                  )}
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
                      Вопросы страхования
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
                <a href="tel:8-910-467-4000">8 910 467 4000</a>
              </Number>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
