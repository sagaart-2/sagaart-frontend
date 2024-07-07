'use server';

import { IhandleErrorReturn, handleError } from '@/shared/errors';
import { IBidResponse } from '@/shared/types';
import { getBidByIdApi } from '../api';

interface IgetBidByIdActionReturn {
  data: IBidResponse | null;
  error: IhandleErrorReturn | null;
}

export const getBidByIdAction = async (
  id: string
): Promise<IgetBidByIdActionReturn> => {
  const response = await getBidByIdApi(id);

  const error = response.status !== 200 ? handleError(response) : null;

  const { data } = response;
  return { data, error };
};
