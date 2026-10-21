import React from 'react';
import styles from './WhatsAppFloat.module.css';
import whatsapp from './whatsapp-white-removebg.png';
import Link from 'next/link';
import Image from 'next/image';

interface WhatsAppFloatProps {
    phone: string;
    message?: string;
}

function WhatsAppFloat({ phone, message = 'Hello! I’d like more information.' }: WhatsAppFloatProps) {
    const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (
        <Link
            href={link}
            className={styles.WhatsAppFloat}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
        >
            <Image
                src={whatsapp}
                alt="WhatsApp chat"
                width={32}
                height={32}
            />
        </Link>
    );
}

export default WhatsAppFloat;