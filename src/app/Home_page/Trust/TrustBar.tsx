'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './trustBar.module.css';

import Trust22 from './icon/trust-icon.png';
import Star from './icon/star-rating-icon.png';
import Map from './icon/map-pin-icon.png';
import Service from './icon/services-plumber-icon.png';

const trustItems = [
    {
        icon: Trust22,
        title: 'Company Reg: 11537645',
        subtitle: 'Fully Insured & Vetted',
    },
    {
        icon: Service,
        title: 'Open 24/7 Service',
        subtitle: 'Emergency Repairs Available',
    },
    {
        icon: Map,
        title: 'London & Nationwide',
        subtitle: 'Based in Archway, N19',
    },
    {
        icon: Star,
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
                        <div className={styles.iconWrapper}>
                            <Image
                                src={item.icon}
                                alt={item.title}
                                className={styles.iconImage}
                                width={24}
                                height={24}
                            />
                        </div>
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