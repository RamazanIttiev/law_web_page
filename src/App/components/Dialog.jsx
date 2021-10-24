import React, { useState } from 'react';
import { TextareaAutosize, Typography, useMediaQuery } from '@mui/material';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { postData } from '../services';

const Base = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => props.width}%;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%),
    0px 9px 46px 8px rgb(0 0 0 / 12%);
  padding: 16px;
  border-radius: 16px;
`;

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

const Title = styled(Typography).attrs({ variant: 'h1' })``;

const Subtitle = styled(Typography).attrs({ variant: 'h2' })``;

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

const Dialog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const matches = useMediaQuery('(min-width:600px)');

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const formSubmit = data => {
    postData(data, setIsLoading);
  };

  return (
    <Base width={matches ? '50' : '75'}>
      <Title>Получите бесплатную консультацию</Title>
      <Subtitle>Заполните контактные данные и мы свяжемся с вами в течение 10 минут</Subtitle>

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
    </Base>
  );
};

export default Dialog;
