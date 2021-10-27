import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import React from 'react';
import Problems from './Problems';
import Promo from './Promo';

const Case = ({ currentCase }) => {
  const theme = useTheme();

  return currentCase ? (
    <Box sx={{ background: theme.palette.background.paper }}>
      <Promo title={currentCase.title} about={currentCase.about} />
      <Problems subtitle={currentCase.subtitle} problems={currentCase.problems} />
    </Box>
  ) : null;
};

export default Case;
