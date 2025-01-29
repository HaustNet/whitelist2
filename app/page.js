'use client';

import { useState } from 'react';
import Header from './components/Header';
import './globals.css'; // Подключаем стили
import Disclaimer from './components/Disclaimer';
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
                
                    <div className="left-column">
                        <h1 className="title">The whitelist is now closed. Stay tuned something exciting is coming soon!</h1>
                    </div> 
                <div className="right-column">
                    <img src="/main-img.png" alt="Main Image" />
                </div>
            </main>
        </div>
    );
}