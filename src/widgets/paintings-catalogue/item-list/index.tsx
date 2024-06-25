import { Grid, GridCol } from '@mantine/core';
import classes from './classes.module.css';
import { ItemCard } from '../item-card';

export function ItemsListWidget({ items }: any) {
  return (
    <Grid className={classes.grid} gutter="sm">
      {items?.[0] &&
        items.map((item) => (
          <GridCol span="content" className={classes.gridCol} key={item.id}>
            <ItemCard item={item} />
          </GridCol>
        ))}
    </Grid>
  );
}
