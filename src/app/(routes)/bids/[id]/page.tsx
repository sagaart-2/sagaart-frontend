import { BidResultPage } from '@/views/bid-result-page';

export default async function BidResultRoute({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  return <BidResultPage id={id} />;
}
