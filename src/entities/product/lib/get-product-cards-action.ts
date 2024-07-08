'use server';

import { IhandleErrorReturn, handleError } from '@/shared/errors';
import { IProductCard } from '@/shared/types';
import { getProductCardsApi } from '../api';

interface IgetProductCardsActionReturn {
  data: IProductCard[] | null;
  error: IhandleErrorReturn | null;
}

export const getProductCardsAction =
  async (): Promise<IgetProductCardsActionReturn> => {
    const response = await getProductCardsApi();

    const error = response.status !== 200 ? handleError(response) : null;

    const { data } = response;
    return { data, error };
  };
