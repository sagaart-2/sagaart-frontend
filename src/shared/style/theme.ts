'use client';

import {
  type MantineBreakpointsValues,
  createTheme,
  colorsTuple,
  MantineColorsTuple,
  Button,
  Select,
} from '@mantine/core';

import { buttonResolver, selectResolver } from './variable-resolvers';

const breakpoints: MantineBreakpointsValues = {
  // 374px
  xs: '23.4375em',
  // 480px
  sm: '30em',
  // 640px
  md: '40em',
  // 768px
  lg: '48em',
  // 1024px
  xl: '64em',
  // 1280px
  xxl: '80em',
  // 1440px
  xxxl: '90em',
};

const rangeWhite: MantineColorsTuple = [
  '#F9FAFB',
  '#F9FAFB',
  '#F9FAFB',
  '#F9FAFB',
  '#F9FAFB',
  '#F9FAFB',
  '#F9FAFB',
  '#F9FAFB',
  '#F9FAFB',
  '#F9FAFB',
];

const rangeBlack: MantineColorsTuple = [
  '#1A1B22',
  '#1A1B22',
  '#1A1B22',
  '#1A1B22',
  '#1A1B22',
  '#1A1B22',
  '#1A1B22',
  '#1A1B22',
  '#1A1B22',
  '#1A1B22',
];

const rangeGrey: MantineColorsTuple = [
  '#d2d1d0',
  '#d2d1d0',
  '#F9FAFB',
  '#707070',
  '#CAC6BA',
  '#797981',
  '#CAC6BA',
  '#CAC6BA',
  '#CAC6BA',
  '#CAC6BA',
];

export const theme = createTheme({
  headings: {
    fontWeight: '400',
    sizes: {
      h1: {
        fontSize: '60px',
        lineHeight: '90px',
      },
      h2: {
        fontSize: '48px',
        lineHeight: '44px',
      },
      h3: {
        fontSize: '34px',
        lineHeight: '40px',
      },
      h4: {
        fontSize: '24px',
        lineHeight: '40px',
      },
    },
  },
  primaryColor: 'rangeBlack',
  primaryShade: 5,
  colors: {
    tintBlack: colorsTuple('#1A1B22'),
    tintWhite: colorsTuple('#F9FAFB'),
    tintGrey01: colorsTuple('#d2d1d0'),
    tintGrey02: colorsTuple('#F9FAFB'),
    tintGrey03: colorsTuple('#707070'),
    tintGrey04: colorsTuple('#CAC6BA'),
    tintGrey05: colorsTuple('#797981'),
    tintRed: colorsTuple('#FF0200'),
    tintBlue: colorsTuple('#3266CC'),
    rangeWhite,
    rangeGrey,
    rangeBlack,
  },
  breakpoints,
  components: {
    Button: Button.extend({
      vars: buttonResolver,
    }),
    Select: Select.extend({
      vars: selectResolver,
    }),
  },
});
