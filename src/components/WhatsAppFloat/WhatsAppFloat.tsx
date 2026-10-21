import React from 'react';
import styles from './WhatsAppFloat.module.css';
import whatsapp from './whatsapp-white-removebg.png';
import Link from 'next/link';
import Image from 'next/image';

function WhatsAppFloat({ phone, message = 'Hello! I’d like more information.' }) {
    const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (
        <Link
            href={link}
            className={styles.WhatsAppFloat}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
        >
            <Image src={whatsapp} alt="WhatsApp chat" />
        </Link>
    );
}

export default WhatsAppFloat;
