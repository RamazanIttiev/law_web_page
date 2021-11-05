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

  .MuiCardHeader-title {
    color: ${props => props.theme.palette.primary.main};
    font-weight: 700;
  }
`;

const List = styled.ul`
  text-align: start;
  margin: 0;
`;

const Li = styled.li``;

const Step = ({ insuranceSteps }) => {
  const mobileScreen = useMediaQuery('(max-width:768px)');

  return (
    <Grid container spacing={4}>
      {insuranceSteps.map(({ stepId, id, title, icon, list }) => (
        <Grid key={stepId} item xs={12} sm={12} md={4}>
          <Card sx={{ minHeight: !mobileScreen && '380px' }}>
            <StyledCardHeader
              avatar={icon && <img src={icon} alt={title} />}
              title={title}
              subheader={stepId || id}
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
