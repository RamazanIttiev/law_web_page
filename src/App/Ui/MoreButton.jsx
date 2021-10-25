import { Backdrop } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import MoreInfo from '../components/Dialogs/MoreInfo';

const StyledButton = styled.button`
  background: ${props => props.theme.palette.secondary.main};
  border-radius: 50px;
  color: #fff;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 50px;
  display: block;
  margin: ${props => props.margin}px auto 0;
`;

const MoreButton = ({ text, margin, title, paragraph }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <StyledButton margin={margin} onClick={handleOpen}>
        {text}
      </StyledButton>
      <MoreInfo
        open={open}
        handleClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        title={title}
        paragraph={paragraph}
      />
    </>
  );
};

export default MoreButton;
