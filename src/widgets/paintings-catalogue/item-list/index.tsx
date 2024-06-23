import { Grid, GridCol } from '@mantine/core';
import classes from './classes.module.css';
import { ItemCard } from '../item-card';

export function ItemsListWidget({ items }: any) {
  return (
    <Grid className={classes.grid}>
      {items?.[0] &&
        items.map((item) => (
          <GridCol span="content" className={classes.grid} key={item.id}>
            <ItemCard item={item} />
          </GridCol>
        ))}
    </Grid>
  );
}
