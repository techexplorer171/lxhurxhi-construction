"use client";

import { useState } from "react";
import styles from "./servicesGrid.module.css";

type Theme = "gold" | "cyan" | "emerald" | "purple";
type Layout = "carousel" | "grid";

const services = [
    {
        title: "Extensions & Conversions",
        description:
            "Rear extensions, side-returns, and loft conversions tailored meticulously to maximize luxury living space and market valuation.",
        theme: "gold" as Theme,
        icon: "building",
    },
    {
        title: "Full Home Refurbishments",
        description:
            "Complete interior and exterior modernizations executed seamlessly to the highest architectural standards and fine bespoke finishes.",
        theme: "purple" as Theme,
        icon: "home",
    },
    {
        title: "General Building & Trades",
        description:
            "Structural reconfigurations, master brickwork, expert plastering, and bespoke carpentry for high-value properties.",
        theme: "emerald" as Theme,
        icon: "tools",
    },
    {
        title: "24/7 Emergency Repairs",
        description:
            "Rapid-response emergency repair services for urgent residential and commercial structural or utility issues across London.",
        theme: "purple" as Theme,
        icon: "clock",
    },
];

export default function ServicesGrid() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [theme, setTheme] = useState<Theme>("gold");
    const [layout, setLayout] = useState<Layout>("carousel");

    const navigate = (direction: number) => {
        setActiveIndex((current) => {
            let next = current + direction;

            if (next < 0) next = services.length - 1;
            if (next >= services.length) next = 0;

            return next;
        });
    };

    const getCardStyle = (index: number): React.CSSProperties => {
        if (layout === "grid") {
            return {
                opacity: 1,
                transform: "none",
                filter: "none",
            };
        }

        if (index === activeIndex) {
            return {
                opacity: 1,
                transform: "scale(1.05) translateZ(30px)",
                filter: "none",
                zIndex: 30,
            };
        }

        const offset = index - activeIndex;

        return {
            opacity: 0.55,
            transform: `scale(0.88) translateZ(-40px) rotateY(${offset * 8}deg)`,
            filter: "blur(0.5px)",
            zIndex: 10,
        };
    };

    const handleMouseMove = (
        event: React.MouseEvent<HTMLDivElement>,
        index: number
    ) => {
        if (layout !== "grid" && index !== activeIndex) return;

        const card = event.currentTarget;
        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.03, 1.03, 1.03)
    `;
    };

    const handleMouseLeave = (
        event: React.MouseEvent<HTMLDivElement>,
        index: number
    ) => {
        event.currentTarget.style.transform =
            layout === "grid"
                ? "none"
                : index === activeIndex
                    ? "scale(1.05) translateZ(30px)"
                    : `scale(0.88) translateZ(-40px) rotateY(${(index - activeIndex) * 8}deg)`;
    };

    return (
        <section
            className={`${styles.section} ${styles[`theme-${theme}`]}`}
        >
            {/* Ambient background */}
            <div className={styles.spotlightOne} />
            <div className={styles.spotlightTwo} />

            <div className={styles.container}>
                {/* Header */}
                <div className={styles.heading}>
                    <h2>Our Core Services</h2>

                    <p>
                        Comprehensive construction, high-end refurbishment, and
                        structural engineering solutions across London.
                    </p>
                </div>

                {/* Theme + layout controls */}
                <div className={styles.controlsTop}>
                    <div className={styles.themeSwitcher}>
                        <span>Theme Accent:</span>

                        {(["gold", "cyan", "emerald", "purple"] as Theme[]).map(
                            (themeName) => (
                                <button
                                    key={themeName}
                                    className={
                                        theme === themeName
                                            ? styles.themeButtonActive
                                            : styles.themeButton
                                    }
                                    onClick={() => setTheme(themeName)}
                                >
                  <span
                      className={`${styles.themeDot} ${
                          styles[`dot-${themeName}`]
                      }`}
                  />

                                    <span>
                    {themeName === "gold"
                        ? "Amber Gold"
                        : themeName === "cyan"
                            ? "Cyan Blue"
                            : themeName === "emerald"
                                ? "Emerald"
                                : "Royal Purple"}
                  </span>
                                </button>
                            )
                        )}
                    </div>

                    <div className={styles.layoutSwitcher}>
                        <button
                            className={
                                layout === "carousel"
                                    ? styles.layoutActive
                                    : styles.layoutButton
                            }
                            onClick={() => setLayout("carousel")}
                        >
                            3D Focused View
                        </button>

                        <button
                            className={
                                layout === "grid"
                                    ? styles.layoutActive
                                    : styles.layoutButton
                            }
                            onClick={() => setLayout("grid")}
                        >
                            Full Grid
                        </button>
                    </div>
                </div>

                {/* Cards */}
                <div className={styles.carouselView}>
                    <div
                        className={
                            layout === "grid"
                                ? styles.cardsGrid
                                : styles.cardsCarousel
                        }
                    >
                        {services.map((service, index) => (
                            <div
                                key={service.title}
                                className={`${styles.card} ${
                                    index === activeIndex && layout === "carousel"
                                        ? styles.activeCard
                                        : ""
                                }`}
                                style={getCardStyle(index)}
                                onClick={() => setActiveIndex(index)}
                                onMouseMove={(event) =>
                                    handleMouseMove(event, index)
                                }
                                onMouseLeave={(event) =>
                                    handleMouseLeave(event, index)
                                }
                            >
                                {/* Dot pattern */}
                                <div className={styles.dotMatrix} />

                                {/* Graphic */}
                                <div
                                    className={`${styles.banner} ${
                                        styles[`banner-${service.theme}`]
                                    }`}
                                >
                                    <div className={styles.bannerLight} />

                                    <div className={styles.hexagonOuter}>
                                        <div className={styles.hexagon}>
                                            <ServiceIcon type={service.icon} />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={styles.cardContent}>
                                    <div>
                                        <h3>{service.title}</h3>

                                        <p>{service.description}</p>
                                    </div>

                                    <div className={styles.learnMoreWrapper}>
                                        <button className={styles.learnMore}>
                                            <span>Learn more</span>

                                            <ArrowIcon />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Carousel controls */}
                    {layout === "carousel" && (
                        <div className={styles.carouselControls}>
                            <button
                                className={styles.navigationButton}
                                onClick={() => navigate(-1)}
                                aria-label="Previous service"
                            >
                                <ChevronLeft />
                            </button>

                            <div className={styles.indicators}>
                                {services.map((_, index) => (
                                    <button
                                        key={index}
                                        aria-label={`Go to service ${index + 1}`}
                                        className={
                                            index === activeIndex
                                                ? `${styles.indicator} ${styles.indicatorActive}`
                                                : styles.indicator
                                        }
                                        onClick={() => setActiveIndex(index)}
                                    />
                                ))}
                            </div>

                            <button
                                className={styles.navigationButton}
                                onClick={() => navigate(1)}
                                aria-label="Next service"
                            >
                                <ChevronRight />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

/* ---------------- Icons ---------------- */

function ServiceIcon({
                         type,
                     }: {
    type: string;
}) {
    if (type === "home") {
        return (
            <svg
                className={styles.icon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
            </svg>
        );
    }

    if (type === "tools") {
        return (
            <svg
                className={styles.icon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 01-3.586 0 2.548 2.548 0 010-3.586l5.653-4.655m3.118-2.31l1.455-1.455a2.121 2.121 0 000-3l-2.121-2.121a2.121 2.121 0 00-3 0l-1.455 1.455m3.576 5.121L10.5 12"
                />
            </svg>
        );
    }

    if (type === "clock") {
        return (
            <svg
                className={styles.icon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        );
    }

    return (
        <svg
            className={styles.icon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6M9 7h1m-1 4h1m4-4h1m-1 4h1"
            />
        </svg>
    );
}

function ArrowIcon() {
    return (
        <svg
            className={styles.arrow}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
        </svg>
    );
}

function ChevronLeft() {
    return (
        <svg fill="none" viewBox="0 0 24 24">
            <path
                d="M15.75 19.5L8.25 12l7.5-7.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ChevronRight() {
    return (
        <svg fill="none" viewBox="0 0 24 24">
            <path
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}