import Link from 'next/link';
import styles from './servicesGrid.module.css';

const services = [
    {
        title: 'Extensions & Conversions',
        description: 'Rear extensions, side-returns, and loft conversions tailored to maximize living space.',
        link: '/services#extensions',
    },
    {
        title: 'Full Home Refurbishments',
        description: 'Complete interior and exterior modernizations executed to high architectural standards.',
        link: '/services#refurbishments',
    },
    {
        title: 'General Building & Trades',
        description: 'Structural work, brickwork, plastering, and custom carpentry for all property types.',
        link: '/services#building',
    },
    {
        title: '24/7 Emergency Repairs',
        description: 'Rapid response emergency repair services for urgent residential and commercial issues.',
        link: '/services#emergency',
    },
];

const ServicesGrid = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Our Core Services</h2>
                    <p>Comprehensive construction and refurbishment solutions across London.</p>
                </div>

                <div className={styles.grid}>
                    {services.map((service) => (
                        <div key={service.title} className={styles.card}>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <Link href={service.link}>Learn More →</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;