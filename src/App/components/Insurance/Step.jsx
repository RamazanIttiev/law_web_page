import { Card, CardContent, CardHeader, Grid, useMediaQuery } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

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

const Step = ({ steps }) => {
  const mobileScreen = useMediaQuery('(max-width:768px)');

  return (
    <Grid container spacing={4}>
      {steps.map(({ id, title, icon, list }) => (
        <Grid item xs={12} sm={12} md={4}>
          <Card key={id} sx={!mobileScreen && { minHeight: '380px' }}>
            <StyledCardHeader
              avatar={icon && <img src={icon} alt={title} />}
              title={title}
              subheader={id}
            />
            <CardContent>
              <List>
                {list.map(item => (
                  <Li key={item}>{item}</Li>
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
