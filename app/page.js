'use client';

import { useState } from 'react';
import Header from './components/Header';
import './globals.css'; // Подключаем стили
import Disclaimer from './components/Disclaimer';
import { useAccount } from 'wagmi';

export default function Home() {

    return (
        <div className="container">
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