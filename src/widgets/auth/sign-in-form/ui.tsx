import Link from 'next/link';
import { PasswordInput, Stack, Text, TextInput } from '@mantine/core';
import type { UseFormReturnType } from '@mantine/form';
import { PrimaryButton } from '@/shared/ui';
import type { IUserCredentials } from '@/shared/types';

interface ISignInFormUi {
  form: UseFormReturnType<IUserCredentials>;
  handleSubmit: () => void;
}

export function SignInFormUi({ form, handleSubmit }: ISignInFormUi) {
  return (
    <Stack gap={24} mx="auto">
      <Stack component="form" gap={24} w={408} onSubmit={handleSubmit}>
        <TextInput
          size="md"
          label="Email"
          placeholder="Введите email"
          name="email"
          {...form.getInputProps('email')}
        />

        <PasswordInput
          size="md"
          label="Пароль"
          placeholder="Введите пароль"
          name="password"
          {...form.getInputProps('password')}
        />

        <PrimaryButton type="submit" mt={16}>
          Войти
        </PrimaryButton>
      </Stack>

      <Text fz={16} lh={1}>
        Еще нет аккаунта?&ensp;
        <Text
          component={Link}
          href={{
            pathname: '/auth',
            query: { view: 'signup' },
          }}
          td="none"
          fz={16}
          lh={1}
          fw={600}
          c="tintGrey03"
        >
          Зарегистрироваться
        </Text>
      </Text>
    </Stack>
  );
}
