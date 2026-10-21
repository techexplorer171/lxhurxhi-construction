'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './QuoteForm.module.css';
import Call_icon from './icons/Call_icon.png';
import ClockIcon from './icons/Clock_icon.png';
import EmailIcon from './icons/Email_icon.png';
import LocationIcon from './icons/Location_icon.png';
import Background from './img/back2.jpg';
import Workers_img from './img/workers_img.jpg';

import { Phone_icon, Map_icon, Users_icon, One_User_icon, Email_icon } from './All_icons';
import {
    Building_icon,
    Home_icon,
    Hammer_icon,
    Ruler_icon,
    Wallet_icon,
    Calendar_icon,
    Paper_icon,
    Upload_icon,
    Plane_icon,
    Lock_icon
} from './All_icons';

const QuoteForm = () => {
    // Explicitly allow string or null state to prevent TypeScript errors when setting 'btn1' or 'btn2'
    const [activeButton, setActiveButton] = useState<string | null>(null);

    const Inputs1 = [
        { Head: "Full Name", type: "text", Icon: One_User_icon, Place_Holder: "Evan Williams" },
        { Head: "Email Address", type: "email", Icon: Email_icon, Place_Holder: "Someone@example.com" },
        { Head: "Phone Number", type: "tel", Icon: Phone_icon, Place_Holder: "(555) 000 0000" },
        { Head: "Address or ZIP Code", type: "text", Icon: Map_icon, Place_Holder: "City, State or ZIP" },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <div className={styles.Top}>
                    <div className={styles.containerTop}>
                        <h3>
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="m12 3-1.9 5.8a2 2 0 0 1-1.28 1.28L3 12l5.8 1.9a2 2 0 0 1 1.28 1.28L12 21l1.9-5.8a2 2 0 0 1 1.28-1.28L21 12l-5.8-1.9a2 2 0 0 1-1.28-1.28L12 3z"/>
                            </svg>
                            Instant Cost Calculator Included
                        </h3>
                        <h2>Get a Free Construction Quote</h2>
                        <p>
                            Fill out the project details below to receive a custom estimate and consultation from our engineering team.
                        </p>
                    </div>
                    <div className={styles.Hat_Container}>
                        <div className="banner-graphic" aria-hidden="true" style={{ width: '170px', height: '170px' }}>
                            <svg
                                className={styles.Hat}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ width: '100%', height: '100%' }}
                            >
                                <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
                                <path d="M14 6a6 6 0 0 1 6 6v3" />
                                <path d="M4 15v-3a6 6 0 0 1 6-6" />
                                <rect x="2" y="15" width="20" height="4" rx="1" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className={styles.Bottom}>
                    <div className={styles.Section1}>
                        <div>
                            <div style={{ display: "flex", flexDirection: "row" }} className={styles.Section1_Head}>
                                <Users_icon />
                                <h2>1. Your Contact Information</h2>
                            </div>

                            <div className={styles.list_container}>
                                {Inputs1.map((item, i) => {
                                    const IconComponent = item.Icon;

                                    return (
                                        <div key={i} className={styles.Input_field_section}>
                                            <label className={styles.Input_head}>
                                                <span>{item.Head}</span>
                                            </label>

                                            <div className={styles.Input_container}>
                                                {IconComponent && <IconComponent />}
                                                <input
                                                    type={item.type}
                                                    placeholder={item.Place_Holder}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className={styles.Section2}>
                        <div style={{ display: "flex", flexDirection: "row" }} className={styles.Section2_Head}>
                            <Building_icon />
                            <h2>2. Project Specifications</h2>
                        </div>

                        <div className={styles.Section2_Body}>
                            <h2 className={styles.Section2_Body_H2}>Property Type</h2>
                            <div className={styles.Buttons_commercial}>
                                <button
                                    type="button"
                                    onClick={() => setActiveButton('btn1')}
                                    style={{
                                        transition: 'all 0.2s',
                                        backgroundColor: activeButton === 'btn1' ? 'rgba(251,163,1,0.27)' : '#e5e7eb',
                                        border: activeButton === 'btn1' ? '2px solid rgb(255, 91, 0)' : '2px solid rgba(163, 162, 162, 0.35)',
                                    }}
                                >
                                    <Home_icon />
                                    Residential
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveButton('btn2')}
                                    style={{
                                        transition: 'all 0.2s',
                                        backgroundColor: activeButton === 'btn2' ? 'rgba(251,163,1,0.27)' : '#e5e7eb',
                                        border: activeButton === 'btn2' ? '2px solid rgb(255, 91, 0)' : '2px solid rgba(163, 162, 162, 0.35)',
                                    }}
                                >
                                    <Building_icon />
                                    Commercial
                                </button>
                            </div>

                            <div className={styles.Specifications}>
                                <div>
                                    <h2 style={{ margin: "10px" }}>Service Required</h2>
                                    <div className={styles.Specifications_Input}>
                                        <Hammer_icon />
                                        <select>
                                            <option value="New Construction">New Construction</option>
                                            <option value="Home Renovation">Home Renovation</option>
                                            <option value="Kitchen & Bath Remodel">Kitchen & Bath Remodel</option>
                                            <option value="Commercial Fit-Out">Commercial Fit-Out</option>
                                            <option value="Roofing & Siding">Roofing & Siding</option>
                                            <option value="Deck & Outdoor Living">Deck & Outdoor Living</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <h2 style={{ margin: "10px" }}>Est. Square Footage (sq m)</h2>
                                    <div className={styles.Specifications_Input}>
                                        <Ruler_icon />
                                        <input
                                            type="number"
                                            placeholder="ex:100 sq m"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h2 style={{ margin: "10px" }}>Est. Budget</h2>
                                    <div className={styles.Specifications_Input}>
                                        <Wallet_icon />
                                        <select>
                                            <option value="Under £10,000">Under £10,000</option>
                                            <option value="£10,000 - £25,000">£10,000 - £25,000</option>
                                            <option value="£25,000 - £50,000">£25,000 - £50,000</option>
                                            <option value="£50,000 - £100,000">£50,000 - £100,000</option>
                                            <option value="£100,000+">£100,000+</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <h2 style={{ margin: "10px" }}>Start Timeline</h2>
                                    <div className={styles.Specifications_Input}>
                                        <Calendar_icon />
                                        <select>
                                            <option value="As soon as possible">As soon as possible</option>
                                            <option value="Within 1 - 3 months">Within 1 - 3 months</option>
                                            <option value="Within 3 - 6 months">Within 3 - 6 months</option>
                                            <option value="Just planning / Gathering estimates">Just planning / Gathering estimates</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.Section3}>
                        <div style={{ display: "flex", flexDirection: "row" }} className={styles.Section3_Head}>
                            <Paper_icon />
                            <h2>3. Project Files & Details</h2>
                        </div>
                        <div className={styles.Section3_Body}>
                            <h3 style={{ fontSize: "16px", fontWeight: "600" }}>
                                Upload Blueprints or Site Photos (Optional)
                            </h3>
                            <div className={styles.UploadArea}>
                                <Upload_icon />
                                <h3><span style={{ fontWeight: "bold" }}>Click to upload</span></h3>
                                <h3>(Max 10MB per file)</h3>
                                <input type="file" />
                            </div>
                        </div>
                        <div className={styles.Details}>
                            <label>Additional Details or Requirements</label>
                            <textarea rows={4} placeholder="Tell us more about specific materials, architectural styles, or site conditions..."></textarea>
                        </div>
                    </div>

                    <div className={styles.Sub_button}>
                        <button type="submit"><Plane_icon /> <span>Request Free Quote</span></button>
                        <h3><Lock_icon /> No spam promise. Your information is strictly used for estimating costs.</h3>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default QuoteForm;