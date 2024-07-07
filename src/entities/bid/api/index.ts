'use server';

import { serverApi } from '@/shared/api/server-api';
import { IBidResponse } from '@/shared/types';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export const postBidApi = async (
  requestData: FormData
): Promise<AxiosResponse<IBidResponse | null | any>> => {
  const options: AxiosRequestConfig = {
    transformRequest: (data, headers) => {
      // eslint-disable-next-line no-param-reassign
      delete headers.common;
      return data;
    },
  };
  const res = await serverApi.post(`/bids/`, requestData, options);
  return res.status === 201 ? { ...res, data: res.data } : res;
};

export const getBidByIdApi = async (
  id: string
): Promise<AxiosResponse<IBidResponse | null | any>> => {
  const res = await serverApi.get(`/bids/${id}/`);

  return res.status === 200 ? { ...res, data: res.data } : res;
};
