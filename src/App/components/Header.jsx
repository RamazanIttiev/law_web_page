import React from 'react';
import styled from 'styled-components';

const Base = styled.header`
  background: ${props => props.theme.palette.primary.main};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  color: #fff;
  position: fixed;
  width: 100%;
  height: 100px;
`;

const Logo = styled.div`
  cursor: pointer;

  a {
    padding: 0;
  }
`;

const Nav = styled.nav``;

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

const Link = styled.a`
  padding: 16px;
  color: #fff;
  text-decoration: none;
`;

const Number = styled.div`
  cursor: pointer;
  color: #fff;
  background: #199c68;
  border-radius: 32px;
  padding: 16px;
`;
const EmptyDiv = styled.div`
  height: 100px;
`;

const Header = () => (
  <>
    <Base>
      <Logo>
        <Link href="/">
          ЦЕНТР ЮРИДИЧЕСКОЙ ПОМОЩИ <br />
          <span>по Москве и Московской области</span>
        </Link>
      </Logo>
      <Nav>
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
      </Nav>
      <Number>
        <Link href="tel:99999999999">99999999999</Link>
      </Number>
    </Base>
    <EmptyDiv />
  </>
);

export default Header;
