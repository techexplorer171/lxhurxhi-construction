'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './contact.module.css';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';

import { Email_icon, Phone_icon, Map_icon } from "@/app/contact/All_icons";
import Facebook_icon from './icons/Facebook_icon.png';
import Linkedin_icon from './icons/Linkedin_icon.png';
import Whatsapp_icon from './icons/Whatsapp_icon.png';

export default function Contact() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.pageWrapper}>
                <motion.div
                    className={styles.container}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.div
                        className={styles.Part1}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        <p className={styles.breadcrumb}>Home / <span>Contact</span></p>
                        <h1 className={styles.title}>Lets Get<br />in touch</h1>
                        <p className={styles.subtitle}>Don't be afraid to say hello with us!</p>

                        <div className={styles.Part1_Buttons}>
                            <Link className={styles.Part1_Link} href="hi">
                                <div className={styles.iconWrapper}><Email_icon /></div>
                                <div className={styles.textWrapper}>
                                    <small>Email Us</small>
                                    <strong>info@lxhurxhiconstruction.co.uk</strong>
                                </div>
                                <span className={styles.arrow}>↗</span>
                            </Link>
                            <Link className={styles.Part1_Link} href="hi">
                                <div className={styles.iconWrapper}><Phone_icon /></div>
                                <div className={styles.textWrapper}>
                                    <small>Call Us</small>
                                    <strong>+44 7393 285567</strong>
                                </div>
                                <span className={styles.arrow}>↗</span>
                            </Link>
                            <Link className={styles.Part1_Link} href="hi">
                                <div className={styles.iconWrapper}><Map_icon /></div>
                                <div className={styles.textWrapper}>
                                    <small>Our Headquarter</small>
                                    <strong>London, United Kingdom</strong>
                                </div>
                                <span className={styles.arrow}>↗</span>
                            </Link>
                        </div>

                        <div className={styles.Part1_Bottom}>
                            <span>Follow us on</span>
                            <div className={styles.socialGroup}>
                                <Link className={styles.Part1_Bottom_Links} href="hi">
                                    <Image src={Facebook_icon} alt="facebook-icon" />
                                </Link>
                                <Link className={styles.Part1_Bottom_Links} href="hi">
                                    <Image src={Linkedin_icon} alt="linkedin-icon" />
                                </Link>
                                <Link className={styles.Part1_Bottom_Links} href="hi">
                                    <Image src={Whatsapp_icon} alt="whatsapp-icon" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className={styles.Part2}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    >
                        <h2>Contact Us</h2>

                        <div className={styles.Part2_inputs}>
                            <div className={styles.inputGroup}>
                                <label>Name</label>
                                <input type="text" placeholder="johndoe@gmail.com" />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Email</label>
                                <input type="email" placeholder="johndoe@gmail.com" />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Phone Number</label>
                                <input type="text" placeholder="+01 XXX XXX XXX" />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Subject</label>
                                <input type="text" placeholder="enter your subject" />
                            </div>
                        </div>

                        <div className={styles.inputGroupFull}>
                            <label>Message</label>
                            <textarea className={styles.Part2_Input_Big} placeholder="enter your text..."></textarea>
                        </div>

                        <button className={styles.submitBtn}>Send Message →</button>

                        <p className={styles.privacy}>
                            By submitting this message, you agree to our <a href="/privacy">Privacy Policy</a>. We respect your data and will never share your information without your consent.
                        </p>
                    </motion.form>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}