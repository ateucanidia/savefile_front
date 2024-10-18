import React from 'react';
import Navigation from './navigation';
import Footer from './footer';

function Contact() {
    return (
        <div id="top">
            <Navigation/>
            <main>
                <header className="site-header">
                    <div className="section-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-12 text-center">
                                <h1 className="text-white">Get in touch</h1>

                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Contact</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="contact-section section-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-12 mb-lg-5 mb-3">
                                <iframe className="google-map" src="https://www.google.com/maps/embed?..." width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>

                            {/* Rest of your content */}
                        </div>
                    </div>
                </section>

                {/* Footer content */}
            </main>
            
            <Footer/>
        </div>
    );
}

export default Contact;
