import Link from 'next/link';
import { PasswordInput, Stack, Text, TextInput } from '@mantine/core';
import { PrimaryButton } from '@/shared/ui';
import type { UseFormReturnType } from '@mantine/form';
import type { ICreateGalleryForm } from '@/shared/types';

interface IGallerySignUpFormUi {
  form: UseFormReturnType<ICreateGalleryForm>;
  handleSubmit: () => void;
}

export function GallerySignUpFormUi({
  form,
  handleSubmit,
}: IGallerySignUpFormUi) {
  return (
    <Stack gap={24} w={408} align="center" mx="auto">
      <Stack component="form" gap={24} w="100%" onSubmit={handleSubmit}>
        <TextInput
          required
          size="md"
          label="Название"
          placeholder="Введите название"
          name="name"
          {...form.getInputProps('name')}
        />

        <TextInput
          size="md"
          label="Адрес"
          placeholder="Город, улица, дом (строение)"
          name="address"
          {...form.getInputProps('address')}
        />

        <TextInput
          required
          size="md"
          label="Email"
          placeholder="name@yandex.ru"
          name="email"
          {...form.getInputProps('email')}
        />

        <TextInput
          required
          size="md"
          label="Телефон"
          placeholder="+7 900 000-00-00"
          name="tel"
          {...form.getInputProps('tel')}
        />

        <PasswordInput
          required
          size="md"
          label="Пароль"
          placeholder="Придумайте пароль"
          name="password"
          {...form.getInputProps('password')}
        />

        <PasswordInput
          required
          size="md"
          label="Повторный пароль"
          placeholder="Повторите пароль"
          name="confirmPassword"
          {...form.getInputProps('confirmPassword')}
        />

        <Text fz={16} lh={1}>
          Регистрируясь, вы соглашаетесь с&nbsp;
          <Text
            component={Link}
            href="/auth/agreement"
            fz={16}
            lh={1}
            fw={600}
            c="tintGrey03"
          >
            Политикой конфиденциальности
          </Text>
        </Text>

        <PrimaryButton type="submit" mt={8}>
          Зарегистрироваться
        </PrimaryButton>
      </Stack>

      <Text fz={16} lh={1} ta="left" w={408}>
        Уже есть аккаунт?&ensp;
        <Text
          component={Link}
          href={{
            pathname: '/auth',
            query: { view: 'signin' },
          }}
          td="none"
          fz={16}
          lh={1}
          fw={600}
          c="tintGrey03"
        >
          Войти
        </Text>
      </Text>
    </Stack>
  );
}
