import { Gavel } from '@mui/icons-material';
import { AppBar, Container, Toolbar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
  cursor: pointer;
  font-size: 24px;

  a {
    padding: 0;
  }
`;

// const Nav = styled.nav`
//   @media screen and (max-width: 600px) {
//     display: none;
//   }
// `;

// const List = styled.ul`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   list-style: none;
//   padding: 0;
//   margin: 0;
// `;

// const ListItem = styled.li`
//   margin: 0 24px;
// `;

const Link = styled.a`
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
  color: #fff;
  background: #199c68;
  border-radius: 32px;
  padding: 8px;
`;

const Header = () => (
  <AppBar sx={{ boxShadow: 'none', backgroundColor: 'rgba(0, 0, 0, 1)' }} position="static">
    <Container maxWidth="lg">
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          padding: '16px 0 !important',
        }}
      >
        <Logo>
          <Link href="/">
            <Gavel /> Бастион
          </Link>
        </Logo>
        {/* <Nav>
          <List>
            <ListItem>
              <Link href="/">Компетенции</Link>
            </ListItem>
            <ListItem>
              <Link href="/">Услуги</Link>
            </ListItem>
            <ListItem>
              <Link href="/">Контакты</Link>
            </ListItem>
          </List>
        </Nav> */}
        <Number>
          <Link href="tel:99999999999">99999999999</Link>
        </Number>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Header;
