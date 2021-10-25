import { URL } from '../utils';

export const postData = async ({ name, phone, message }, setIsLoading) => {
  setIsLoading(true);
  await fetch(`${URL}?name=${name}&phone=${phone}&message=${message}`);
  setIsLoading(false);
};

// Дела о мошенничестве и возврат денежных средств
// Вопрсы страхования
// Жилищные споры
