'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './contact.module.css';
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'General Inquiry',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Connect your email API or backend handler here
        setSubmitted(true);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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
                        Get In Touch
                    </motion.span>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Contact L Xhurxhi Construction Ltd
                    </motion.h1>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Discuss your upcoming project, schedule a site survey, or request an free estimate from our North London team.
                    </motion.p>
                </div>
            </section>


            <section className={styles.contactSection}>
                <div className={styles.container}>
                    <div className={styles.grid}>

                        <motion.div
                            className={styles.infoCol}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className={styles.infoCard}>
                                <h2>Office & Direct Channels</h2>
                                <p className={styles.infoIntro}>
                                    Reach out directly by phone or email. Emergency call-outs are handled 24/7.
                                </p>

                                <div className={styles.detailGroup}>
                                    <div className={styles.detailItem}>
                                        <span className={styles.icon}>📞</span>
                                        <div>
                                            <h3>Phone</h3>
                                            <a href="tel:+447393285567" className={styles.link}>
                                                +44 7393 285567
                                            </a>
                                        </div>
                                    </div>

                                    <div className={styles.detailItem}>
                                        <span className={styles.icon}>✉️</span>
                                        <div>
                                            <h3>Email</h3>
                                            <a href="mailto:info@lxhurxhiconstruction.co.uk" className={styles.link}>
                                                info@lxhurxhiconstruction.co.uk
                                            </a>
                                        </div>
                                    </div>

                                    <div className={styles.detailItem}>
                                        <span className={styles.icon}>📍</span>
                                        <div>
                                            <h3>Registered Office</h3>
                                            <address className={styles.address}>
                                                654 Holloway Road, Archway<br />
                                                London, N19 3PD<br />
                                                United Kingdom
                                            </address>
                                        </div>
                                    </div>

                                    <div className={styles.detailItem}>
                                        <span className={styles.icon}>🏢</span>
                                        <div>
                                            <h3>Company Information</h3>
                                            <p className={styles.metaText}>
                                                L Xhurxhi Construction Ltd<br />
                                                Company Reg: <strong>11537645</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.hoursBox}>
                                    <h3>Working Hours</h3>
                                    <ul>
                                        <li><span>Mon - Fri:</span> 8:00 AM - 6:00 PM</li>
                                        <li><span>Saturday:</span> 9:00 AM - 4:00 PM</li>
                                        <li><span>Emergency Repair:</span> 24/7 Emergency Line</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>


                        <motion.div
                            className={styles.formCol}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className={styles.formCard}>
                                <h2>Send Us a Message</h2>
                                <p className={styles.formIntro}>
                                    Fill out the form below and a structural specialist will review your request within 24 hours.
                                </p>

                                {submitted ? (
                                    <div className={styles.successBox}>
                                        <span className={styles.successIcon}>✓</span>
                                        <h3>Message Sent Successfully!</h3>
                                        <p>Thank you for reaching out. We will get back to you shortly.</p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className={styles.resetBtn}
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className={styles.form}>
                                        <div className={styles.inputGroup}>
                                            <label htmlFor="name">Full Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                placeholder="John Smith"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className={styles.inputRow}>
                                            <div className={styles.inputGroup}>
                                                <label htmlFor="email">Email Address *</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    placeholder="john@example.com"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className={styles.inputGroup}>
                                                <label htmlFor="phone">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="+44 7000 000000"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label htmlFor="service">Service Required</label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                            >
                                                <option value="General Inquiry">General Inquiry</option>
                                                <option value="Extensions">Property Extensions</option>
                                                <option value="Loft Conversions">Loft Conversions</option>
                                                <option value="Refurbishments">Full Refurbishments</option>
                                                <option value="Emergency Repair">Emergency Repair</option>
                                            </select>
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label htmlFor="message">Project Details / Message *</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={5}
                                                required
                                                placeholder="Tell us about your project scope, location, and timeline..."
                                                value={formData.message}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <button type="submit" className={styles.submitBtn}>
                                            Submit Quote Request
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    );
}