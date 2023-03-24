import PrimaryLayout from '@/components/layout/Primary'
import { ContextProvider } from '@/hooks/useContext'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import '@/styles/globals.css'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <PrimaryLayout>
          <Component {...pageProps} />
        </PrimaryLayout>
      </ContextProvider>
    </QueryClientProvider>
  )
}
