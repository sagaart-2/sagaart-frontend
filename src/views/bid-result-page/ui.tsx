import { IBidResponse } from '@/shared/types';
import NextImage from 'next/image';
import { Group, Stack, Image, Title, Text } from '@mantine/core';
import { PicturePlaceholder } from '@/shared/ui';
import { capitalizeWord, priceConversion } from '@/shared/utils';
import classes from './classes.module.css';

export function BidResultUi({ ...item }: IBidResponse) {
  const artworkParameters = `${capitalizeWord(item.material_tablet)}, ${item.material_work.toLowerCase()}${' | '}${item.width}\u00a0x\u00a0${item.height}\u00a0см`;

  return (
    <Group
      gap={28}
      justify="stretch"
      align="flex-start"
      w="100%"
      mih={640}
      wrap="nowrap"
    >
      <Stack
        w={520}
        h={520}
        justify="center"
        align="center"
        style={{ flexShrink: 0 }}
      >
        {item.photo ? (
          <Image
            component={NextImage}
            src={item.photo}
            alt={item.title}
            width={520}
            height={520}
            priority
            className={classes.picture}
          />
        ) : (
          <PicturePlaceholder />
        )}
      </Stack>

      <Stack gap={24}>
        <Text fz={20} lh={1.15} ff="Benzin, Helvetica, Arial, sans-serif">
          {item.artist_name} {item.artist_lastname}
        </Text>

        <Title order={1} fz={24} lh={1.15} c="tintGrey03">
          {item.title}
          {', '} {item.year_create}
        </Title>

        <Stack gap={4}>
          <Text fz={16} c="tintGrey03">
            {item.category}
          </Text>

          <Text fz={16} c="tintGrey03">
            {artworkParameters}
          </Text>
        </Stack>

        <Text
          fz={20}
          fw={500}
          lh={1}
          ff="Benzin, Helvetica, Arial, sans-serif"
          py={4}
        >
          {priceConversion(item.price)}
          {'  '}&#8381;
        </Text>
        <Text fz={16} lh="20px" c="tintGrey03" pt={20}>
          заявка №{item.id}
        </Text>
      </Stack>
    </Group>
  );
}
