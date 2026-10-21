import Link from 'next/link';
import styles from './featuredProjects.module.css';

const projects = [
    {
        id: 1,
        title: 'Full Refurbishment',
        category: 'Residential',
        location: 'Islington, London',
    },
    {
        id: 2,
        title: 'Loft Conversion',
        category: 'Residential',
        location: 'Archway, London',
    },
    {
        id: 3,
        title: 'Rear Extension & Kitchen',
        category: 'Residential',
        location: 'Holloway, London',
    },
];

const FeaturedProjects = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <span className={styles.eyebrow}>FEATURED PROJECTS</span>
                        <h2>
                            Built with passion.<br />
                            Delivered with pride.
                        </h2>
                    </div>


                </div>


                <div className={styles.grid}>
                    {projects.map((project) => (
                        <Link href="/services" key={project.id} className={styles.card}>
                            <div className={styles.imageBox}>
                                <div className={styles.placeholder}>
                                    Project Image
                                </div>
                                <div className={styles.arrow}>→</div>
                            </div>

                            <div className={styles.info}>
                                <h3>{project.title}</h3>
                                <p>{project.category} · {project.location}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;