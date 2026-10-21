'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';

import {
    Shield_icon,
    Paper_icon,
    Database_icon,
    Settings_icon,
    Cookies_icon,
    Shield2_icon,
    User_icon,
    Message_icon
} from "@/app/privacy/All_icons";

const Privacy = () => {
    const [activeSection, setActiveSection] = useState('introduction');

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className={styles.main}>
            <Navbar />

            <div className={styles.Head}>
                <Shield_icon />
                <h1>Privacy Policy</h1>
                <p>
                    We're committed to protecting your privacy and ensuring transparency about how we
                    collect, use, and safeguard your personal information on our platform.
                </p>
                <small>Last updated: October 1, 2026</small>
            </div>


            <div className={styles.container}>

                <aside className={styles.Navigator}>
                    <h3>Quick Navigation</h3>

                    <div className={styles.navGroup}>
                        <button
                            className={activeSection === 'introduction' ? styles.activeBtn : ''}
                            onClick={() => scrollToSection('introduction')}
                        >
                            <Paper_icon /> Introduction
                        </button>
                        <button
                            className={activeSection === 'data-collection' ? styles.activeBtn : ''}
                            onClick={() => scrollToSection('data-collection')}
                        >
                            <Database_icon /> Data Collection
                        </button>
                        <button
                            className={activeSection === 'use-of-data' ? styles.activeBtn : ''}
                            onClick={() => scrollToSection('use-of-data')}
                        >
                            <Settings_icon /> Use of Data
                        </button>
                        <button
                            className={activeSection === 'cookies' ? styles.activeBtn : ''}
                            onClick={() => scrollToSection('cookies')}
                        >
                            <Cookies_icon /> Cookies
                        </button>
                        <button
                            className={activeSection === 'third-party' ? styles.activeBtn : ''}
                            onClick={() => scrollToSection('third-party')}
                        >
                            <Shield2_icon /> Third-Party Services
                        </button>
                        <button
                            className={activeSection === 'rights' ? styles.activeBtn : ''}
                            onClick={() => scrollToSection('rights')}
                        >
                            <User_icon /> Your Rights
                        </button>
                        <button
                            className={activeSection === 'contact' ? styles.activeBtn : ''}
                            onClick={() => scrollToSection('contact')}
                        >
                            <Message_icon /> Contact us
                        </button>
                    </div>
                </aside>


                <div className={styles.Content}>
                    <section id="introduction" className={styles.section}>
                        <div className={styles.titleRow}>
                            <Paper_icon />
                            <h2>Introduction</h2>
                        </div>
                        <p>
                            Welcome to L Xhurxhi Construction Ltd. This Privacy Policy explains how we collect, use,
                            disclose, and safeguard your information when you visit our website and request our construction
                            or refurbishment services. By accessing or using our website, you agree to the collection and use of
                            information in accordance with this policy.
                        </p>
                    </section>

                    <section id="data-collection" className={styles.section}>
                        <div className={styles.titleRow}>
                            <Database_icon />
                            <h2>Data Collection</h2>
                        </div>
                        <p>
                            We collect personal details that you voluntarily submit through our contact and quote forms,
                            including your full name, phone number, email address, property location, and project specifications.
                        </p>
                    </section>

                    <section id="use-of-data" className={styles.section}>
                        <div className={styles.titleRow}>
                            <Settings_icon />
                            <h2>Use of Data</h2>
                        </div>
                        <p>
                            Your information is strictly used to provide detailed construction estimates, arrange site surveys,
                            manage active projects, and respond to inquiries. We do not sell or rent your data to third parties.
                        </p>
                    </section>

                    <section id="cookies" className={styles.section}>
                        <div className={styles.titleRow}>
                            <Cookies_icon />
                            <h2>Cookies</h2>
                        </div>
                        <p>
                            Our website uses essential cookies to ensure smooth site navigation, track general audience traffic,
                            and maintain security across our forms.
                        </p>
                    </section>

                    <section id="third-party" className={styles.section}>
                        <div className={styles.titleRow}>
                            <Shield2_icon />
                            <h2>Third-Party Services</h2>
                        </div>
                        <p>
                            We may utilize trusted third-party services for processing contact form submissions (e.g. Web3Forms)
                            or hosting analytics. These services process data in compliance with strict privacy standards.
                        </p>
                    </section>

                    <section id="rights" className={styles.section}>
                        <div className={styles.titleRow}>
                            <User_icon />
                            <h2>Your Rights</h2>
                        </div>
                        <p>
                            Under UK GDPR regulations, you have the right to request access to the personal data we hold about you,
                            request corrections, or ask for your personal data to be deleted from our records.
                        </p>
                    </section>

                    <section id="contact" className={styles.section}>
                        <div className={styles.titleRow}>
                            <Message_icon />
                            <h2>Contact us</h2>
                        </div>
                        <p>
                            If you have questions regarding this Privacy Policy, please email us at{' '}
                            <strong>info@lxhurxhiconstruction.co.uk</strong> or call us directly at <strong>+44 7393 285567</strong>.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default Privacy;