'use client';

import { Carousel } from '@mantine/carousel';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Slide } from './slide';
import { paintingsList } from './lib/mock-paintings-list';
import classes from './classes.module.css';

export function CarouselWidget({ items = paintingsList }: any) {
  return (
    <Carousel
      loop
      slideSize="25%"
      slideGap={20}
      align="start"
      slidesToScroll={3}
      controlsOffset={0}
      controlSize={40}
      nextControlIcon={<IconChevronRight size={50} />}
      previousControlIcon={<IconChevronLeft size={50} />}
      classNames={{
        root: classes.rootCarousel,
      }}
      styles={{
        controls: {
          top: -80,
          right: -14,
          insetInlineStart: 'auto',
          opacity: 0.5,
        },
        control: { boxShadow: 'none', border: 'none' },
      }}
    >
      {items.map((item: any) => (
        <Carousel.Slide key={item.title}>
          <Slide {...item} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
