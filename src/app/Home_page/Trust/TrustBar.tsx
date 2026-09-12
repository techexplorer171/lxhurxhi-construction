'use client';

import { motion } from 'framer-motion';
import styles from './trustBar.module.css';

const trustItems = [
    {
        icon: '🛡️',
        title: 'Company Reg: 11537645',
        subtitle: 'Fully Insured & Vetted',
    },
    {
        icon: '🚨',
        title: 'Open 24/7 Service',
        subtitle: 'Emergency Repairs Available',
    },
    {
        icon: '📍',
        title: 'London & Nationwide',
        subtitle: 'Based in Archway, N19',
    },
    {
        icon: '⭐',
        title: 'Top-Class Quality',
        subtitle: '100% Client Satisfaction',
    },
];

const TrustBar = () => {
    return (
        <section className={styles.trustSection}>
            <div className={styles.container}>
                {trustItems.map((item, index) => (
                    <motion.div
                        key={item.title}
                        className={styles.trustCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <span className={styles.icon}>{item.icon}</span>
                        <div className={styles.textWrapper}>
                            <h3 className={styles.itemTitle}>{item.title}</h3>
                            <p className={styles.itemSubtitle}>{item.subtitle}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TrustBar;