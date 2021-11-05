import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import {
  AccountBalance,
  AccountBalanceWallet,
  AttachMoney,
  Person,
  Receipt,
  Replay,
} from '@mui/icons-material';
import { useTheme } from '@emotion/react';

const Title = styled(Typography).attrs({ variant: 'h1' })`
  width: 100%;
  text-transform: uppercase;
  margin-bottom: 48px;
`;

const Situations = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: `${theme.spacing(10)} 0`,
        background: theme.palette.background.paper,
      }}
    >
      <Container maxWidth="lg">
        <Title>Мы можем Вам помочь, если вы оказались в следующих ситуациях</Title>
        <Grid container spacing={6} rowSpacing={6}>
          <Grid item xs={11} sm={6} md={4}>
            <Card>
              <CardContent
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  minHeight: '180px',
                  '.MuiSvgIcon-root': {
                    width: '50px',
                    height: '50px',
                    fill: '#345a80',
                    marginRight: '8px',
                  },
                }}
              >
                <Receipt />
                <Typography>
                  Вы получили отказ в страховой выплате агенства по страхованию вкладов АСВ
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={11} sm={6} md={4}>
            <Card>
              <CardContent
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  minHeight: '180px',
                  '.MuiSvgIcon-root': {
                    width: '50px',
                    height: '50px',
                    fill: '#345a80',
                    marginRight: '8px',
                  },
                }}
              >
                <Person />
                <Typography>Вам больше не поступают проценты по Вашему вкладу</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={11} sm={6} md={4}>
            <Card>
              <CardContent
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  minHeight: '180px',
                  '.MuiSvgIcon-root': {
                    width: '50px',
                    height: '50px',
                    fill: '#345a80',
                    marginRight: '8px',
                  },
                }}
              >
                <AttachMoney />
                <Typography>Не выходит мирно расторгнуть договор с МФО</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={11} sm={6} md={4}>
            <Card>
              <CardContent
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  minHeight: '180px',
                  '.MuiSvgIcon-root': {
                    width: '50px',
                    height: '50px',
                    fill: '#345a80',
                    marginRight: '8px',
                  },
                }}
              >
                <AccountBalanceWallet />
                <Typography>Вам не дают вернуть вложенные средства из МФО</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={11} sm={6} md={4}>
            <Card>
              <CardContent
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  minHeight: '180px',
                  '.MuiSvgIcon-root': {
                    width: '50px',
                    height: '50px',
                    fill: '#345a80',
                    marginRight: '8px',
                  },
                }}
              >
                <Replay />
                <Typography>КПК не возвращают ПАИ</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={11} sm={6} md={4}>
            <Card>
              <CardContent
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  minHeight: '180px',
                  '.MuiSvgIcon-root': {
                    width: '50px',
                    height: '50px',
                    fill: '#345a80',
                    marginRight: '8px',
                  },
                }}
              >
                <AccountBalance />
                <Typography>
                  Банк или другая финансовая организация объявили о закрытии без возврата средства
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Situations;
