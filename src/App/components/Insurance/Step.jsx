import { Card, CardContent, CardHeader, Grid, useMediaQuery } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { steps } from '../../data/steps';

const StyledCardHeader = styled(CardHeader)`
  .MuiCardHeader-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      &:last-child {
        font-size: 42px;
      }
    }
  }

  .MuiCardHeader-avatar {
    width: 40px;
    height: 40px;
  }
`;

const List = styled.ul`
  text-align: start;
  margin: 0;
`;

const Li = styled.li``;

const Step = () => {
  const mobileScreen = useMediaQuery('(max-width:768px)');

  return (
    <Grid container spacing={4}>
      {steps.map(({ id, title, icon, list }) => (
        <Grid key={id} item xs={12} sm={12} md={4}>
          <Card sx={!mobileScreen && { minHeight: '380px' }}>
            <StyledCardHeader
              avatar={<img src={icon} alt={title} />}
              title={title}
              subheader={id}
            />
            <CardContent>
              <List>
                {list.map(item => (
                  <Li>{item}</Li>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Step;
