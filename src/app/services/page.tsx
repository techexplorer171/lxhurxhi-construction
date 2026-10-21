'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './service.module.css';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';

const servicesList = [
    {
        id: 'extensions',
        title: 'Property Extensions',
        badge: 'Popular',
        description: 'Single & double storey extensions, rear and side returns, structural steel work and full planning compliance.',
        icon: '🏠',
    },
    {
        id: 'loft-conversions',
        title: 'Loft Conversions',
        badge: 'High ROI',
        description: 'Dormer, hip-to-gable and mansard conversions with en-suites, skylights and high-quality finishes.',
        icon: '🏗️',
    },
    {
        id: 'refurbishments',
        title: 'Full Home Refurbishments',
        badge: 'Turnkey',
        description: 'Complete internal & external transformations including kitchens, bathrooms, plastering and flooring.',
        icon: '✨',
    },
    {
        id: 'general-trades',
        title: 'General Building & Trades',
        badge: 'Core Service',
        description: 'Structural wall removals, brickwork, carpentry, partitioning, driveways and general building works.',
        icon: '🔨',
    },
    {
        id: 'emergency-repairs',
        title: '24/7 Emergency Repairs',
        badge: '24/7 Support',
        description: 'Rapid response for structural issues, roof leaks, storm damage and emergency containment across London.',
        icon: '🚨',
    },
    {
        id: 'project-management',
        title: 'Project Management',
        badge: 'End-to-End',
        description: 'Full project oversight from planning and permissions through to final handover and aftercare.',
        icon: '📋',
    },
];

export default function ServicesPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className={styles.eyebrow}>Our Services</span>
                            <h1 className={styles.title}>
                                Construction Solutions by<br />
                                <span>L Xhurxhi</span>
                            </h1>
                            <p className={styles.subtitle}>
                                High-quality residential extensions, loft conversions and full home refurbishments
                                delivered with craftsmanship, transparency and reliability across London.
                            </p>
                            <div className={styles.heroButtons}>
                                <Link href="/contact" className={styles.primaryBtn}>
                                    Get Free Quote
                                </Link>
                                <a href="tel:+447393285567" className={styles.secondaryBtn}>
                                    Call +44 7393 285567
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className={styles.heroImages}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <div className={styles.imageGrid}>
                                <div className={styles.imgBox}></div>
                                <div className={styles.imgBox}></div>
                                <div className={styles.imgBox}></div>
                                <div className={styles.imgBox}></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className={styles.servicesSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>What We Offer</span>
                        <h2>Comprehensive Building Solutions</h2>
                        <p>
                            From structural extensions and loft conversions to complete home transformations —
                            we handle every stage with precision and care.
                        </p>
                    </div>

                    <div className={styles.grid}>
                        {servicesList.map((service, index) => (
                            <motion.article
                                key={service.id}
                                id={service.id}
                                className={styles.card}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                            >
                                <div className={styles.cardTop}>
                                    <span className={styles.icon}>{service.icon}</span>
                                    {service.badge && <span className={styles.badge}>{service.badge}</span>}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <Link href={`/contact?service=${service.id}`} className={styles.readMore}>
                                    Request Quote →
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <div className={styles.ctaText}>
                            <h2>Ready to Start Your Project?</h2>
                            <p>
                                Tell us about your extension, loft conversion or full refurbishment.
                                We’ll provide clear advice, transparent pricing and a free on-site survey.
                            </p>
                        </div>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.primaryBtn}>
                                Get a Free Quote
                            </Link>
                            <a href="tel:+447393285567" className={styles.outlineBtn}>
                                Call Us Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}