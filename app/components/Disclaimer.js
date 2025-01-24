'use client';

export default function Disclaimer({ onAccept }) {
    return (
        <div style={styles.popupOverlay}>
            <div style={styles.popup}>
                <h2 style={styles.popupTitle}>Disclaimer</h2>
                <p style={styles.popupText}>
                This disclaimer (the “Disclaimer”) governs participation in the Haust Labs White List (the “White List”). By participating in the White List, you acknowledge that you have read, understood, and agree to be bound by the terms and conditions set forth herein.
                </p>
                <a href="./disclaimer.pdf" target="_blank" rel="noopener noreferrer" style={styles.popupLink}>
                    Read Full Disclaimer (PDF)
                </a>
                <button style={styles.popupButton} onClick={onAccept} >
                    Accept
                </button>
            </div>
        </div>
    );
}

// Стили для компонента Disclaimer
const styles = {
    popupOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        
        
    },
    popup: {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '10px',
        maxWidth: '500px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    popupTitle: {
        fontFamily: 'Inter',
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '15px',
    },
    popupText: {
        fontSize: '14px',
        lineHeight: '1.6',
        marginBottom: '15px',
    },
    popupLink: {
        color: '#007bff',
        textDecoration: 'underline',
        display: 'block',
        marginBottom: '20px',
    },
    popupButton: {
        padding: '15px 50px',
        fontSize: '16px',
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '16px',
        cursor: 'pointer',
        textTransform: 'uppercase',
        fontWeight: '600'
    },
};
