'use server';

import type { AxiosResponse } from 'axios';

export interface IhandleError extends AxiosResponse<any> {}

export interface IhandleErrorReturn {
  message: string | null;
}

export const handleError = (response: IhandleError): IhandleErrorReturn => {
  const { data } = response;

  const message = data?.detail ? data.detail : null;

  return { message };
};
