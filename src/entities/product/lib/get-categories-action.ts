'use server';

import { IhandleErrorReturn, handleError } from '@/shared/errors';
import { ICategory } from '@/shared/types';
import { getCategoriesApi } from '../api';

interface IgetCategoriesActionReturn {
  data: ICategory[] | null;
  error: IhandleErrorReturn | null;
}

export const getCategoriesAction =
  async (): Promise<IgetCategoriesActionReturn> => {
    const response = await getCategoriesApi();

    const error = response.status !== 200 ? handleError(response) : null;

    const { data } = response;
    return { data, error };
  };
