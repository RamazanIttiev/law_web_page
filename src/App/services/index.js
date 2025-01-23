import { URL } from '../utils';

export const postData = ({ name, phone, message }) => {
  const request = fetch(`${URL}?name=${name}&phone=${phone}&message=${message}`);

  return request;
};

export const getInsuranceCase = (caseId, cases) => {
  if (!cases) {
    return null;
  }

  return cases.find(item => item.caseId === +caseId);
};
