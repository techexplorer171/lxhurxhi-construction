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
            <div className={styles.container}>
                <div className={styles.part1}>
                    <h2 className={styles.companyTitle}>L XHURXHI CONSTRUCTION LTD</h2>
                    <p className={styles.tagline}>London-based residential construction & refurbishments.</p>
                    <span className={styles.companyNo}>Company No: 11537645</span>

                    <div className={styles.contactDetails}>
                        <span>📞 +44 20 XXXX XXXX</span>
                        <span>✉️ info@lxhurxhiconstruction.co.uk</span>
                    </div>

                    <div className={styles.socialRow}>
                        {socialLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={item.icon}
                                    alt={item.name}
                                    width={24}
                                    height={24}
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className={styles.part2}>
                    <h2>Links</h2>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/experience">Experience</Link>
                    <Link href="/contact">Contact</Link>
                </div>

                <div className={styles.part3}>
                    <h2>Primary Services</h2>
                    <p>Property Extensions</p>
                    <p>General Building & Trades</p>
                    <p>Home Refurbishments</p>
                    <p>Residential Projects</p>
                </div>
            </div>

            <div className={styles.copyright}>
                <p>© {new Date().getFullYear()} L XHURXHI CONSTRUCTION LTD. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;