'use client';

import React, { useState } from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import { type IProductCard } from '@/shared/types';
import {
  Group,
  Stack,
  Image,
  Title,
  Text,
  Badge,
  Switch,
  Container,
} from '@mantine/core';
import { CarouselWidget } from '@/widgets/carousel';
import {
  Avatar,
  OutlineButton,
  PicturePlaceholder,
  PrimaryButton,
  SelectInput,
} from '@/shared/ui';
import { getYear, capitalizeWord, priceConversion } from '@/shared/utils';
import { BarChart, DonutChart, LineChart } from '@mantine/charts';
import { country, mockData, line } from './lib/mock-data';
import Gif from '../../../public/Gif.gif';
import classes from './classes.module.css';

export function ProductCardUi({ ...item }: IProductCard) {
  const [selectedChart, setSelectedChart] = useState('BarChart');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const artworkInfo = `${item.category.name}${' | '}
    ${capitalizeWord(item.style.name)}${' | '}
    ${item.genre}`;
  const artworkParameters = `${capitalizeWord(item.material_tablet)}, ${item.material_work.toLowerCase()}${' | '}${item.width}\u00a0x\u00a0${item.height}\u00a0см`;

  const soloShowsArr = item.artist.solo_shows;
  const groupShowsArr = item.artist.group_shows;
  const allShowsArr = [...soloShowsArr, ...groupShowsArr];

  return (
    <Stack gap={88} py={88}>
      <Group gap={28} justify="stretch" align="stretch" wrap="nowrap" grow>
        <Container fluid px={0}>
          {item.photo ? (
            <Image
              component={NextImage}
              src={item.photo}
              alt={item.title}
              width={622}
              height={400}
              priority
              className={classes.cardImage}
            />
          ) : (
            <PicturePlaceholder />
          )}
        </Container>

        <Stack gap={24}>
          <Text fz={20} lh={1.15} ff="Benzin, Helvetica, Arial, sans-serif">
            {item.artist.name} {item.artist.lastname}
          </Text>

          <Title order={1} fz={24} lh={1.15} c="tintGrey03">
            {item.title}
            {', '} {item.year_create}
          </Title>

          <Stack gap={4}>
            <Text fz={16} c="tintGrey03">
              {artworkInfo}
            </Text>

            <Text fz={16} c="tintGrey03">
              {artworkParameters}
            </Text>
          </Stack>

          <Group gap={16} align="flex-start" wrap="nowrap" pt={4}>
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
            {priceConversion(item.price)}
            {'  '}&#8381;
          </Text>

          <Stack gap={20}>
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

      <Stack gap={40} maw={796}>
        <Title order={2} ff="Benzin, Helvetica, Arial, sans-serif">
          О работе
        </Title>
        <Text>{item.description}</Text>
      </Stack>
      {isSubscribed === false ? (
        <Stack gap={0}>
          <Text
            ff="Benzin, Helvetica, Arial, sans-serif"
            fz={20}
            fw={400}
            c="tintGrey03"
          >
            Рекомендуем оформить подписку
          </Text>
          <Group
            gap={32}
            justify="space-between"
            align="flex-end"
            wrap="nowrap"
          >
            <Title
              mt={20}
              mb={12}
              order={2}
              fz={30}
              lh={1}
              ff="Benzin, Helvetica, Arial, sans-serif"
            >
              Оформите подписку на анализ стоимости
            </Title>
            <Switch
              color="tintGrey01"
              checked={isSubscribed}
              onChange={(event) => setIsSubscribed(event.currentTarget.checked)}
            />
          </Group>
          <Text
            ff="Benzin, Helvetica, Arial, sans-serif"
            fz={20}
            fw={400}
            c="tintGrey03"
            lh="23px"
          >
            Уникальный алгоритм оценки арт-объектов
          </Text>
          <Link href="/subscription">
            <Image
              mt={20}
              mb={20}
              component={NextImage}
              src={Gif}
              alt="Gif"
              width={840}
              height={350}
              styles={{
                root: { flex: 'none' },
              }}
            />
          </Link>
        </Stack>
      ) : (
        <Stack gap={40}>
          <Title order={2} ff="Benzin, Helvetica, Arial, sans-serif">
            Анализ стоимости
          </Title>
          <Text fz={16} c="tintGrey03">
            Стоимостные показатели отражены в конверсионных российских рублях.
          </Text>
          <Group gap={32} align="flex-start" wrap="nowrap">
            <Stack gap={20}>
              <OutlineButton onClick={() => setSelectedChart('BarChart')}>
                Динамика изменения цены за пять лет
              </OutlineButton>
              <OutlineButton onClick={() => setSelectedChart('LineChart')}>
                Зависимость цены от выставочной активности
              </OutlineButton>
              <OutlineButton onClick={() => setSelectedChart('DonutChart')}>
                Зависимость цены от мест проведения выставок
              </OutlineButton>
            </Stack>
            {selectedChart === 'BarChart' && (
              <BarChart
                w="100%"
                h={320}
                data={mockData}
                dataKey="year"
                withTooltip={false}
                series={[{ name: 'value', color: 'tintGrey01' }]}
                tickLine="y"
              />
            )}
            {selectedChart === 'LineChart' && (
              <LineChart
                w="100%"
                h={320}
                data={line}
                dataKey="year"
                yAxisProps={{ domain: [0, 100] }}
                series={[{ name: 'price', color: 'indigo.6' }]}
              />
            )}
            {selectedChart === 'DonutChart' && (
              <DonutChart
                w="100%"
                h={300}
                withLabelsLine
                withLabels
                data={country}
                size={300}
              />
            )}
          </Group>
        </Stack>
      )}
      <Stack gap={40}>
        <Title order={2} ff="Benzin, Helvetica, Arial, sans-serif">
          О художнике
        </Title>
        <Group
          justify="flex-start"
          align="flex-start"
          pr={10}
          wrap="nowrap"
          gap={72}
        >
          <Stack gap={28} maw={796}>
            <Group gap={28} align="flex-start" wrap="nowrap">
              <Text fz={20} lh={1} ff="Benzin, Helvetica, Arial, sans-serif">
                {item.artist.name} {item.artist.lastname}
              </Text>
              <Text fz={20} lh={1} c="tintGrey03">
                {getYear(item.artist.date_of_birth)}
                {' | '}
                {item.artist.city_of_birth}
              </Text>
            </Group>
            <Text>{item.artist.bio}</Text>

            {item.artist.collected_by_major_institutions &&
              item.artist.collected_by_private_collectors && (
                <Text fz={20} lh={1} c="tintGrey03">
                  Работы этого художника находятся в частных и музейных
                  коллекциях
                </Text>
              )}
          </Stack>
          <Avatar
            name={item.artist.name}
            lastname={item.artist.lastname}
            photo={item.artist.photo}
          />
        </Group>
      </Stack>
      <Stack gap={40} maw={796}>
        <Title order={2} ff="Benzin, Helvetica, Arial, sans-serif">
          Избранные выставки
        </Title>
        <Stack component="ul" gap={20} style={{ listStyle: 'none' }} p={0}>
          {allShowsArr?.[0] &&
            allShowsArr.map((show) => (
              <Group
                component="li"
                key={show.title}
                gap={40}
                align="baseline"
                wrap="nowrap"
              >
                <Text fz={20} lh={1} fw={500} w={50} tt="uppercase">
                  {show.year}
                </Text>
                <Text fz={20} lh={1} fw={500} tt="uppercase">
                  {show.title}
                </Text>
                <Text fz={18} lh={1} c="tintGrey03">
                  {show.place}
                  {' | '}
                  {show.city}
                  {' | '}
                  {show.country}
                </Text>
              </Group>
            ))}
        </Stack>
      </Stack>
      <Stack gap={40}>
        <Title order={2} ff="Benzin, Helvetica, Arial, sans-serif">
          Другие работы художника
        </Title>
        {item.artist.works && <CarouselWidget items={item.artist.works} />}
      </Stack>
    </Stack>
  );
}
