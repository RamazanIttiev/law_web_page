import React from 'react';
import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import styled from 'styled-components';
import { Container, Typography } from '@mui/material';

const Base = styled(Container)`
  padding: 124px 0;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  width: 60px;
  cursor: pointer;
`;

const Title = styled(Typography).attrs({ variant: 'h1' })`
  &.css-qtipo4-MuiTypography-root {
    margin-bottom: 48px;
  }
  width: 100%;
  text-transform: uppercase;
`;

const Slide = styled.div`
  max-width: 700px;
  text-align: center;

  p {
    line-height: 2;
  }
`;

const Examples = () => (
  <Base>
    <Title>Примеры наших дел</Title>
    <Carousel
      plugins={[
        'infinite',
        'rtl',
        {
          resolve: arrowsPlugin,
          options: {
            arrowLeft: (
              <Button>
                <ArrowBackIos />
              </Button>
            ),
            arrowRight: (
              <Button>
                <ArrowForwardIos />
              </Button>
            ),

            addArrowClickHandler: true,
          },
        },
      ]}
      animationSpeed={1000}
    >
      <Slide>
        <Typography>
          Гражданин Д. вложил денежные средства под 13,5% годовых в ООО «Капитал+», но в назначенное
          время денежные средства гражданину возвращены не были. Наш специалист подготовил исковое
          заявление и успешно представил интересы Д. в суде, в результате чего в пользу клиента
          взыскана сумма в размере
        </Typography>
      </Slide>
      <Slide>
        <Typography>
          Гражданин А. обратилась в суд с иском о взыскании убытков, компенсации морального вреда и
          взыскании судебных расходов, однако суды первой и апелляционной инстанции отказали в
          удовлетворении требований. Наш специалист помог составить кассационную жалобу и защитил
          интересы клиента в суде, благодаря чему клиент получил денежные средства в размере более 2
          000 000 рублей
        </Typography>
      </Slide>
      <Slide>
        <Typography>
          Гражданин Н. отдал в займ ООО «Домашние деньги» денежные средства, однако долг ему не
          возвратили. Наш специалист подготовил исковое заявление и успешно представил интересы Н. в
          суде, в результате чего в пользу клиента взыскана сумма в размере 11 084 241, 8 рублей
        </Typography>
      </Slide>
    </Carousel>
  </Base>
);

export default Examples;
