'use server';

import { IhandleErrorReturn, handleError } from '@/shared/errors';
import { IProductCard } from '@/shared/types';
import { getProductCardByIdApi } from '../api';

interface IgetProductCardByIdActionReturn {
  data: IProductCard | null;
  error: IhandleErrorReturn | null;
}

export const getProductCardByIdAction = async (
  id: string
): Promise<IgetProductCardByIdActionReturn> => {
  const response = await getProductCardByIdApi(id);

  const error = response.status !== 200 ? handleError(response) : null;

  const { data } = response;
  return { data, error };
};
