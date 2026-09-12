'use client';

import { useState } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './seal.webp';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Experience', href: '/experience' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className={styles.container}>
            <Link href="/" className={styles.icon}>
                <Image src={Logo} alt="L Xhurxhi Construction Logo" width={50} height={50} priority />
            </Link>

            <nav className={`${styles.Links} ${isOpen ? styles.open : ''}`}>
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                        {link.name}
                    </Link>
                ))}
                <Link href="/contact" className={styles.quoteBtn} onClick={() => setIsOpen(false)}>
                    Request a Quote
                </Link>
            </nav>

            <button
                className={styles.hamburger}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>
        </header>
    );
};

export default Navbar;