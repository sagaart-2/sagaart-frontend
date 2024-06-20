'use client';

import { Stack, Text } from '@mantine/core';

import classes from './classes.module.css';

export function SearchWidget() {
  return (
    <Stack
      component="form"
      justify="center"
      align="center"
      className={classes.searchBar}
    >
      <Text> панель поиска</Text>
    </Stack>
  );
}
