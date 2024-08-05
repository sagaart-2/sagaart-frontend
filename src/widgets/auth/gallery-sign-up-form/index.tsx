'use client';

import { useCallback, useState } from 'react';
import { useForm } from '@mantine/form';
import type { ICreateGallery, ICreateGalleryForm } from '@/shared/types';
import { GallerySignUpFormUi } from './ui';

export function GallerySignUpForm() {
  const [submittingValues, setSubmittingValues] =
    useState<ICreateGallery | null>(null);

  const form = useForm<ICreateGalleryForm>({
    validateInputOnBlur: true,
    initialValues: {
      name: '',
      address: '',
      email: '',
      tel: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleSubmit = useCallback(
    ({ confirmPassword, ...rest }: ICreateGalleryForm) => {
      const processedValues: ICreateGallery = { ...rest };
      return setSubmittingValues(processedValues);
    },
    []
  );

  /*
  const handleErrorWithForm = useCallback(
    (errors: FormErrors) => form.setErrors(errors),
    [form]
  );

  const handleFinish = useCallback(() => {
    setSubmittingValues(null);
  }, []);
*/
  console.log(submittingValues);

  return (
    <GallerySignUpFormUi
      form={form}
      handleSubmit={form.onSubmit(handleSubmit)}
    />
  );
}
