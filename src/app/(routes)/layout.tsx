import type { Metadata, Viewport } from 'next';

import { MantineProvider, Stack, Container } from '@mantine/core';

import { ModalsProvider } from '@mantine/modals';

import '@mantine/carousel/styles.css';
import '@mantine/core/styles.layer.css';
import '@mantine/core/styles/global.css';

import '@/shared/style/globals.css';
import { theme } from '@/shared/style/theme';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

export const metadata: Metadata = {
  title: 'SAGAART GALLERY',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <MantineProvider theme={theme}>
          <ModalsProvider>
            <Container miw={1024} maw={1440} mih="100dvh" mx="auto" p={0}>
              <Stack gap={0} mih="100dvh" pos="relative">
                <Header />
                <Stack
                  component="main"
                  px={{ base: 64, xxl: 88 }}
                  gap={0}
                  pos="relative"
                >
                  {children}
                </Stack>
                <Footer />
              </Stack>
            </Container>
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
