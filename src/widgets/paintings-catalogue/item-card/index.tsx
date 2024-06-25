import Link from 'next/link';
import NextImage from 'next/image';
import { Stack, Text, Image, Flex } from '@mantine/core';
import { FavoriteIcon, ShoppingBagIcon } from '@/shared/ui/icons';
import classes from './classes.module.css';

export function ItemCard({ item }: any) {
  return (
    <Stack gap={8} className={classes.card}>
      <Link
        href={`/paintings/${item.id}`}
        style={{ textDecorationLine: 'none' }}
      >
        <Image
          component={NextImage}
          src={item?.image}
          alt={item?.name}
          width={380}
          height={360}
          className={classes.cardImage}
        />
      </Link>
      <Stack h={148} gap={12}>
        <Flex justify="space-between" p={8}>
          <Flex gap={8} align="center">
            <ShoppingBagIcon />
            <Text className={classes.title}>{item?.price}</Text>
          </Flex>
          <FavoriteIcon />
        </Flex>
        <Stack gap={8}>
          <Text className={classes.title}> {item?.artist}</Text>
          <Text className={classes.title}> {item?.name}</Text>
          <Text fz={16} c="var(--Secondary-text-03, #707070)">
            {' '}
            {item?.description}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}
