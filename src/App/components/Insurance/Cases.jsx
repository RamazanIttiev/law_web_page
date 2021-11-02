import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { cases } from '../../data/insuranceCases';
import { getInsuranceCase } from '../../services';
import Case from './Case/Case';

const Cases = () => {
  const { id } = useParams();
  const [currentCase, setCurrentCase] = useState(null);

  useEffect(() => {
    setCurrentCase(getInsuranceCase(id, cases));
  }, [cases, id]);

  return <Case currentCase={currentCase} />;
};

export default Cases;
