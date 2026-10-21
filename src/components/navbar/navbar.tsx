'use client';

import { useState, useEffect } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './final_logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                // Scrolling down → hide navbar
                setIsVisible(false);
            } else {
                // Scrolling up → show navbar
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Image src={Logo} alt="L Xhurxhi Construction" width={42} height={42} priority />
                    <span>L XHURXHI</span>
                </Link>

                <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={styles.navLink}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <Link href="/contact" className={styles.quoteBtn}>
                    Get a Quote →
                </Link>

                <button
                    className={styles.hamburger}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Navbar;