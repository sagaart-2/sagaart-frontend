import Link from 'next/link';
import NextImage from 'next/image';
import { SearchBarWidget } from '@/widgets/search-bar';
import {
  Stack,
  Group,
  Box,
  Title,
  Text,
  Image,
  ActionIcon,
} from '@mantine/core';
import { PrimaryButton } from '@/shared/ui';
import { VkIcon, TelegramIcon } from '@/shared/ui/icons';
import classes from './classes.module.css';

export function HomePage() {
  const socialLinks = [
    {
      icon: TelegramIcon,
      url: '#',
    },
    {
      icon: VkIcon,
      url: '#',
    },
  ];

  return (
    <Stack
      gap={0}
      mr={{ base: -64, xxl: -88 }}
      ml={{ base: -64, xxl: -88 }}
      className={classes.promo}
    >
      <Stack
        gap={108}
        px={{ base: 64, xxl: 88 }}
        pt={28}
        pb={32}
        h="100%"
        className={classes.promoWrapper}
      >
        <Image
          component={NextImage}
          src="/promo.png"
          alt="галерея"
          sizes="100vw"
          fill
          priority
          className={classes.promoImage}
        />
        <PrimaryButton w={300} style={{ alignSelf: 'flex-end' }}>
          Зарегистрироваться
        </PrimaryButton>

        <Stack justify="space-between" h="100%">
          <Stack gap={48}>
            <Title
              order={1}
              fz={60}
              lh={1.1}
              c="var(--mantine-color-white)"
              ff="Benzin, Helvetica, Arial, sans-serif"
            >
              Выбрать современную картину
            </Title>
            <SearchBarWidget />
          </Stack>

          <Group justify="space-between">
            <Text fw={700} c="var(--mantine-color-white)">
              Оптимальный способ оценки стоимости произведения искусства
            </Text>
            <Group
              component="ul"
              gap={20}
              justify="flex-end"
              wrap="nowrap"
              style={{ listStyle: 'none', padding: 0 }}
            >
              {socialLinks.map(({ icon: Icon, url }) => (
                <Box component="li" key={Icon.toString()}>
                  <ActionIcon
                    component={Link}
                    href={url}
                    variant="filled"
                    color="tintBlack"
                    w={40}
                    h={40}
                    radius={0}
                  >
                    <Icon color="var(--mantine-color-white)" />
                  </ActionIcon>
                </Box>
              ))}
            </Group>
          </Group>
        </Stack>
      </Stack>
    </Stack>
  );
}
