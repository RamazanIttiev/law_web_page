import { ArrowBack } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PromoBgr from '../../../../assets/Promo_bgr.jpeg';
import Button from '../../../Ui/FormButton';

const Wrapper = styled.div`
  background-image: -webkit-linear-gradient(top, rgb(52, 90, 128), rgba(163, 163, 163, 0.7));
  padding: 24px 0 56px;
`;

const Title = styled(Typography).attrs({ variant: 'h1' })``;

const List = styled.ul`
  padding: 0;
  margin-top: 16px;
`;

const ListItem = styled.li`
  margin: 0 24px;
`;

const Promo = ({ title, about }) => {
  const history = useHistory();

  const handleClick = () => {
    if (history.length === 1) {
      history.push('/');
    } else {
      history.goBack();
    }
  };

  return (
    <Box sx={{ background: `url(${PromoBgr}) no-repeat center/cover;`, color: '#fff' }}>
      <Wrapper>
        <Container>
          <ArrowBack onClick={handleClick} sx={{ mb: 3, cursor: 'pointer' }} />
          <Title
            sx={{
              marginBottom: '56px',
              color: '#fff',
              textAlign: 'start',
            }}
          >
            {title}
          </Title>
          <List>
            {about.map(listItem => (
              <ListItem key={listItem}>{listItem}</ListItem>
            ))}
          </List>
          <Button margin="72" text="Получите бесплатную консультацию" />
        </Container>
      </Wrapper>
    </Box>
  );
};

export default Promo;
