import {
  FavoriteIcon,
  PersonIcon,
  PhoneIcon,
  SearchIcon,
  ShoppingBagIcon,
} from '@/shared/ui/icons';
import { Box, Flex, Group, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';

const navLinks = [
  {
    name: 'Картины',
    link: 'paintings',
  },
  {
    name: 'Выставки',
    link: '#',
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
    name: 'Новые\u00a0работы',
    link: '#',
  },
  {
    name: 'Анализ\u00a0стоимости\u00a0картины',
    link: '#',
  },
  {
    name: 'Оценить\u00a0картину',
    link: '#',
  },
  {
    name: 'Купить',
    link: '#',
  },
  {
    name: 'Продать',
    link: '#',
  },
  {
    name: 'БАЗА\u00a0ЦЕН',
    link: '#',
  },
  {
    name: 'Новости',
    link: '#',
  },
  {
    name: 'О\u00a0НАС',
    link: '#',
  },
  {
    name: 'Рекомендации',
    link: '#',
  },
];

export function Header() {
  return (
    <Stack
      justify="space-between"
      bg="tintBlack"
      mih={100}
      gap={10}
      py={10}
      px={{ base: 64, xxl: 88 }}
    >
      <Group justify="space-between">
        <Group gap={20} miw={204}>
          <PhoneIcon color="var(--mantine-color-white)" />
          <Text c="var(--mantine-color-white)" lh="40px">
            {' '}
            +7 945 800 700 200
          </Text>
        </Group>
        <Title
          order={4}
          c="var(--mantine-color-white)"
          ta="center"
          ff="Benzin, Helvetica, Arial, sans-serif"
        >
          SAGAART GALLERY
        </Title>
        <Group justify="flex-end" miw={204} gap={12}>
          <SearchIcon color="var(--mantine-color-white)" mr={28} />
          <FavoriteIcon color="var(--mantine-color-white)" />
          <ShoppingBagIcon color="var(--mantine-color-white)" />
          <PersonIcon color="var(--mantine-color-white)" />
        </Group>
      </Group>
      <Flex
        component="ul"
        justify="center"
        columnGap={12}
        rowGap={4}
        direction="row"
        maw="100%"
        style={{
          listStyle: 'none',
          flexWrap: 'wrap',
        }}
      >
        {navLinks.map(({ name, link }) => (
          <Box component="li" key={name}>
            <Text component={Link} href={link} c="var(--mantine-color-white)">
              {name}
            </Text>
          </Box>
        ))}
      </Flex>
    </Stack>
  );
}
