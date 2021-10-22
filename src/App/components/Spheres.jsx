import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Eagle from '../../assets/Eagle.png';
import Court from '../../assets/court.png';
import Prosecutor from '../../assets/prosecutor.png';
import Taxes from '../../assets/taxes.png';
import Bank from '../../assets/bank.png';
import MVD from '../../assets/mvd.png';
import Committee from '../../assets/committee.png';
import GeneralCourt from '../../assets/general-court.png';

const Background = styled.div`
  background: ${props => props.theme.palette.background.paper};
`;

const Base = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  text-align: center;
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
  padding: 24px;
  max-width: 400px;

  svg {
    width: 64px;
    height: 64px;
    display: block;
    fill: ${props => props.theme.palette.primary.main};
    margin-bottom: 16px;
  }
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
`;

const Spheres = () => (
  <Background>
    <Base>
      <Title
        sx={{
          marginBottom: '56px',
        }}
      >
        Представляем ваши интересы в:
      </Title>
      <Item>
        <Image src={Eagle} />
        Федеральная служба по надзору в сфере защиты прав потребителей
      </Item>
      <Item>
        <Image src={Court} />
        Служба судебных приставов
      </Item>
      <Item>
        <Image src={Prosecutor} />
        Генеральная прокуратура Российской Федерации
      </Item>
      <Item>
        <Image src={Taxes} />
        Федеральная Налоговая служба
      </Item>
      <Item>
        <Image src={Bank} />
        Центральный банк Российской Федерации
      </Item>
      <Item>
        <Image src={MVD} />
        Министерство внутренних дел Российской Федерации
      </Item>
      <Item>
        <Image src={Committee} />
        Следственный комитет Российской Федерации
      </Item>
      <Item>
        <Image src={GeneralCourt} />
        Суды общей юрисдикции
      </Item>
    </Base>
  </Background>
);

export default Spheres;
