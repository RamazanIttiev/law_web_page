import React from 'react';
import styled from 'styled-components';

const Sroll = styled.div`
  position: fixed;
  background: linear-gradient(to right, #199c68 ${props => props.scroll}%, transparent 0);
  width: 100%;
  height: 5px;
  z-index: 3;
`;

const ScrollBar = ({ scroll }) => <Sroll scroll={scroll} />;

export default ScrollBar;
