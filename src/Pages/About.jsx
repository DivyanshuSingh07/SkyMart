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





// import Navbar from "../components/Navbar";
// import Stats from "../components/Stats";
// import Newsletter from "../components/Newsletter";
// import Footer from "../components/Footer";

// import "../styles/about.css";

// export default function About() {
//     return (
//         <>
//             <Navbar />

//             <section className="about-page">

//                 <div className="about-hero">

//                     <h1>
//                         About SkyMart
//                     </h1>

//                     <p>
//                         Redefining online
//                         shopping with premium
//                         products, exceptional
//                         experiences, and
//                         customer-first service.
//                     </p>

//                 </div>

//                 <section className="story-section">

//                     <h2>
//                         Our Story
//                     </h2>

//                     <p>
//                         SkyMart began with a
//                         simple mission—to
//                         create a shopping
//                         platform that combines
//                         modern design,
//                         seamless user
//                         experience, and
//                         world-class products.
//                     </p>

//                     <p>
//                         Today, we serve
//                         thousands of customers
//                         worldwide and continue
//                         to innovate every day.
//                     </p>

//                 </section>

//                 <Stats />

//                 <section className="why-us">

//                     <h2>
//                         Why Choose Us
//                     </h2>

//                     <div className="reasons">

//                         <div>
//                             ✓ Fast Delivery
//                         </div>

//                         <div>
//                             ✓ Secure Payments
//                         </div>

//                         <div>
//                             ✓ 24/7 Support
//                         </div>

//                         <div>
//                             ✓ Premium Products
//                         </div>

//                     </div>

//                 </section>

//                 <section className="team">

//                     <h2>
//                         Meet The Developer
//                     </h2>

//                     <div className="team-grid">

//                         <div className="team-card">
//                             <img
//                                 src="\Divyanshu.png"
//                                 alt=""
//                             />

//                             <h3>
//                                 Divyanshu Singh
//                             </h3>

//                             <p>
//                                 Founder
//                             </p>
//                         </div>

//                     </div>

//                 </section>

//             </section>

//             <Newsletter />

//             <Footer />
//         </>
//     );
// }