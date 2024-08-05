'use client';

import { useCallback, useState } from 'react';
import { useForm } from '@mantine/form';
import type { ICreateUser, ICreateUserForm } from '@/shared/types';
import { UserSignUpFormUi } from './ui';

export function SellerSignUpForm() {
  const [submittingValues, setSubmittingValues] = useState<ICreateUser | null>(
    null
  );

  const form = useForm<ICreateUserForm>({
    validateInputOnBlur: true,
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      tel: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleSubmit = useCallback(
    ({ confirmPassword, ...rest }: ICreateUserForm) => {
      const processedValues: ICreateUser = { ...rest };
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
    <UserSignUpFormUi form={form} handleSubmit={form.onSubmit(handleSubmit)} />
  );
}
