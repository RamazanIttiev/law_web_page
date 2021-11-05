import { Alert, Container, Snackbar, TextareaAutosize } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { postData } from '../services';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 32px auto 0;
  padding: 48px 0 32px;
  max-width: 600px;
`;

const Input = styled.input`
  padding: 8px;
  height: 64px;
  border: 1px solid #c9cacc;
  box-sizing: border-box;
  border-radius: 4px;
  border: ${props => props.error && '1px solid #EB1717'};
  box-sizing: border-box;
  box-shadow: 0px 0px 4px rgb(0 0 0 / 20%);
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
  box-shadow: 0px 0px 4px rgb(0 0 0 / 20%);
  border-radius: 4px;
  font-size: 16px;
`;

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

const Form = ({ handleClose = () => {} }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [openAlert, setAlert] = useState(false);
  const [error, setError] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm();

  const closeAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert(false);
  };

  const formSubmit = data => {
    setIsLoading(true);

    postData(data)
      .then(response => {
        if (response.status === 200) {
          setAlert(true);
          setIsLoading(false);
          setTimeout(() => {
            closeAlert();
            handleClose();
          }, 2000);
        }
      })
      .catch(err => {
        if (err) {
          setError(true);
          setAlert(true);
          setTimeout(() => {
            closeAlert();
            handleClose();
          }, 4000);
        }
      })
      .finally(() => {
        reset();
      });
  };

  return (
    <Container maxWidth="lg">
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
        <Snackbar open={openAlert} autoHideDuration={6000} onClose={closeAlert}>
          <Alert onClose={closeAlert} severity={error ? 'error' : 'success'} sx={{ width: '100%' }}>
            {error
              ? 'Произошла ошибка, запишитесь пожалуйста по телефону'
              : 'Ваша заявка успешно отправлена'}
          </Alert>
        </Snackbar>
      </StyledForm>
    </Container>
  );
};

export default Form;