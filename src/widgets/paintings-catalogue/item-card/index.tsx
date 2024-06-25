import Link from 'next/link';
import NextImage from 'next/image';
import { Stack, Text, Image } from '@mantine/core';
import { FavoriteIcon, ShoppingBagIcon } from '@/shared/ui/icons';
import classes from './classes.module.css';

export function ItemCard({ item }: any) {
  return (
    <Stack gap={20} w={380} className={classes.card}>
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
      <ShoppingBagIcon />
      <FavoriteIcon />
      <Text> {item?.price}</Text>
      <Text> {item?.artist}</Text>
      <Text> {item?.name}</Text>
      <Text> {item?.description}</Text>
    </Stack>
  );
}
