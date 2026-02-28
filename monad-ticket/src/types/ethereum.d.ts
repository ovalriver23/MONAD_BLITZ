// Extends the global Window interface to include the injected wallet provider
interface EthereumProvider {
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on: (event: string, listener: (...args: any[]) => void) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  removeListener: (event: string, listener: (...args: any[]) => void) => void;
  isMetaMask?: boolean;
}

declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}

export {};
