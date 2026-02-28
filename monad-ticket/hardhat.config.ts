import type { HardhatUserConfig } from "hardhat/config";
import hardhatToolboxMochaEthersPlugin from "@nomicfoundation/hardhat-toolbox-mocha-ethers";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const config: HardhatUserConfig = {
  plugins: [hardhatToolboxMochaEthersPlugin],
  solidity: {
    profiles: {
      default: {
        version: "0.8.28",
      },
    },
  },
  networks: {
    monad: {
      type: "http",
      url: "https://testnet-rpc.monad.xyz",
      chainId: 10143,
      accounts: [process.env.PRIVATE_KEY!],
    },
  },
};

export default config;