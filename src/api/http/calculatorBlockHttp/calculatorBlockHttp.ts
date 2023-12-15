import { useAppFetch } from '#imports';
import type { CalculatorBlockResponse } from './calculatorBlockHttp.types';

const BASE_PATH = '/calculator-block';

const fetchCalculatorBlock = async () => {
  const response = await useAppFetch<CalculatorBlockResponse>(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

export const calculatorBlockHttp = {
  fetchCalculatorBlock,
};
