import Link from 'next/link';
import NextImage from 'next/image';
import { Stack, Text, Image, Flex } from '@mantine/core';
import { FavoriteIcon, ShoppingBagIcon } from '@/shared/ui/icons';
import classes from './classes.module.css';

export function ItemCard({ item }: any) {
  return (
    <Stack gap={20} w={301} className={classes.card}>
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
      <Stack h={148} gap={22}>
        <Flex justify="space-between">
          <Flex gap={8} align="center">
            <ShoppingBagIcon />
            <Text fz={18} lh="20px" ff="Bahnschrift">
              {' '}
              {item?.price}
            </Text>
          </Flex>
          <FavoriteIcon />
        </Flex>
        <Stack gap={8}>
          <Text> {item?.artist}</Text>
          <Text> {item?.name}</Text>
          <Text> {item?.description}</Text>
        </Stack>
      </Stack>
    </Stack>
  );
}
