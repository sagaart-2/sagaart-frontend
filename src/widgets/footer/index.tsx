import { ActionIcon, Box, Group, Stack, Text, Title } from '@mantine/core';
import {
  IconBrandOkRu,
  IconBrandTelegram,
  IconBrandVk,
  IconBrandWhatsapp,
  IconBrandYandex,
  IconChevronUp,
} from '@tabler/icons-react';
import Link from 'next/link';

const socialLinks = [
  {
    icon: IconBrandTelegram,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    icon: IconBrandWhatsapp,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    icon: IconBrandOkRu,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    icon: IconBrandYandex,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    icon: IconBrandVk,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];

const navLinks = [
  [
    {
      name: 'Подписка на сервис',
      link: '#',
    },
    {
      name: 'Оценка картины',
      link: '#',
    },
  ],
  [
    {
      name: 'Картины',
      link: '#',
    },
    {
      name: 'Художники',
      link: '#',
    },
    {
      name: 'Выставки',
      link: '#',
    },
    {
      name: 'Галереи',
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
              <Title
                order={4}
                c="tintWhite"
                ff="Benzin, Helvetica, Arial, sans-serif"
              >
                SAGAART&nbsp;GALLERY
              </Title>
              <Group
                component="ul"
                gap={24}
                wrap="nowrap"
                style={{ listStyle: 'none' }}
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
                  style={{ listStyle: 'none' }}
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
          style={{ position: 'fixed', bottom: '2rem', right: '4rem' }}
        >
          <IconChevronUp color="var(--mantine-color-rangeWhite-1)" />
        </ActionIcon>
      </Box>
    </Stack>
  );
}
