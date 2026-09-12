'use client';
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './experience.module.css';

const categories = ['All', 'Extensions', 'Refurbishments', 'Loft Conversions'];

const projectsList = [
    {
        id: 1,
        title: 'Full Residential Refurbishment',
        category: 'Refurbishments',
        location: 'Islington, London',
        duration: '12 Weeks',
        description:
            'Complete interior modernization including structural wall removals, open-plan kitchen installation, and custom tiling throughout.',
    },
    {
        id: 2,
        title: 'Dormer Loft Conversion',
        category: 'Loft Conversions',
        location: 'Archway, London (N19)',
        duration: '8 Weeks',
        description:
            'Transformed an unused attic space into a luxury master suite with an en-suite bathroom and Velux skylights.',
    },
    {
        id: 3,
        title: 'Rear Extension & Kitchen Build',
        category: 'Extensions',
        location: 'Holloway, London',
        duration: '10 Weeks',
        description:
            'Single-storey rear extension with bi-fold doors, structural steel beam installations, and engineered hardwood flooring.',
    },
    {
        id: 4,
        title: 'Period Home Restoration',
        category: 'Refurbishments',
        location: 'Highbury, London',
        duration: '14 Weeks',
        description:
            'Restoration of a Victorian terraced home, balancing historic plasterwork with modern heating and energy-efficient insulation.',
    },
    {
        id: 5,
        title: 'Side-Return Kitchen Extension',
        category: 'Extensions',
        location: 'Camden, London',
        duration: '9 Weeks',
        description:
            'Maximised narrow side-return space to create a bright, spacious open-plan dining and living area.',
    },
    {
        id: 6,
        title: 'Hip-to-Gable Loft Conversion',
        category: 'Loft Conversions',
        location: 'Finchley, London',
        duration: '7 Weeks',
        description:
            'Created two additional bedrooms and a shared family bathroom with fitted custom wardrobes.',
    },
];

export default function ExperiencePage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects =
        activeCategory === 'All'
            ? projectsList
            : projectsList.filter((p) => p.category === activeCategory);

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
                        Portfolio & Case Studies
                    </motion.span>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Our Work & Construction Projects
                    </motion.h1>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Explore recent residential developments, extensions, and home refurbishments
                        delivered across London by L Xhurxhi Construction Ltd.
                    </motion.p>
                </div>
            </section>


            <section className={styles.projectsSection}>
                <div className={styles.container}>

                    <div className={styles.filterWrapper}>
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`${styles.filterBtn} ${
                                    activeCategory === category ? styles.activeFilter : ''
                                }`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>


                    <motion.div layout className={styles.grid}>
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.article
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className={styles.card}
                                >
                                    <div className={styles.imagePlaceholder}>
                                        <span className={styles.imageTag}>{project.category}</span>
                                        <p>Project Image Placeholder</p>
                                    </div>

                                    <div className={styles.content}>
                                        <div className={styles.metaRow}>
                                            <span className={styles.location}>📍 {project.location}</span>
                                            <span className={styles.duration}>⏱️ {project.duration}</span>
                                        </div>

                                        <h2 className={styles.projectTitle}>{project.title}</h2>
                                        <p className={styles.description}>{project.description}</p>

                                        <Link href="/contact" className={styles.inquireLink}>
                                            Request Similar Build →
                                        </Link>
                                    </div>
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>


            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2>Planning a Similar Construction Project?</h2>
                        <p>
                            Whether you need structural alterations, a extension, or a full renovation,
                            speak directly with our team today.
                        </p>
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