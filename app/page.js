'use client';

import { useState } from 'react';
import Header from './components/Header';
import './globals.css'; // Подключаем стили
import Disclaimer from './components/Disclaimer';
import { ConnectKitButton } from 'connectkit';
import { useAccount } from 'wagmi';

export default function Home() {
    const [showPopup, setShowPopup] = useState(true);
    const [isWhitelisted, setIsWhitelisted] = useState(false);
    const [buttonStates, setButtonStates] = useState({
        twitter: false,
        telegramChat: false,
        telegramChannel: false,
    });

    const { address, isConnected } = useAccount();
    const areAllCompleted = Object.values(buttonStates).every((state) => state);

    const closePopup = () => {
        setShowPopup(false);
    };

    const handleButtonClick = (buttonKey) => {
        setButtonStates((prev) => ({ ...prev, [buttonKey]: 'loading' }));
        setTimeout(() => {
            setButtonStates((prev) => ({ ...prev, [buttonKey]: true }));
        }, 5000);
    };

    const handleWhitelist = () => {
        setIsWhitelisted(true); // Устанавливаем состояние "whitelisted"
    };

    return (
        <div className="container">
            {showPopup && <Disclaimer onAccept={closePopup} />}
            <Header />
            <main className="main">
                {!isWhitelisted ? (
                    <div className="left-column">
                        <h1 className="title">White List</h1>
                        {!isConnected ? (
                            <>
                                <p className="text">
                                    Haust.Network is launching a groundbreaking NFT campaign where every stage is a step
                                    toward creating and evolving your unique digital asset. Joining the whitelist grants
                                    you exclusive access to the first phase, allowing you to start your journey ahead of
                                    the crowd.
                                </p>
                                <ConnectKitButton.Custom>
                                    {({ isConnected, show }) => (
                                        <button
                                            className="get-started-button"
                                            onClick={show}
                                        >
                                            {isConnected ? 'Wallet Connected' : 'GET STARTED'}
                                        </button>
                                    )}
                                </ConnectKitButton.Custom>
                            </>
                        ) : (
                            <div className="action-buttons">
                                <p className="text-2">Joining whitelist is simple! Complete these steps:</p>
                                <a
                                    href="https://x.com/HaustNetwork"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="action-link"
                                >
                                    <button
                                        className={`action-button ${buttonStates.twitter ? 'completed' : ''}`}
                                        onClick={() => handleButtonClick('twitter')}
                                        disabled={buttonStates.twitter === true}
                                    >
                                        FOLLOW TWITTER (X)
                                        <span className="button-icon">
                                            {buttonStates.twitter === 'loading'
                                                ? '...'
                                                : buttonStates.twitter ? (
                                                    <img
                                                        src="/done.svg"
                                                        alt="Done Icon"
                                                        className="icon"
                                                        width={24}
                                                        height={24}
                                                    />
                                                ) : (
                                                    <img
                                                        src="/arrow-r.svg"
                                                        alt="Arrow Icon"
                                                        className="icon"
                                                        width={24}
                                                        height={24}
                                                    />
                                                )}
                                        </span>
                                    </button>
                                </a>
                                <a
                                    href="https://t.me/haustnetwork_chat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="action-link"
                                >
                                    <button
                                        className={`action-button ${buttonStates.telegramChat ? 'completed' : ''}`}
                                        onClick={() => handleButtonClick('telegramChat')}
                                        disabled={buttonStates.telegramChat === true}
                                    >
                                        JOIN TELEGRAM CHAT
                                        <span className="button-icon">
                                            {buttonStates.telegramChat === 'loading'
                                                ? '...'
                                                : buttonStates.telegramChat ? (
                                                    <img
                                                        src="/done.svg"
                                                        alt="Done Icon"
                                                        className="icon"
                                                        width={24}
                                                        height={24}
                                                    />
                                                ) : (
                                                    <img
                                                        src="/arrow-r.svg"
                                                        alt="Arrow Icon"
                                                        className="icon"
                                                        width={24}
                                                        height={24}
                                                    />
                                                )}
                                        </span>
                                    </button>
                                </a>
                                <a
                                    href="https://t.me/haustnetwork"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="action-link"
                                >
                                    <button
                                        className={`action-button ${buttonStates.telegramChannel ? 'completed' : ''}`}
                                        onClick={() => handleButtonClick('telegramChannel')}
                                        disabled={buttonStates.telegramChannel === true}
                                    >
                                        FOLLOW TELEGRAM CHANNEL
                                        <span className="button-icon">
                                            {buttonStates.telegramChannel === 'loading'
                                                ? '...'
                                                : buttonStates.telegramChannel ? (
                                                    <img
                                                        src="/done.svg"
                                                        alt="Done Icon"
                                                        className="icon"
                                                        width={24}
                                                        height={24}
                                                    />
                                                ) : (
                                                    <img
                                                        src="/arrow-r.svg"
                                                        alt="Arrow Icon"
                                                        className="icon"
                                                        width={24}
                                                        height={24}
                                                    />
                                                )}
                                        </span>
                                    </button>
                                </a>
                                <button
                                    className={`get-started-button ${areAllCompleted ? '' : 'disabled'}`}
                                    disabled={!areAllCompleted}
                                    onClick={areAllCompleted ? handleWhitelist : null}
                                >
                                    {areAllCompleted ? 'GET WHITELISTED' : 'GET WHITELISTED'}
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="whitelisted-content">
                        <img
                            src="/done.svg"
                            alt="Done Icon"
                            className="icon"
                            width={48}
                            height={48}
                        />
                        <h1 className="congratulations-title">Congratulations!</h1>
                        <p className="congratulations-title">You're Whitelisted</p>
                        <p className="congratulations-text">
                            Stay updated for next steps on{' '}
                            <a
                                href="https://x.com/HaustNetwork"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                TWITTER (X)
                            </a>
                            ,{' '}
                            <a
                                href="https://t.me/haustnetwork"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Telegram channel
                            </a>
                            , and discuss it in the{' '}
                            <a
                                href="https://t.me/haustnetwork_chat"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Telegram chat
                            </a>
                            .
                        </p>
                    </div>
                )}
                <div className="right-column">
                    <img src="/main-img.png" alt="Main Image" />
                </div>
            </main>
        </div>
    );
}