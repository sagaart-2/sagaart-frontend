import Link from 'next/link';
import NextImage from 'next/image';
import { Stack, Text, Image, Flex } from '@mantine/core';
import { FavoriteIcon, ShoppingBagIcon } from '@/shared/ui/icons';
import { type IProductCard } from '@/shared/types';
import { capitalizeWord, priceConversion } from '@/shared/utils';
import classes from './classes.module.css';

export function ProductCard({ ...item }: IProductCard) {
  const artworkInfo = `${item?.category.name}${' | '}
  ${capitalizeWord(item?.style.name)}${' | '}
  ${item?.genre}`;
  const artworkParameters = `${capitalizeWord(item?.material_tablet)}, ${item?.material_work.toLowerCase()}${' | '}${item?.width}\u00a0x\u00a0${item?.height}\u00a0см`;

  return (
    <Stack gap={8} className={classes.card}>
      <Link
        href={`/product_cards/${item.id.toString()}`}
        style={{ textDecorationLine: 'none' }}
      >
        <Image
          component={NextImage}
          src={item?.photo}
          alt={item?.title}
          width={301}
          height={360}
          className={classes.cardImage}
        />
      </Link>
      <Stack gap={12}>
        <Flex justify="space-between" align="center">
          <Flex gap={8} align="center" h={40}>
            <ShoppingBagIcon />
            <Text fw={700}> {priceConversion(item?.price)} &#8381;</Text>
          </Flex>
          <FavoriteIcon />
        </Flex>
        <Stack gap={8}>
          <Text fw={700}>
            {item?.artist.name} {item?.artist.lastname}
          </Text>
          <Text fw={700}> {item?.title}</Text>
          <Stack gap={4} pt={4}>
            <Text fz={16} c="tintGrey03">
              {artworkInfo}
            </Text>
            <Text fz={16} c="tintGrey03">
              {artworkParameters}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
