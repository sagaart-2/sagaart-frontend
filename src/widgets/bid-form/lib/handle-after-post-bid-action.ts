'use server';

import { redirect } from 'next/navigation';

export async function handleAfterPostBidAction(id: number) {
  redirect(`/bids/${id}/`);
}
