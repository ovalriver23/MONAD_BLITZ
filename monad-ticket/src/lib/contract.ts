import { ethers } from "ethers";
import ABI from "../../abi.json" assert { type: "json" };
import { CONTRACT_ADDRESS, MONAD_CHAIN_ID } from "./constants";
import type { ContractConfig } from "../types/contract";

// ---------------------------------------------------------------------------
// Provider / signer helpers
// ---------------------------------------------------------------------------

export function getBrowserProvider(): ethers.BrowserProvider | null {
  if (typeof window === "undefined" || !window.ethereum) return null;
  return new ethers.BrowserProvider(window.ethereum);
}

export async function getSigner(): Promise<ethers.JsonRpcSigner | null> {
  const provider = getBrowserProvider();
  if (!provider) return null;
  try {
    return await provider.getSigner();
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Contract instance helpers
// ---------------------------------------------------------------------------

export function getReadContract(): ethers.Contract | null {
  const provider = getBrowserProvider();
  if (!provider) return null;
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
}

export async function getWriteContract(): Promise<ethers.Contract | null> {
  const signer = await getSigner();
  if (!signer) return null;
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
}

export function getContractConfig(): ContractConfig {
  const provider = getBrowserProvider();
  return {
    address: CONTRACT_ADDRESS,
    abi: ABI as ethers.InterfaceAbi,
    provider,
    signer: null,
  };
}

// ---------------------------------------------------------------------------
// Chain helpers
// ---------------------------------------------------------------------------

export async function isCorrectChain(): Promise<boolean> {
  const provider = getBrowserProvider();
  if (!provider) return false;
  const network = await provider.getNetwork();
  return Number(network.chainId) === MONAD_CHAIN_ID;
}

export async function switchToMonad(): Promise<void> {
  if (!window.ethereum) throw new Error("No wallet found");
  await window.ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: `0x${MONAD_CHAIN_ID.toString(16)}` }],
  });
}
