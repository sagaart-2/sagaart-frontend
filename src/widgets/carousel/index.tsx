'use client';

import { Carousel } from '@mantine/carousel';
import { Slide } from './slide/slide';
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
      controlsOffset="sm"
      controlSize={44}
      classNames={{
        root: classes.rootCarousel,
      }}
      styles={{
        controls: { top: -50, insetInlineStart: 'auto' },
        control: { boxShadow: 'none', border: 'none', color: '#707070' },
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
