'use server';

import { IhandleErrorReturn, handleError } from '@/shared/errors';
import { IBidResponse } from '@/shared/types';
import { postBidApi } from '../api';

interface IpostBidActionReturn {
  data: IBidResponse | null;
  error: IhandleErrorReturn | null;
}

export const postBidAction = async (
  request: FormData
): Promise<IpostBidActionReturn> => {
  const response = await postBidApi(request);

  const error = response.status !== 201 ? handleError(response) : null;

  const { data } = response;
  return { data, error };
};
