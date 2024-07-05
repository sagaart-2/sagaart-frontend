import { getProductCardByIdAction } from '@/entities/product';
import { ProductCardUi } from './ui';

interface IProps {
  id: string;
}

export async function ProductCardPage({ id }: IProps) {
  const { data } = await getProductCardByIdAction(id);

  return data ? <ProductCardUi {...data} /> : null;
}
