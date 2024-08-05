'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Stack, Title, Radio, Group } from '@mantine/core';
import {
  CustomerSignUpForm,
  GallerySignUpForm,
  SellerSignUpForm,
  SignInForm,
} from '@/widgets/auth';
import classes from './classes.module.css';

export function AuthPageUi() {
  const params = useSearchParams();
  const view = params.get('view');
  const [role, setRole] = useState('customer');

  let selectedRoleForm;
  switch (role) {
    case 'customer':
      selectedRoleForm = <CustomerSignUpForm />;
      break;
    case 'seller':
      selectedRoleForm = <SellerSignUpForm />;
      break;
    default:
      selectedRoleForm = <GallerySignUpForm />;
  }

  return (
    <Stack gap={40} py={88} align="center">
      {view === 'signup' ? (
        <>
          <Title
            order={1}
            fz={48}
            lh={1}
            ta="center"
            ff="Benzin, Helvetica, Arial, sans-serif"
          >
            Регистрация
          </Title>
          <Radio.Group
            name="registrationOptions"
            label="Выберите вариант регистрации"
            value={role}
            onChange={setRole}
            classNames={{
              root: classes.rootRadioGroup,
              label: classes.labelRadioGroup,
            }}
          >
            <Group justify="center" gap={28}>
              <Radio
                value="customer"
                label="Покупатель"
                name="customer"
                classNames={{
                  label: classes.labelRadio,
                }}
              />
              <Radio
                value="seller"
                label="Продавец"
                name="seller"
                classNames={{
                  label: classes.labelRadio,
                }}
              />
              <Radio
                value="gallery"
                label="Галерея"
                name="gallery"
                classNames={{
                  label: classes.labelRadio,
                }}
              />
            </Group>
          </Radio.Group>
          {selectedRoleForm}
        </>
      ) : (
        <>
          <Title
            order={1}
            fz={48}
            lh={1}
            ta="center"
            ff="Benzin, Helvetica, Arial, sans-serif"
          >
            Вход
          </Title>
          <SignInForm />
        </>
      )}
    </Stack>
  );
}
