import { useWalletConnection, config } from '@my-repo/libs'
import { Button, Tag } from '@my-repo/ui'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function WalletContent() {
  const { address, isConnected, status, connect, disconnect } = useWalletConnection()

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span>Status:</span>
        <Tag variant={isConnected ? 'success' : 'info'}>{status}</Tag>
      </div>
      
      {isConnected && (
        <div className="p-2 bg-gray-100 rounded text-sm break-all">
          {address}
        </div>
      )}

      {!isConnected ? (
        <Button onClick={() => connect()}>Connect Wallet</Button>
      ) : (
        <Button variant="secondary" onClick={() => disconnect()}>Disconnect</Button>
      )}
    </div>
  )
}

export function WalletDemo() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <WalletContent />
      </QueryClientProvider>
    </WagmiProvider>
  )
}
