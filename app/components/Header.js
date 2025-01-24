'use client';

import { ConnectKitButton } from "connectkit";

export default function Header() {
    return (
        <header className="header">
            <img className="logo" src="/logo.svg" alt="Haust Labs Logo" width={189} height={28} />
            <div className="wallet-container">
                <ConnectKitButton.Custom>
                    {({ isConnected, show, address }) => (
                        <button
                            className={isConnected
                                ? "wallet-add "
                                : "wallet-button"}
                            onClick={show} // Открывает окно выбора кошелька
                        >
                            {isConnected
                                ? `${address.slice(0, 6)}...${address.slice(-4)}`
                                : "Connect Wallet"}
                        </button>
                    )}
                </ConnectKitButton.Custom>
            </div>
        </header>
    );
}