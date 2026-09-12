'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './hero.module.css';

import bg1 from './constru.jpg';
import bg2 from './img_1.png';
import bg3 from './img.png';

const images = [bg1, bg2, bg3];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.heroSection}>
            <div className={styles.imageContainer}>
                <AnimatePresence mode="sync">
                    <motion.div
                        key={currentImageIndex}
                        className={styles.imageWrapper}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                    >
                        <Image
                            src={images[currentImageIndex]}
                            alt="L Xhurxhi Construction project showcase"
                            fill
                            priority
                            sizes="100vw"
                            className={styles.backgroundImage}
                        />
                    </motion.div>
                </AnimatePresence>
                <div className={styles.overlay} />
            </div>

            <div className={styles.contentContainer}>
                <motion.div
                    className={styles.heroCard}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <span className={styles.eyebrow}>London & Surrounding Areas</span>
                    <h1 className={styles.title}>L XHURXHI CONSTRUCTION LTD</h1>

                    <p className={styles.description}>
                        Delivering top-tier residential extensions, loft conversions, and full home
                        refurbishments. Quality craftsmanship and client satisfaction are at the heart of every project.
                    </p>

                    <div className={styles.buttonGroup}>
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                            <Link href="/contact" className={styles.primaryBtn}>
                                Get a Free Quote
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                            <Link href="/experience" className={styles.secondaryBtn}>
                                View Projects
                            </Link>
                        </motion.div>
                    </div>

                    <div className={styles.dotsContainer}>
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`${styles.dot} ${index === currentImageIndex ? styles.activeDot : ''}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero