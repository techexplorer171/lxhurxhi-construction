'use client';

import { useState } from 'react';
import styles from './quoteForm.module.css';

const QuoteForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: 'Property Extensions',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic for form handling will go here
        console.log('Form Submitted:', formData);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Get a Free Quote</h2>
                    <p>Tell us about your project and our team will get back to you promptly.</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.fieldGroup}>
                        <div className={styles.field}>
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                placeholder="+44 7123 456789"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={styles.fieldGroup}>
                        <div className={styles.field}>
                            <label htmlFor="email">Email Address</label>
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

                        <div className={styles.field}>
                            <label htmlFor="service">Service Needed</label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                            >
                                <option value="Property Extensions">Property Extensions</option>
                                <option value="Loft Conversions">Loft Conversions</option>
                                <option value="Home Refurbishments">Home Refurbishments</option>
                                <option value="General Building & Trades">General Building & Trades</option>
                                <option value="24/7 Emergency Repairs">24/7 Emergency Repairs</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="message">Project Details</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            placeholder="Provide a brief description of your project scope or timeline..."
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                        Submit Request
                    </button>
                </form>
            </div>
        </section>
    );
};

export default QuoteForm;