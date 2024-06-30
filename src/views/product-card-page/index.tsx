import NextImage from 'next/image';
import { IProductCard } from '@/shared/types';
import { Box, Group, Stack, Image, Title, Text, Badge } from '@mantine/core';
import { CarouselWidget } from '@/widgets/carousel';
import { OutlineButton, PrimaryButton, SelectInput } from '@/shared/ui';
import { getYear, capitalizeWord } from '@/shared/utils';
import { productCardsList } from './lib/mock-product-cards-list';
import classes from './classes.module.css';

interface IProps {
  item: IProductCard;
}

export function ProductCardPage({ item = productCardsList[0] }: IProps) {
  const artworkInfo = `${item?.category.name}${' | '}
    ${capitalizeWord(item?.style.name)}${' | '}
    ${item?.genre.name}`;
  const artworkParameters = `${capitalizeWord(item?.material_tablet)}, ${item?.material_work.toLowerCase()}${' | '}${item?.width}\u00a0x\u00a0${item?.height}\u00a0см`;

  return (
    <Stack gap={48} py={88}>
      <Stack gap={88}>
        <Group gap={28} justify="stretch" align="stretch" wrap="nowrap" grow>
          <Box className={classes.cardImageWrapper}>
            <Image
              component={NextImage}
              src={item?.foto}
              alt={item?.title}
              width={622}
              height={380}
              priority
              className={classes.cardImage}
            />
          </Box>
          <Stack gap={32}>
            <Stack gap={16}>
              <Text fz={20} lh={1.15} ff="Benzin, Helvetica, Arial, sans-serif">
                {item.artist.name} {item.artist.lastname}
              </Text>
              <Title order={1} fz={24} lh={1.15} c="tintGrey03">
                {item?.title}
                {', '} {item?.year_create}
              </Title>
              <Stack gap={4}>
                <Text fz={16} c="tintGrey03">
                  {artworkInfo}
                </Text>
                <Text fz={16} c="tintGrey03">
                  {artworkParameters}
                </Text>
              </Stack>
              <Group gap={16} align="flex-start" wrap="nowrap">
                {item.unique && (
                  <Badge
                    variant="outline"
                    color="var(--mantine-color-black)"
                    radius={0}
                    size="xl"
                    pb={4}
                    fw={500}
                    style={{ textTransform: 'none' }}
                  >
                    Уникальная работа
                  </Badge>
                )}
                {item.investment_attractiveness && (
                  <Badge
                    variant="outline"
                    color="var(--mantine-color-black)"
                    radius={0}
                    size="xl"
                    pb={4}
                    fw={500}
                    style={{ textTransform: 'none' }}
                  >
                    Инвестиции в искусство
                  </Badge>
                )}
              </Group>
              <Text
                fz={20}
                fw={500}
                lh={1}
                ff="Benzin, Helvetica, Arial, sans-serif"
                py={4}
              >
                {item.price}
                {'  '}&#8381;
              </Text>
              <PrimaryButton>Купить</PrimaryButton>
              <SelectInput
                inputSize="lg"
                data={[
                  { label: 'Доставка по России', value: 'inside_country' },
                  { label: 'Вывоз за границу', value: 'outside_country' },
                ]}
                placeholder="Доставка и налоги"
              />
            </Stack>
          </Stack>
        </Group>

        <Stack gap={32} maw={796}>
          <Title order={2} ff="Benzin, Helvetica, Arial, sans-serif">
            О работе
          </Title>
          <Text>{item.description}</Text>
        </Stack>

        <Stack gap={32}>
          <Title order={2} ff="Benzin, Helvetica, Arial, sans-serif">
            Анализ стоимости
          </Title>
          <Text fz={16} c="tintGrey03">
            Стоимостные показатели отражены в конверсионных российских рублях.
          </Text>
          <Group gap={20} align="flex-start" wrap="nowrap">
            <Stack gap={16}>
              <OutlineButton>Динамика изменения цены за пять лет</OutlineButton>
              <OutlineButton>
                Зависимость цены от выставочной активности
              </OutlineButton>
              <OutlineButton>
                Зависимость цены от мест проведения выставок
              </OutlineButton>
            </Stack>
          </Group>
        </Stack>

        <Stack gap={32} maw={796}>
          <Title order={2} ff="Benzin, Helvetica, Arial, sans-serif">
            О художнике
          </Title>
          <Group gap={20} align="flex-start" wrap="nowrap">
            <Stack gap={20}>
              <Group gap={20} align="flex-start" wrap="nowrap">
                <Text fz={20} lh={1} ff="Benzin, Helvetica, Arial, sans-serif">
                  {item.artist.name} {item.artist.lastname}
                </Text>
                <Text fz={20} lh={1} c="tintGrey03">
                  {getYear(item?.artist.date_of_birth)}
                  {' | '}
                  {item?.artist.city_of_residence}
                </Text>
              </Group>
              <Text>{item.artist.bio}</Text>
              <Text fz={20} lh={1} c="tintGrey03">
                Работы этого художника находятся в 7 частных и музейных
                коллекциях
              </Text>
            </Stack>
          </Group>
        </Stack>

        <Stack gap={32} maw={796}>
          <Title order={2} ff="Benzin, Helvetica, Arial, sans-serif">
            Избранные выставки
          </Title>
          <Stack gap={20}>
            <Group gap={32} align="baseline" wrap="nowrap">
              <Text fz={20} lh={1} fw={600} w={70}>
                2017
              </Text>
              <Text fz={20} lh={1}>
                ПОЛЯРНОСТИ
              </Text>
              <Text fz={18} lh={1} c="tintGrey03">
                Миллениум{' | '} Ярославль
              </Text>
            </Group>
            <Group gap={32} align="baseline" wrap="nowrap">
              <Text fz={20} lh={1} fw={600} w={70}>
                2020
              </Text>
              <Text fz={20} lh={1}>
                ART RUSSIA FAIR
              </Text>
              <Text fz={18} lh={1} c="tintGrey03">
                Елоховская галерея{' | '} Москва
              </Text>
            </Group>
            <Group gap={32} align="baseline" wrap="nowrap">
              <Text fz={20} lh={1} fw={600} w={70}>
                2023
              </Text>
              <Text fz={20} lh={1}>
                ЭТНОС
              </Text>
              <Text fz={18} lh={1} c="tintGrey03">
                Гостиный Двор{' | '}Санкт-Петербург
              </Text>
            </Group>
            <Group gap={32} align="baseline" wrap="nowrap">
              <Text fz={20} lh={1} fw={600} w={70}>
                2024
              </Text>
              <Text fz={20} lh={1}>
                FATAL PURITY
              </Text>
              <Text fz={18} lh={1} c="tintGrey03">
                Vigo Gallery{' | '}Лондон
              </Text>
            </Group>
          </Stack>
        </Stack>

        <Stack gap={32}>
          <Title order={2} ff="Benzin, Helvetica, Arial, sans-serif">
            Другие работы художника
          </Title>

          <CarouselWidget />
        </Stack>
      </Stack>
    </Stack>
  );
}