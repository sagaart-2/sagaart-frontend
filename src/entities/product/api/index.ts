'use server';

import { serverApi } from '@/shared/api/server-api';
import { ICategory } from '@/shared/types';
import type { AxiosResponse } from 'axios';

export const getCategoriesApi = async (): Promise<
  AxiosResponse<ICategory[] | null | any>
> => {
  const res = await serverApi.get(`/categories/`);
  console.log(res.status);
  console.log(res.data);
  return res.status === 200 ? { ...res, data: res.data } : res;
};
