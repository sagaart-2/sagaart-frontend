import Link from 'next/link';
import NextImage from 'next/image';
import { Stack, Text, Image, Flex } from '@mantine/core';
import { FavoriteIcon, ShoppingBagIcon } from '@/shared/ui/icons';
import { PicturePlaceholder } from '@/shared/ui';
import { capitalizeWord, priceConversion } from '@/shared/utils';
import { IWorks } from '@/shared/types';
import classes from './classes.module.css';

export function Slide({ ...item }: IWorks) {
  const artworkParameters = `${capitalizeWord(item.material_tablet)}, ${item.material_work.toLowerCase()}${' | '}${item.width}\u00a0x\u00a0${item.height}\u00a0см`;

  return (
    <Stack gap={8}>
      <Link
        href={`/product_cards/${item.id}`}
        style={{ textDecorationLine: 'none' }}
      >
        {item.photo ? (
          <Image
            component={NextImage}
            src={item.photo}
            alt={item.title}
            width={301}
            height={206}
            className={classes.slideImage}
          />
        ) : (
          <PicturePlaceholder />
        )}
      </Link>
      <Stack gap={4}>
        <Flex justify="space-between" align="center">
          <Flex gap={8} align="center" h={40}>
            <ShoppingBagIcon />
            <Text fw={700}>
              {priceConversion(item.price)}
              {'  '}&#8381;
            </Text>
          </Flex>
          <FavoriteIcon />
        </Flex>
        <Stack gap={8}>
          <Text fw={700}> {item.title}</Text>
          <Text fz={16} c="tintGrey03">
            {artworkParameters}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}
