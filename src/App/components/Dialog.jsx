import React from 'react';
import { Box, TextareaAutosize, Typography } from '@mui/material';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
`;

const Input = styled.input`
  padding: 8px;
  height: 81px;
  font-size: 24px;
  border: 1px solid #c9cacc;
  box-sizing: border-box;
  border-radius: 4px;
  border: ${props => props.error && '1px solid #EB1717'};
  box-sizing: border-box;
  box-shadow: 0px 0px 4px rgba(235, 23, 23, 0.2);
  border-radius: 4px;
  margin-bottom: 32px;
`;

const Textarea = styled(TextareaAutosize)`
  padding: 8px;
  height: 81px;
  font-size: 24px;
  border: 1px solid #c9cacc;
  box-sizing: border-box;
  border-radius: 4px;
  border: ${props => props.error && '1px solid #EB1717'};
  box-sizing: border-box;
  box-shadow: 0px 0px 4px rgba(235, 23, 23, 0.2);
  border-radius: 4px;
  margin-bottom: 32px;
`;

const Title = styled(Typography).attrs({ variant: 'h1' })`
  &.css-qtipo4-MuiTypography-root {
    font-size: 36px;
  }
`;

const Subtitle = styled(Typography).attrs({ variant: 'h2' })``;

const StyledButton = styled.button`
  background: ${props => props.theme.palette.secondary.main};
  border-radius: 50px;
  color: #fff;
  padding: 24px;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 50px;
  display: block;
  margin: ${props => props.margin}px auto 0;
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  textAlign: 'center',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Dialog = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const formSubmit = data => {
    console.log(data);
  };

  return (
    <Box sx={style}>
      <Title>Получите бесплатную консультацию</Title>
      <Subtitle>Заполните контактные данные и мы свяжемся с вами в течение 10 минут</Subtitle>
      <StyledForm onSubmit={handleSubmit(formSubmit)}>
        <Input
          error={errors.name}
          {...register('name', { required: true })}
          type="text"
          placeholder="ФИО"
        />
        <Input
          error={errors.phone}
          {...register('phone', { required: true })}
          type="number"
          placeholder="Ваш номер телефона"
        />
        <Textarea
          {...register('problem', { required: true })}
          style={{ height: '280px', resize: 'none' }}
          error={errors.problem}
          type="text"
          placeholder="Кратко опишите проблему"
        />
        <StyledButton type="submit">Получить консультацию</StyledButton>
      </StyledForm>
    </Box>
  );
};

export default Dialog;
