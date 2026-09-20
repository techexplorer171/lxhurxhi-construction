'use client';

import React, { useState, useRef } from 'react';
import styles from './ServicesGrid.module.css';
import { ChevronLeft, ChevronRight, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface ServiceItem {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    image: string;
    tag: string;
}

const services: ServiceItem[] = [
    {
        id: 0,
        title: 'Architectural Extensions',
        subtitle: 'Rear Extensions & Loft Conversions',
        description: 'Transforming ground footprints and unused roof space into light-filled living environments under full building control compliance.',
        features: ['Permitted Development', 'Steel Structural Work', 'Bespoke Glazing'],
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
        tag: 'Structural Work',
    },
    {
        id: 1,
        title: 'Full House Refurbishment',
        subtitle: 'Period & Modern Property Overhauls',
        description: 'Complete high-specification turn-key refurbishments across West & Central London, tailored to conservation and heritage standards.',
        features: ['Heritage Restorations', 'M&E Infrastructure', 'Bespoke Joinery'],
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
        tag: 'Turn-Key Projects',
    },
    {
        id: 2,
        title: 'Basement & Sub-Structure',
        subtitle: 'Sub-Ground Excavation & Waterproofing',
        description: 'Creating subterranean living spaces, wellness suites, and subterranean structural extensions with Delta membrane waterproofing.',
        features: ['Underpinning & Excavation', 'Delta Waterproofing', 'Structural Concrete'],
        image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80',
        tag: 'Engineering',
    },
    {
        id: 3,
        title: 'Commercial & Retail Fit-Outs',
        subtitle: 'High-End Retail & Office Renovations',
        description: 'Custom commercial fit-outs delivered strictly on deadline with detailed architectural project management and trade management.',
        features: ['Acoustic Treatments', 'HVAC Installation', 'Phased Delivery'],
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
        tag: 'Commercial',
    },
];

export default function ServicesGrid() {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    // Touch Tracking State
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    // Minimum drag distance required to switch cards (in pixels)
    const minSwipeDistance = 40;

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % services.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
    };

    // Touch Handlers for Mobile Swiping
    const handleTouchStart = (e: React.TouchEvent) => {
        touchEndX.current = null;
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const distance = touchStartX.current - touchEndX.current;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            handleNext();
        } else if (isRightSwipe) {
            handlePrev();
        }
    };

    // Helper for card loop positioning
    const getCardPosition = (index: number) => {
        const total = services.length;
        const diff = (index - activeIndex + total) % total;

        if (diff === 0) return styles.activeCard;
        if (diff === 1) return styles.nextCard;
        if (diff === total - 1) return styles.prevCard;
        return styles.hiddenCard;
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Header */}
                <div className={styles.headerGroup}>
                    <div className={styles.headerBadge}>
                        <span className={styles.badgeDot} />
                        <span>Scope of Work</span>
                    </div>
                    <h2 className={styles.heading}>Precision Construction & Renovation</h2>
                    <p className={styles.subheading}>
                        End-to-end architectural execution, bespoke structural engineering, and high-end residential extensions across Greater London.
                    </p>
                </div>

                {/* Swipeable Carousel Container */}
                <div className={styles.carouselStage}>
                    <div
                        className={styles.cardsContainer}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {services.map((item, index) => {
                            const positionClass = getCardPosition(index);

                            return (
                                <div
                                    key={item.id}
                                    onClick={() => setActiveIndex(index)}
                                    className={`${styles.card} ${positionClass}`}
                                >
                                    <div className={styles.imageWrapper}>
                                        <img src={item.image} alt={item.title} className={styles.cardImage} />
                                        <div className={styles.imageOverlay} />
                                        <span className={styles.tagBadge}>{item.tag}</span>
                                    </div>

                                    <div className={styles.cardBody}>
                                        <span className={styles.itemSubtitle}>{item.subtitle}</span>
                                        <h3 className={styles.itemTitle}>{item.title}</h3>
                                        <p className={styles.itemDescription}>{item.description}</p>

                                        <div className={styles.featureList}>
                                            {item.features.map((feat, fIdx) => (
                                                <div key={fIdx} className={styles.featureItem}>
                                                    <CheckCircle2 size={14} className={styles.checkIcon} />
                                                    <span>{feat}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <a href="#contact" className={styles.ctaButton}>
                                            <span>Explore Specifications</span>
                                            <ArrowUpRight size={16} />
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Controls */}
                    <div className={styles.controls}>
                        <button onClick={handlePrev} className={styles.navBtn} aria-label="Previous service">
                            <ChevronLeft size={22} />
                        </button>

                        <div className={styles.dots}>
                            {services.map((_, dotIdx) => (
                                <button
                                    key={dotIdx}
                                    onClick={() => setActiveIndex(dotIdx)}
                                    className={`${styles.dot} ${dotIdx === activeIndex ? styles.dotActive : ''}`}
                                    aria-label={`Go to slide ${dotIdx + 1}`}
                                />
                            ))}
                        </div>

                        <button onClick={handleNext} className={styles.navBtn} aria-label="Next service">
                            <ChevronRight size={22} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}