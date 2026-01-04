import { useWalletConnection, config } from '@ashy1949/repo-libs'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function WalletContent() {
  const { isConnected, address, connect, disconnect } = useWalletConnection()

  return (
    <div className="p-6 border rounded bg-white text-center">
      <h3 className="font-bold mb-4 text-xl">Wallet Integration</h3>
      
      {isConnected ? (
        <div className="space-y-4">
          <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full inline-flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Connected
          </div>
          <p className="font-mono text-sm bg-gray-100 p-2 rounded break-all">
            {address}
          </p>
          <button 
            onClick={() => disconnect()}
            className="px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-gray-500 mb-4">Click to connect wallet (default connector):</p>
          <button
            onClick={() => connect()}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm font-medium"
          >
            Connect Wallet
          </button>
        </div>
      )}
    </div>
  )
}

export function LibsUsage() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <WalletContent />
      </QueryClientProvider>
    </WagmiProvider>
  )
}
