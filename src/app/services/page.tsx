'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './service.module.css';
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'

const servicesList = [
    {
        id: 'extensions',
        title: 'Property Extensions',
        badge: 'Popular',
        tagline: 'Expand your living space and increase property value.',
        description:
            'From single-storey rear kitchen extensions to complex multi-level side returns, we manage every structural, brickwork, and interior phase seamlessly.',
        features: [
            'Single & Double Storey Extensions',
            'Rear & Side Return Extensions',
            'Structural Steel Beam Installations',
            'Architectural & Planning Compliance',
        ],
    },
    {
        id: 'loft-conversions',
        title: 'Loft Conversions',
        badge: 'High ROI',
        tagline: 'Turn unused roof space into luxury bedrooms or offices.',
        description:
            'Unlock hidden square footage in your home. We specialize in dormer, hip-to-gable, and Velux skylight conversions fitted with custom en-suite bathrooms.',
        features: [
            'Dormer & Mansard Conversions',
            'Hip-to-Gable Modifications',
            'En-suite Bathroom Additions',
            'Skylights & Rooflight Installation',
        ],
    },
    {
        id: 'refurbishments',
        title: 'Full Refurbishments',
        badge: 'Turnkey',
        tagline: 'Complete internal and external property transformations.',
        description:
            'Modernize aged properties with complete structural overhauls, bespoke kitchen fitting, luxury bathroom installations, plastering, and flooring.',
        features: [
            'Complete Interior Overhauls',
            'Kitchen & Bathroom Fitting',
            'Plastering, Tiling & Decorating',
            'Flooring & Custom Joinery',
        ],
    },
    {
        id: 'general-trades',
        title: 'General Building & Trades',
        badge: 'Core Service',
        tagline: 'Skilled trade solutions for structural and cosmetic updates.',
        description:
            'Professional bricklaying, carpentry, structural wall removals, partitioning, and general building repairs handled by fully qualified tradesmen.',
        features: [
            'Structural Wall Removal & Load Bearing',
            'Bricklaying & Masonry Repairs',
            'First & Second Fix Carpentry',
            'Paving, Driveways & Retaining Walls',
        ],
    },
    {
        id: 'emergency-repairs',
        title: '24/7 Emergency Repairs',
        badge: '24/7 Support',
        tagline: 'Around-the-clock rapid response across Greater London.',
        description:
            'Urgent structural support, storm damage containment, roof leaks, or severe property issues tackled promptly by our Archway-based team.',
        features: [
            'Rapid Site Containment & Safety',
            'Emergency Roof & Leak Patching',
            'Structural Shoring & Temporary Support',
            'Available 24 Hours / 7 Days a Week',
        ],
    },
];

export default function ServicesPage() {
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
                        Our Expertise
                    </motion.span>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Comprehensive Construction & Building Services
                    </motion.h1>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        From structural extensions and loft conversions to full property refurbishments,
                        L Xhurxhi Construction Ltd delivers top-quality craftsmanship across London and nationwide.
                    </motion.p>
                </div>
            </section>


            <section className={styles.servicesSection}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {servicesList.map((service, index) => (
                            <motion.article
                                key={service.id}
                                id={service.id}
                                className={styles.card}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <div className={styles.cardHeader}>
                                    <span className={styles.badge}>{service.badge}</span>
                                    <h2>{service.title}</h2>
                                    <p className={styles.tagline}>{service.tagline}</p>
                                </div>

                                <p className={styles.description}>{service.description}</p>

                                <div className={styles.featuresWrapper}>
                                    <h3>Key Deliverables:</h3>
                                    <ul className={styles.featureList}>
                                        {service.features.map((item) => (
                                            <li key={item}>
                                                <span className={styles.checkIcon}>✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={styles.cardFooter}>
                                    <Link href="/contact" className={styles.quoteBtn}>
                                        Request Quote for {service.title}
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2>Have a Specific Project in Mind?</h2>
                        <p>
                            Contact our Holloway Road office today for expert guidance, on-site surveys, and transparent estimates.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.primaryBtn}>
                                Get Your Free Estimate
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