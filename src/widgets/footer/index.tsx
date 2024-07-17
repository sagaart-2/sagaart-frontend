import Link from 'next/link';
import { ActionIcon, Box, Group, Stack, Text } from '@mantine/core';
import { IconChevronUp } from '@tabler/icons-react';
import {
  VkIcon,
  ViberIcon,
  TelegramIcon,
  WhatsappIcon,
  YandexZenIcon,
} from '@/shared/ui/icons';

const socialLinks = [
  {
    icon: VkIcon,
    url: '#',
  },
  {
    icon: TelegramIcon,
    url: '#',
  },
  {
    icon: ViberIcon,
    url: '#',
  },
  {
    icon: WhatsappIcon,
    url: '#',
  },
  {
    icon: YandexZenIcon,
    url: '#',
  },
];

const navLinks = [
  [
    {
      name: 'Подписка на сервис',
      link: '/subscription',
    },
    {
      name: 'Оценить\u00a0картину',
      link: '/bids',
    },
  ],
  [
    {
      name: 'Каталог',
      link: '/product_cards',
    },
    {
      name: 'Художники',
      link: '#',
    },
    {
      name: 'Галереи',
      link: '#',
    },
    {
      name: 'Новости',
      link: '#',
    },
  ],
  [
    {
      name: 'О нас',
      link: '#',
    },
    {
      name: 'Сотрудничество',
      link: '#',
    },
    {
      name: 'Вопросы и ответы',
      link: '#',
    },
    {
      name: 'Поддержка',
      link: '#',
    },
  ],
];

export function Footer() {
  return (
    <Stack gap={0} justify="flex-end" style={{ flexGrow: 1 }}>
      <Box bg="tintBlack" px={{ base: 64, xxl: 88 }} py={32} h={320}>
        <Stack gap={0} justify="space-between" h="100%">
          <Group
            justify="space-between"
            wrap="nowrap"
            gap={80}
            pr={{ base: 0, xxl: 100 }}
          >
            <Stack gap={32} w={320} align="flex-start">
              <Text
                component={Link}
                href="/"
                fz={24}
                lh="40px"
                c="var(--mantine-color-white)"
                ff="Benzin, Helvetica, Arial, sans-serif"
              >
                SAGAART&nbsp;GALLERY
              </Text>
              <Group
                component="ul"
                gap={24}
                wrap="nowrap"
                style={{ listStyle: 'none', padding: 0 }}
              >
                {socialLinks.map(({ icon: Icon, url }) => (
                  <Box component="li" key={Icon.toString()}>
                    <ActionIcon
                      component={Link}
                      href={url}
                      variant="filled"
                      color="tintGrey03"
                      w={40}
                      h={40}
                      radius={0}
                    >
                      <Icon color="var(--mantine-color-rangeWhite-1)" />
                    </ActionIcon>
                  </Box>
                ))}
              </Group>
              <Text component={Link} href="#" c="tintWhite">
                SAGAART@yandex.ru
              </Text>
            </Stack>
            <Group
              w="100%"
              maw={{ base: 480, xl: 540, xxxl: 622 }}
              justify="space-between"
              align="start"
            >
              {navLinks.map((column, index) => (
                <Stack
                  gap={16}
                  component="ul"
                  key={`${index.toString}${column[0].name}`}
                  style={{ listStyle: 'none', padding: 0 }}
                >
                  {column.map(({ name, link }) => (
                    <Box component="li" key={name}>
                      <Text component={Link} href={link} c="tintWhite">
                        {name}
                      </Text>
                    </Box>
                  ))}
                </Stack>
              ))}
            </Group>
          </Group>
          <Group maw={884} pr={100} justify="space-between">
            <Text c="tintGrey03">&copy; 2024 SAGAART GALLERY</Text>
            <Group>
              <Text component={Link} href="#" c="tintGrey03">
                Политика конфиденциальности
              </Text>
              <Text component={Link} href="#" c="tintGrey03">
                При нарушении авторских прав
              </Text>
            </Group>
          </Group>
        </Stack>
        <ActionIcon
          size={56}
          bg="tintGrey03"
          radius={0}
          mr={{ base: 0, xxl: '1.5rem' }}
          style={{
            display: 'none',
            position: 'fixed',
            bottom: '2rem',
            right: '4rem',
          }}
        >
          <IconChevronUp color="var(--mantine-color-rangeWhite-1)" />
        </ActionIcon>
      </Box>
    </Stack>
  );
}
