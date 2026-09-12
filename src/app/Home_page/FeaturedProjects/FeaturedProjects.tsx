import Link from 'next/link';
import Image from 'next/image';
import styles from './featuredProjects.module.css';

const projects = [
    {
        id: 1,
        title: 'Full Refurbishment',
        location: 'Islington, London',
        description: 'Complete interior overhaul including custom kitchen installation and structural wall removal.',
        image: '/projects/islington.jpg',
    },
    {
        id: 2,
        title: 'Loft Conversion',
        location: 'Archway, London',
        description: 'Dormer loft conversion adding an en-suite master bedroom with modern skylights.',
        image: '/projects/archway.jpg',
    },
    {
        id: 3,
        title: 'Rear Extension & Kitchen',
        location: 'Holloway, London',
        description: 'Single-storey rear extension creating an open-plan kitchen and dining area with bi-fold doors.',
        image: '/projects/holloway.jpg',
    },
];

const FeaturedProjects = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Featured Projects</h2>
                    <p>Recent residential builds and refurbishments delivered across London.</p>
                </div>

                <div className={styles.grid}>
                    {projects.map((project) => (
                        <div key={project.id} className={styles.card}>
                            <div className={styles.imagePlaceholder}>
                                <span>Project Image Placeholder</span>
                            </div>
                            <div className={styles.content}>
                                <span className={styles.location}>{project.location}</span>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.ctaWrapper}>
                    <Link href="/experience" className={styles.viewAllBtn}>
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;