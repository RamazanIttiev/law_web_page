import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { cases } from '../../data/insuranceCases';
import { getInsuranceCase } from '../../services';

const Cases = () => {
  const { id } = useParams();
  const [currentCase, setCurrentCase] = useState({});

  useEffect(() => {
    setCurrentCase(getInsuranceCase(id, cases));
  }, [cases, id]);

  getInsuranceCase(id, cases);

  return (
    <div>
      <h3>ID: {currentCase.caseId}</h3>
    </div>
  );
};

export default Cases;
