import PrimaryLayout from '@/components/layout/Primary'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import '@/styles/globals.css'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <PrimaryLayout>
        <Component {...pageProps} />
      </PrimaryLayout>
    </QueryClientProvider>
  )
}
