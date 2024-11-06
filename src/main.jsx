import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CoinContextProvider from "./context/CoinContext.jsx";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { wagmiAdapter } from "./web3/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CoinContextProvider>
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider modalSize="compact">
            <App />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </CoinContextProvider>
  </BrowserRouter>
);
