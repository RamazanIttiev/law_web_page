import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import React from 'react';
import Problems from '../components/Insurance/InsuranceCase/Problems';
import Promo from '../components/Insurance/InsuranceCase/Promo';
import Steps from '../components/Insurance/InsuranceCase/Steps';

const Case = ({ currentCase }) => {
  const theme = useTheme();

  return currentCase ? (
    <Box sx={{ background: theme.palette.background.paper }}>
      <Promo title={currentCase.title} about={currentCase.about} />
      <Problems subtitle={currentCase.subtitle} problems={currentCase.problems} />
      <Steps insuranceSteps={currentCase.insuranceSteps} />
    </Box>
  ) : null;
};

export default Case;