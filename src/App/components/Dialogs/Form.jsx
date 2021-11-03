import React, { useState } from 'react';
import {
  DialogContentText,
  Backdrop,
  Dialog,
  DialogContent,
  DialogTitle,
  TextareaAutosize,
  useMediaQuery,
  Snackbar,
  Alert,
} from '@mui/material';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { postData } from '../../services';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

const Input = styled.input`
  padding: 8px;
  height: 64px;
  border: 1px solid #c9cacc;
  box-sizing: border-box;
  border-radius: 4px;
  border: ${props => props.error && '1px solid #EB1717'};
  box-sizing: border-box;
  box-shadow: 0px 0px 4px rgba(235, 23, 23, 0.2);
  border-radius: 4px;
  margin-bottom: 16px;
  font-size: 16px;
`;

const Textarea = styled(TextareaAutosize)`
  padding: 8px;
  border: 1px solid #c9cacc;
  box-sizing: border-box;
  border-radius: 4px;
  border: ${props => props.error && '1px solid #EB1717'};
  box-sizing: border-box;
  box-shadow: 0px 0px 4px rgba(235, 23, 23, 0.2);
  border-radius: 4px;
  font-size: 16px;
`;

const Title = styled(DialogTitle).attrs({ variant: 'h1' })``;

const Subtitle = styled(DialogContentText).attrs({ variant: 'h2' })``;

const StyledButton = styled.button`
  background: ${props => props.theme.palette.secondary.main};
  border-radius: 50px;
  opacity: ${props => (props.disabled ? '0.6' : 1)};
  color: #fff;
  padding: 24px;
  font-weight: 700;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  border: none;
  outline: none;
  border-radius: 50px;
  display: block;
  margin: 24px auto 0;
`;

const Form = ({ open, handleClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [openAlert, setAlert] = React.useState(false);
  const [error, setError] = React.useState(false);
  const matches = useMediaQuery('(max-width:600px)');

  const closeAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert(false);
  };

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm();

  const formSubmit = data => {
    setIsLoading(true);

    postData(data)
      .then(response => {
        if (response.status === 200) {
          setAlert(true);
          setIsLoading(false);
          setTimeout(() => {
            handleClose();
            closeAlert();
          }, 2000);
        }
      })
      .catch(err => {
        if (err) {
          setError(true);
          setAlert(true);
          setTimeout(() => {
            handleClose();
            closeAlert();
          }, 4000);
        }
      })
      .finally(() => {
        reset();
      });
  };

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
      <Title sx={matches && { fontSize: '24px' }}>Получите бесплатную консультацию</Title>
      <Subtitle sx={matches && { fontSize: '16px' }}>
        Заполните контактные данные и мы свяжемся с вами в течение 10 минут
      </Subtitle>
      <DialogContent>
        <StyledForm onSubmit={handleSubmit(formSubmit)}>
          <Input
            name="name"
            error={errors.name}
            {...register('name', { required: true })}
            type="text"
            placeholder="ФИО"
          />
          <Input
            name="phone"
            error={errors.phone}
            {...register('phone', { required: true })}
            type="number"
            placeholder="Ваш номер телефона"
          />
          <Textarea
            name="message"
            {...register('message', { required: true })}
            style={{ height: '124px', resize: 'none' }}
            error={errors.message}
            type="text"
            placeholder="Кратко опишите проблему"
          />
          <StyledButton disabled={isLoading} type="submit">
            Получить консультацию
          </StyledButton>
        </StyledForm>
      </DialogContent>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={closeAlert}>
        <Alert onClose={closeAlert} severity={error ? 'error' : 'success'} sx={{ width: '100%' }}>
          {error
            ? 'Произошла ошибка, запишитесь пожалуйста по телефону'
            : 'Ваша заявка успешно отправлена'}
        </Alert>
      </Snackbar>
    </Dialog>
  );
};

export default Form;
