import React from 'react';
import {
  DialogContentText,
  Backdrop,
  Dialog,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  Container,
} from '@mui/material';
import styled from 'styled-components';

import Form from '../Form';

const Title = styled(DialogTitle).attrs({ variant: 'h1' })``;

const Subtitle = styled(DialogContentText).attrs({ variant: 'h2' })``;

const DialogForm = ({ open, handleClose }) => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Container maxWidth="lg">
        <Title sx={(matches && { fontSize: '24px' }, { p: 0, mt: 2 })}>
          Получите бесплатную консультацию
        </Title>
        <Subtitle sx={matches && { fontSize: '16px' }}>
          Заполните контактные данные и мы свяжемся с Вами в течение 10 минут
        </Subtitle>
      </Container>
      <DialogContent sx={{ p: 0 }}>
        <Form handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;
