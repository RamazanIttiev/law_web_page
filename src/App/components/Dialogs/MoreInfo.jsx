import React from 'react';
import { Backdrop, Dialog, DialogContent, DialogTitle } from '@mui/material';
import styled from 'styled-components';
import FormButton from '../../Ui/FormButton';

const Title = styled(DialogTitle).attrs({ variant: 'h1', component: 'h2' })`
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

const MoreInfo = ({ open, handleClose, title, paragraph }) => (
  <Dialog
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
    sx={{
      '& .MuiPaper-root': {
        maxWidth: '800px',
      },
    }}
  >
    <Title sx={{ fontSize: '28px' }}>{title}</Title>
    <DialogContent>
      {paragraph}
      <FormButton margin={24} text="Получить консультацию" />
    </DialogContent>
  </Dialog>
);

export default MoreInfo;
