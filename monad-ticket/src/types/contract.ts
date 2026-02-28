import type { ethers } from "ethers";

export interface WalletState {
  address: string | null;
  chainId: number | null;
  isConnected: boolean;
  isConnecting: boolean;
  error: string | null;
}

export interface ContractConfig {
  address: string;
  abi: ethers.InterfaceAbi;
  provider: ethers.BrowserProvider | null;
  signer: ethers.JsonRpcSigner | null;
}

export type TxStatus = "idle" | "pending" | "success" | "error";

export interface TxState {
  status: TxStatus;
  hash?: string;
  error?: string;
}
