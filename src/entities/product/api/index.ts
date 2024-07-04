'use server';

import { serverApi } from '@/shared/api/server-api';
import { ICategory, IProductCard } from '@/shared/types';
import type { AxiosResponse } from 'axios';

export const getCategoriesApi = async (): Promise<
  AxiosResponse<ICategory[] | null | any>
> => {
  const res = await serverApi.get(`/categories/`);
  return res.status === 200 ? { ...res, data: res.data } : res;
};

export const getProductCardsApi = async (): Promise<
  AxiosResponse<IProductCard[] | null | any>
> => {
  const res = await serverApi.get(`/product_cards/`);

  return res.status === 200 ? { ...res, data: res.data } : res;
};

export const getProductCardByIdApi = async (
  id: string
): Promise<AxiosResponse<IProductCard | null | any>> => {
  const res = await serverApi.get(`/product_cards/${id}/`);

  return res.status === 200 ? { ...res, data: res.data } : res;
};
