import React, { useState } from 'react';
import Carousel, { arrowsPlugin, Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import styled from 'styled-components';
import { Container, Typography } from '@mui/material';

const Base = styled(Container)`
  padding: ${props => props.theme.spacing(10)} 0;
  background: ${props => props.theme.palette.background.paper};
`;

const Button = styled.button`
  border: none;
  background: transparent;
  width: 60px;
  cursor: pointer;
`;

const Title = styled(Typography).attrs({ variant: 'h1' })`
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

const Examples = ({ examples }) => {
  const [value, setValue] = useState(0);

  const handleChange = dots => {
    setValue(dots);
  };

  return (
    <Base>
      <Title
        sx={{
          marginBottom: '48px',
        }}
      >
        Примеры наших дел
      </Title>
      <Carousel
        value={value}
        onChange={handleChange}
        plugins={[
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
        {examples.map((example, index) => (
          <Slide key={+index}>
            <Typography>{example}</Typography>
          </Slide>
        ))}
      </Carousel>
      <Dots value={value} onChange={handleChange} number={examples.length} />
    </Base>
  );
};

export default Examples;
