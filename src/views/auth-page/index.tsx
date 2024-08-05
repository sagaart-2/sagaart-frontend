import { Suspense } from 'react';
import { AuthPageUi } from './ui';

export async function AuthPage() {
  return (
    <Suspense>
      <AuthPageUi />
    </Suspense>
  );
}
