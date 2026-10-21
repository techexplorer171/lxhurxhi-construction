'use client';

import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './about.module.css';

import House from './img/house.jpg'


export default function AboutPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.hero}  >
                <div className={styles.container}>
                    <div className={styles.heroGrid}>
                        <div className={styles.heroContent}>
                            <span className={styles.breadcrumb}>Home / About</span>
                            <h1>Crafting Excellence Together</h1>
                            <p  >
                                At L Xhurxhi Construction we believe in the power of collaboration.
                                With skilled professionals and a strong commitment to quality, we work
                                hand-in-hand with our clients to turn ideas into lasting homes.
                            </p>
                        </div>

                        <div className={styles.heroImage}>
                            <div className={styles.imagePlaceholder}>
                                <span>Add Hero Image</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRO + STATS */}
            <section className={styles.intro}>
                <div className={styles.container}>
                    <p className={styles.introText} style={{color:'white'}}>
                        We are a London-based residential construction company specialising in
                        high-quality extensions, loft conversions and full home refurbishments.
                        Our focus is simple: deliver exceptional results with transparency,
                        craftsmanship and reliability.
                    </p>

                    <div className={styles.stats}>
                        <div>
                            <strong>1600+</strong>
                            <span>Projects Completed</span>
                        </div>
                        <div>
                            <strong>100%</strong>
                            <span>Client Focused</span>
                        </div>
                        <div>
                            <strong>24/7</strong>
                            <span>Support Available</span>
                        </div>
                        <div>
                            <strong>UK</strong>
                            <span>London & Nationwide</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* MISSION */}
            <section className={styles.mission} >
                <div className={styles.container}>
                    <div className={styles.split} >
                        <div className={styles.splitImage}>
                            <div className={styles.imagePlaceholder}>Add Mission Image</div>
                        </div>
                        <div className={styles.splitContent}>
                            <span className={styles.eyebrow}>Our Mission</span>
                            <h2>What Drives Us Every Day</h2>
                            <p>
                                To deliver outstanding residential construction with honesty, precision
                                and exceptional craftsmanship creating homes our clients are proud
                                to live in for many years.
                            </p>
                            <ul>
                                <li>Uncompromising quality on every project</li>
                                <li>Clear and transparent communication</li>
                                <li>On-time delivery and reliability</li>
                                <li>Building long-term client relationships</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* VISION */}
            <section className={styles.vision}>
                <div className={styles.container}>
                    <div className={styles.split}>
                        <div className={styles.splitContent}>
                            <span className={styles.eyebrow}>Our Vision</span>
                            <h2>Building the Future of Homes</h2>
                            <p>
                                To be recognised as one of London’s most trusted residential
                                construction companies — known for quality, reliability and modern
                                building methods.
                            </p>
                            <ul>
                                <li>Continuous improvement and innovation</li>
                                <li>Sustainable and responsible construction</li>
                                <li>Empowering homeowners through good design</li>
                                <li>Raising standards in the industry</li>
                            </ul>
                        </div>
                        <div className={styles.splitImage}>
                            <div className={styles.imagePlaceholder}>Add Vision Image</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUES */}
            <section className={styles.values}>

                <div className={`${styles.bg}`}></div>
                <div className={`${styles.bg} ${styles.bg2}`}></div>
                <div className={`${styles.bg} ${styles.bg3}`}></div>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.eyebrow}>What We Stand For</span>
                        <h2>Our Core Values</h2>
                    </div>

                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <h3>Quality First</h3>
                            <p>We never cut corners. Every detail matters, from structure to finish.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>Transparency</h3>
                            <p>Clear pricing, honest timelines and open communication at every stage.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>Reliability</h3>
                            <p>We show up, we deliver on time, and we stand behind our work.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>Client Focus</h3>
                            <p>Your goals become our goals. We listen carefully and execute precisely.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* HISTORY */}
            <section className={styles.history}>
                <div className={styles.container}>
                    <div className={styles.split}>
                        <div className={styles.splitImage}>
                            <div className={styles.imagePlaceholder}>Add History Image</div>
                        </div>
                        <div className={styles.splitContent}>
                            <span className={styles.eyebrow}>Our History</span>
                            <h2>From Humble Beginnings</h2>
                            <p>
                                L Xhurxhi Construction started with a simple belief: good work,
                                honest pricing and respect for the client. Over the years we have
                                grown steadily through recommendations and repeat business.
                            </p>
                            <ul>
                                <li>Started in Archway, North London</li>
                                <li>Grew through trust and quality results</li>
                                <li>Expanded across Greater London</li>
                                <li>Continuing to build a strong reputation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>



            {/* HOW WE WORK */}
            <section className={styles.howWeWork}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.eyebrow}>Our Process</span>
                        <h2>How We Work</h2>
                        <p>A clear and structured approach from first conversation to final handover.</p>
                    </div>

                    <div className={styles.processGrid}>
                        <div className={styles.processCard}>
                            <span>01</span>
                            <h3>Consultation</h3>
                            <p>We discuss your ideas, requirements, budget and timeline in detail.</p>
                        </div>
                        <div className={styles.processCard}>
                            <span>02</span>
                            <h3>Planning & Design</h3>
                            <p>Detailed plans, permissions guidance and a transparent quotation.</p>
                        </div>
                        <div className={styles.processCard}>
                            <span>03</span>
                            <h3>Construction</h3>
                            <p>Skilled team, quality materials and regular progress updates.</p>
                        </div>
                        <div className={styles.processCard}>
                            <span>04</span>
                            <h3>Handover</h3>
                            <p>Final checks, clean finish and full aftercare support.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                {/* Wave background elements */}
                <div className={styles.wave}></div>
                <div className={`${styles.wave} ${styles.wave2}`}></div>
                <div className={`${styles.wave} ${styles.wave3}`}></div>

                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2>Ready to Create Your Ideal Space?</h2>
                        <p>Let’s talk about your project and how we can bring it to life.</p>
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

            <Footer />
        </main>
    );
}