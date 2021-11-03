import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { insuranceCases } from '../../data/insuranceCases';
import InsuranceCase from '../../pages/InsuranceCase';
import { getInsuranceCase } from '../../services';

const Cases = () => {
  const { id } = useParams();
  const [currentCase, setCurrentCase] = useState(null);

  useEffect(() => {
    setCurrentCase(getInsuranceCase(id, insuranceCases));
  }, [insuranceCases, id]);

  return <InsuranceCase currentCase={currentCase} />;
};

export default Cases;
