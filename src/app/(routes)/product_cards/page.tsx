import { getProductCardsAction } from '@/entities/product';
import { ProductCardsPage } from '@/views/product-cards-page';

export default async function ProductCardsRoute() {
  const { data } = await getProductCardsAction();

  return <ProductCardsPage items={data} />;
}
