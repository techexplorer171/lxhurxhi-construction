'use client';

import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './about.module.css';

const values = [
    {
        title: 'Top-Class Quality',
        description: 'We take pride in exceptional craftsmanship on every job, from structural extensions to fine internal finishes.',
    },
    {
        title: 'Transparent Pricing',
        description: 'Delivering premium construction standards at fair, competitive, and affordable prices with no hidden surprises.',
    },
    {
        title: 'Client Satisfaction',
        description: 'Our main priority is making sure every project meets your exact expectations, on schedule and within budget.',
    },
    {
        title: '24/7 Reliability',
        description: 'Dedicated around-the-clock service for urgent repairs, ongoing site updates, and fast client communication.',
    },
];

export default function AboutPage() {
    return (
        <main className={styles.main}>
            <Navbar/>

            <section className={styles.heroSection}>
                <div className={styles.container}>
                    <motion.span
                        className={styles.eyebrow}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        About L Xhurxhi Construction Ltd
                    </motion.span>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Building Trust & Excellence Across London
                    </motion.h1>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        A dedicated team providing top-tier residential extensions, loft conversions,
                        and full home refurbishments nationwide from our head office in Archway.
                    </motion.p>
                </div>
            </section>


            <section className={styles.storySection}>
                <div className={styles.container}>
                    <div className={styles.gridTwoCol}>
                        <div className={styles.textContent}>
                            <h2>Who We Are</h2>
                            <p>
                                We are a professional construction company with several years of hands-on experience in
                                the building and trade industry. Headquartered in Holloway Road, Archway (London N19),
                                our reach extends throughout Greater London and across the UK.
                            </p>
                            <p>
                                Whether you are looking to expand your home with a modern rear extension, convert your loft into
                                an extra bedroom, or completely modernize a residential property, our team handles every stage
                                with precision and care.
                            </p>
                            <div className={styles.detailsBox}>
                                <div>
                                    <strong>Registered Company No:</strong> 11537645
                                </div>
                                <div>
                                    <strong>Headquarters:</strong> Flat D, 624 Holloway Rd, Archway, London N19 3PA
                                </div>
                                <div>
                                    <strong>Availability:</strong> Open 24 Hours / 7 Days a Week
                                </div>
                            </div>
                        </div>

                        <div className={styles.statsCard}>
                            <h3>Why Work With Us</h3>
                            <ul className={styles.statsList}>
                                <li>
                                    <span className={styles.statNum}>100%</span>
                                    <span className={styles.statLabel}>Client Satisfaction Focus</span>
                                </li>
                                <li>
                                    <span className={styles.statNum}>24/7</span>
                                    <span className={styles.statLabel}>Emergency Service & Support</span>
                                </li>
                                <li>
                                    <span className={styles.statNum}>UK</span>
                                    <span className={styles.statLabel}>London & Nationwide Coverage</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <section className={styles.valuesSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Our Core Principles</h2>
                        <p>What drives every project we deliver</p>
                    </div>

                    <div className={styles.valuesGrid}>
                        {values.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className={styles.valueCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2>Ready to Start Your Project?</h2>
                        <p>Get in touch with our Archway team today for advice or a free detailed quote.</p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.primaryBtn}>
                                Get a Free Quote
                            </Link>
                            <a href="tel:+447393285567" className={styles.secondaryBtn}>
                                Call +44 7393 285567
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    );
}
