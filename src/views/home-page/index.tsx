import Link from 'next/link';
import NextImage from 'next/image';
import { SearchBarWidget } from '@/widgets/search-bar';
import { Stack, Group, Box, Title, Image, ActionIcon } from '@mantine/core';
import { OutlineButton } from '@/shared/ui';
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
        gap={90}
        px={{ base: 64, xxl: 88 }}
        pt={46}
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
        <Link
          href={{
            pathname: '/auth',
            query: { view: 'signup' },
          }}
          style={{
            display: 'flex',
            maxWidth: '938px',
            textDecoration: 'none',
            justifyContent: 'flex-end',
          }}
        >
          <OutlineButton
            w={260}
            c="var(--mantine-color-white)"
            styles={{
              root: { outline: '1px solid var(--mantine-color-white)' },
            }}
          >
            Зарегистрироваться
          </OutlineButton>
        </Link>

        <Stack justify="space-between" h="100%">
          <Stack gap={48}>
            <Title
              order={1}
              maw={938}
              fz={60}
              lh={1.1}
              c="var(--mantine-color-white)"
              ff="Benzin, Helvetica, Arial, sans-serif"
            >
              Выбрать современную картину
            </Title>
            <SearchBarWidget />
          </Stack>

          <Group justify="flex-start" maw={938}>
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
