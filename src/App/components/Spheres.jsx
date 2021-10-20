import { Container, Typography } from '@mui/material';
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

const Base = styled(Container)`
  &.css-1oqqzyl-MuiContainer-root {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 56px 0;
  }
`;

const Title = styled(Typography).attrs({ variant: 'h1' })`
  &.css-dz9mf5-MuiTypography-root {
    margin-bottom: 56px;
  }
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
    width: 100px;
    height: 100px;
    display: block;
    fill: ${props => props.theme.palette.primary.main};
    margin-bottom: 16px;
  }
`;

const Image = styled.img`
  width: 130px;
  margin-bottom: 16px;
`;

const Spheres = () => (
  <Background>
    <Base maxWidth="lg">
      <Title>Представляем ваши интересы в:</Title>
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
