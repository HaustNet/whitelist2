'use client';

import { useChainId } from "wagmi";

const HAUST_NETWORK_ID = 1523903251; // Chain ID вашей сети

export default function NetworkChecker() {
  const chainId = useChainId(); // Получаем текущий Chain ID

  const switchToHaustNetwork = async () => {
    try {
      // Запрос на переключение сети
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${HAUST_NETWORK_ID.toString(16)}` }], // Chain ID в формате Hex
      });
    } catch (error) {
      // Если сеть не добавлена в MetaMask
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: `0x${HAUST_NETWORK_ID.toString(16)}`,
                chainName: "Haust Testnet",
                nativeCurrency: {
                  name: "Haust Token",
                  symbol: "HAUST",
                  decimals: 18,
                },
                rpcUrls: ["https://rpc-testnet.haust.app"],
                blockExplorerUrls: ["https://explorer-testnet.haust.app"],
              },
            ],
          });
        } catch (addError) {
          console.error("Failed to add Haust Testnet to MetaMask:", addError);
        }
      } else {
        console.error("Failed to switch network:", error);
      }
    }
  };

  return (
    <div>
      {chainId === HAUST_NETWORK_ID ? (
        <p style={{ color: "green" }}>You are connected to Haust Testnet ✅</p>
      ) : (
        <button
          onClick={switchToHaustNetwork}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4caf50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Switch to Haust Testnet
        </button>
      )}
    </div>
  );
}