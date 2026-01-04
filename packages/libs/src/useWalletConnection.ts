import { useAccount, useConnect, useDisconnect } from "wagmi";

export function useWalletConnection() {
  const { address, isConnected, status } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  return {
    address,
    isConnected,
    status,
    connect: () => connect({ connector: connectors[0] }),
    disconnect,
  };
}
