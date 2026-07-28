import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import "../styles/about.css";

export default function About() {
    return (
        <>
            <Navbar />

            <main className="about-page">

                <section className="about-hero">

                    <div className="hero-badge">
                        ✦ Premium Shopping Experience
                    </div>

                    <h1>
                        About <span>SkyMart</span>
                    </h1>

                    <p>
                        Redefining online shopping with premium products,
                        seamless experiences, and customer-first innovation.
                    </p>

                </section>


                <section className="story-section">

                    <div className="section-label">
                        OUR STORY
                    </div>

                    <h2>
                        Building the future of digital shopping
                    </h2>

                    <p>
                        SkyMart started with a simple vision — creating a
                        shopping platform where design, technology, and
                        quality products come together.
                    </p>

                    <p>
                        Today, we continue to improve every experience,
                        helping customers discover products they love.
                    </p>

                </section>


                <Stats />


                <section className="why-us">

                    <div className="section-label">
                        WHY SKYMARK
                    </div>

                    <h2>
                        Designed around your experience
                    </h2>


                    <div className="reasons">

                        <div className="reason-card">
                            <span>🚚</span>
                            Fast Delivery
                            <p>
                                Quick and reliable delivery everywhere.
                            </p>
                        </div>


                        <div className="reason-card">
                            <span>🔒</span>
                            Secure Payments
                            <p>
                                Safe transactions with trusted security.
                            </p>
                        </div>


                        <div className="reason-card">
                            <span>💬</span>
                            24/7 Support
                            <p>
                                Always available whenever you need us.
                            </p>
                        </div>


                        <div className="reason-card">
                            <span>⭐</span>
                            Premium Products
                            <p>
                                Carefully selected quality products.
                            </p>
                        </div>

                    </div>

                </section>


                <section className="team">

                    <div className="section-label">
                        CREATOR
                    </div>

                    <h2>
                        Meet The Developer
                    </h2>


                    <div className="team-grid">

                        <div className="team-card">

                            <img
                                src="/Divyanshu.png"
                                alt="Divyanshu Singh"
                            />


                            <div className="team-content">

                                <h3>
                                    Divyanshu Singh
                                </h3>


                                <p>
                                    Founder & Developer
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


            </main>


            <Newsletter />

            <Footer />

        </>
    );
}



