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
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
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
                        transition={{ duration: 1.4 }}
                    >
                        <Image
                            src={images[currentImageIndex]}
                            alt="Construction project"
                            fill
                            priority
                            sizes="100vw"
                            className={styles.backgroundImage}
                        />
                    </motion.div>
                </AnimatePresence>
                <div className={styles.overlay} />
            </div>

            <div className={styles.content}>
                <div className={styles.rating}>
                    ★★★★★ <span>Based on 100+ Reviews</span>
                </div>

                <h1 className={styles.title}>
                    We Provide Effective<br />
                    Construction Solutions
                </h1>

                <p className={styles.description}>
                    Our team is dedicated to delivering top-tier residential extensions,
                    loft conversions and full home refurbishments. Quality craftsmanship
                    and client satisfaction for every project.
                </p>

                <div className={styles.buttons}>
                    <Link href="/contact" className={styles.primaryBtn}>
                        Get Your Estimate
                    </Link>
                    <Link href="/services" className={styles.secondaryBtn}>
                        View Services →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;