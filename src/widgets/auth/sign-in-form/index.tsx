'use client';

import { useCallback, useState } from 'react';
import { useForm } from '@mantine/form';
import type { IUserCredentials } from '@/shared/types';
import { SignInFormUi } from './ui';

export function SignInForm() {
  const [submittingValues, setSubmittingValues] =
    useState<IUserCredentials | null>(null);

  const form = useForm<IUserCredentials>({
    initialValues: {
      email: '',
      password: '',
    },
  });

  // NOTE: Submitting form using next-auth signIn method
  const handleSubmit = useCallback(
    (values: IUserCredentials) => setSubmittingValues(values),
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
    <SignInFormUi form={form} handleSubmit={form.onSubmit(handleSubmit)} />
  );
}
