'use client';

import { WagmiProvider, createConfig, http } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

// Определяем кастомную сеть
const customChain = {
  id: 1523903251, // Chain ID
  name: "Haust Testnet",
  network: "haust-testnet",
  nativeCurrency: {
    name: "Haust Token",
    symbol: "HAUST", // Символ валюты
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc-testnet.haust.app"],
    },
    public: {
      http: ["https://rpc-testnet.haust.app"],
    },
  },
  blockExplorers: {
    default: {
      name: "Haust Explorer",
      url: "https://explorer-testnet.haust.app",
    },
  },
  iconUrl: "/token-haust.png", // Ссылка на вашу иконку
};

// Создаем конфигурацию Wagmi
const config = createConfig(
  getDefaultConfig({
    // Добавляем кастомную сеть
    chains: [customChain],
    transports: {
      [customChain.id]: http("https://rpc-testnet.haust.app"),
    },
    walletConnectProjectId: "65dca745b1f823813834e36ec8e130fa", // Ваш WalletConnect Project ID
    appName: "Whitelist Haust Testnet",
    appDescription: "Whitelist Haust Testnet",
    appUrl: "https://whitelist.haust.app",
    appIcon: "/chain-logo-200.png", // Иконка приложения
  })
);

const queryClient = new QueryClient();

// Экспортируем провайдер
export const Web3Provider = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};