import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Eagle from '../../assets/eagleImg.svg';
import Court from '../../assets/court.svg';
import Prosecutor from '../../assets/prosecutor.png';
import Taxes from '../../assets/taxes.png';
import Bank from '../../assets/bank.png';
import MVD from '../../assets/mvd.svg';
import Committee from '../../assets/committee.png';
import GeneralCourt from '../../assets/general-court.png';

const Background = styled.div`
  background: ${props => props.theme.palette.background.paper};
  padding: ${props => props.theme.spacing(10)} 0;
`;

const Title = styled(Typography).attrs({ variant: 'h1' })`
  width: 100%;
  text-transform: uppercase;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Image = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
`;

const Spheres = () => (
  <Background>
    <Container maxWidth="lg">
      <Title
        sx={{
          marginBottom: '56px',
        }}
      >
        Представляем Ваши интересы в:
      </Title>
      <Grid container spacing={6} rowSpacing={6}>
        <Grid item xs={12} sm={4} md={4}>
          <Item>
            <Image src={Eagle} />
            Федеральная служба по надзору в сфере защиты прав потребителей
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Item>
            <Image src={Court} />
            Служба судебных приставов
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Item>
            <Image src={Prosecutor} />
            Генеральная прокуратура Российской Федерации
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Item>
            <Image src={Taxes} />
            Федеральная Налоговая служба
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Item>
            <Image src={Bank} />
            Центральный банк Российской Федерации
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Item>
            <Image src={MVD} />
            Министерство внутренних дел Российской Федерации
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Item>
            <Image src={Committee} />
            Следственный комитет Российской Федерации
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Item>
            <Image src={GeneralCourt} />
            Суды общей юрисдикции
          </Item>
        </Grid>
      </Grid>
    </Container>
  </Background>
);

export default Spheres;
