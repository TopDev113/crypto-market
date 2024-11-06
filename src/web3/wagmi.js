import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { arbitrum, base, mainnet, optimism, polygon } from "wagmi/chains";
import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

// export const config = getDefaultConfig({
//   appName: "crypto-martketplace",
//   projectId: "2018de73d7af3ac62b2c10c55f88c2d4",
//   chains: [mainnet, polygon, optimism, arbitrum, base],
//   ssr: true,
// });

// 1. Get projectId from https://cloud.reown.com
const projectId = "2018de73d7af3ac62b2c10c55f88c2d4";

// 2. Create a metadata object - optional
const metadata = {
  name: "crypto-martketplace",
  description: "crypto-martketplace",
  url: "https://example.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

// 3. Set the networks
const networks = [mainnet, arbitrum];

// 4. Create Wagmi Adapter
export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
});

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});
