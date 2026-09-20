import Image from 'next/image';
import styles from './Highlights.module.css';
import Logo from './final_logo.png';

const Highlights = () => {
    return (
        <div className={styles.container}>
            <div className={styles['stats-grid']}>
                <article className={`${styles.card} ${styles['card-large']}`}>
                    <div className={styles.brand}>
                        <div className={styles['brand-mark']}>
                            <Image
                                src={Logo}
                                alt="L Xhurxhi Construction Logo"
                                className={styles.logoImage}
                                priority
                            />
                        </div>
                        <span>L Xhurxhi</span>
                    </div>

                    <div className={styles['large-content']}>
                        <p className={styles.eyebrow}>OUR TRACK RECORD</p>
                        <h1>
                            1600<span>+</span>
                        </h1>
                        <p className={styles.description}>
                            Proven track record across residential, commercial, and industrial sectors.
                        </p>
                    </div>

                    <div className={styles.people}>
                        <div className={styles.avatar}>L</div>
                        <div className={styles.avatar}>X</div>
                        <div className={styles.avatar}>C</div>
                        <div className={`${styles.avatar} ${styles.add}`}></div>
                    </div>
                </article>

                <article className={`${styles.card} ${styles['card-small']} ${styles.technology}`}>
                    <div className={styles.icon}>✧</div>
                    <div>
                        <h2>Modern Technology</h2>
                        <p>We integrate modern construction technologies to ensure faster timelines.</p>
                    </div>
                </article>

                <article className={`${styles.card} ${styles['card-small']}`}>
                    <div className={styles.icon}>✓</div>
                    <div>
                        <p className={styles.eyebrow}>RELIABILITY</p>
                        <h2 className={styles.number}>
                            98<span>%</span>
                        </h2>
                        <p>Project success rate</p>
                    </div>
                </article>

                <article className={`${styles.card} ${styles['card-small']} ${styles.satisfaction}`}>
                    <div className={styles.icon}>★</div>
                    <div>
                        <h2 className={styles.number}>
                            25<span>million</span>
                        </h2>
                        <p>Client satisfaction</p>
                    </div>
                </article>

                <article className={`${styles.card} ${styles['card-small']}`}>
                    <div className={styles.icon}>●●</div>
                    <div>
                        <h2>Experienced Team</h2>
                        <p>Our team brings years of hands-on construction experience.</p>
                    </div>
                </article>
            </div>

            <a className={styles['learn-more']} href="#">
                Learn More
            </a>
        </div>
    );
};

export default Highlights;