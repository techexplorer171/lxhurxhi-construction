import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';

import facebook from './img/facebook-white-icon.png';
import Instagram from './img/instagram-white-icon.png';
import whatsapp from './img/whatsapp-white-icon.png';
import Linked_In from './img/linkedin-white-icon.png';

const socialLinks = [
    { name: 'Facebook', icon: facebook, url: 'https://facebook.com/yourpage' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/yourpage' },
    { name: 'WhatsApp', icon: whatsapp, url: 'https://wa.me/447000000000' },
    { name: 'LinkedIn', icon: Linked_In, url: 'https://linkedin.com/company/yourpage' },
];

const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            {/* Top Section */}
            <div className={styles.topSection}>
                <div className={styles.topLeft}>
                    <h2>
                        Have a Project in Mind?<br />
                        <span>Let’s Build It.</span>
                    </h2>

                    <div className={styles.emailBox}>
                        <input type="email" placeholder="Enter your email address..." />
                        <button>Let’s Talk</button>
                    </div>
                </div>

                <div className={styles.topRight}>
                    <div className={styles.contactItem}>
                        <span>📞</span>
                        <span>+44 20 XXXX XXXX</span>
                    </div>
                    <div className={styles.contactItem}>
                        <span>✉️</span>
                        <span>info@lxhurxhiconstruction.co.uk</span>
                    </div>
                    <div className={styles.contactItem}>
                        <span>📍</span>
                        <span>London, United Kingdom</span>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className={styles.divider}></div>

            {/* Links Section */}
            <div className={styles.linksSection}>
                <div className={styles.linkColumn}>
                    <h3>Navigation</h3>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/privacy">Privacy Page</Link>
                    <Link href="/contact">Contact</Link>
                </div>

                <div className={styles.linkColumn}>
                    <h3>Primary Services</h3>
                    <p>Property Extensions</p>
                    <p>General Building & Trades</p>
                    <p>Home Refurbishments</p>
                    <p>Residential Projects</p>
                </div>

                <div className={styles.linkColumn}>
                    <h3>Company</h3>
                    <p>Company No: 11537645</p>
                    <p>London-based residential construction & refurbishments.</p>
                </div>

                <div className={styles.linkColumn}>
                    <h3>Follow Us</h3>
                    <div className={styles.socialRow}>
                        {socialLinks.map((item) => (
                            <Link key={item.name} href={item.url} target="_blank" rel="noopener noreferrer">
                                <Image src={item.icon} alt={item.name} width={22} height={22} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>


            <div className={styles.copyright}>
                <p>© {new Date().getFullYear()} L XHURXHI CONSTRUCTION LTD. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;