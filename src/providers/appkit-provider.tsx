/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { wagmiAdapter, projectId } from '@/lib/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react'
import { networks } from '@/lib/networks'
import React, { type ReactNode } from 'react'
import { cookieToInitialState, WagmiProvider } from 'wagmi'

const queryClient = new QueryClient()

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: 'AppKit Example',
  description: 'AppKit Example',
  url: 'http://localhost:3000',
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// Create the appkit instance
const appkit = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks,
  defaultNetwork: networks[0],
  metadata,
  features: { analytics: true }
})

export function AppKitProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig, cookies)
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
} 