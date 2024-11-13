import React from 'react';
import Navigation from './navigation.js';
import Footer from './footer.js';
import heroIcon from'./../assets/images/hero_image.jpg';


function Home(){
    return (
        <div>
         <Navigation/>
           
            <main>

<section className="hero-section d-flex justify-content-center align-items-cente hero-section-nw">
    <div className="section-overlay section-overlay-nw"></div>

    <div className="container">
        <div className="heroRow">
            <div className='hero-contain'>
                <img src={heroIcon} class="hero-image"/>
            </div>

            <div className="col-lg-6 col-12 b-5 mb-lg-0">
                
                <h6 className="text-white">Are you looking for a secured file box?</h6>

                <h1 className="hero-title text-white mt-4 mb-4">Online Solution. <br/> For Files Upload</h1>

                <a href="#categories-section" className="custom-btn custom-border-btn btn">Browse Categories</a>
                
            </div>
           

        </div>
    </div>
</section>

<section class="hero">
        <div class="hero-content">
            <h1>Save and Manage Your Files Securely</h1>
            <p>Your trusted file storage and sharing platform.</p>
            <a href="#dashboard" class="btn-primary">Go to Dashboard</a>
        </div>
    </section>

 {/* Features Section */}
    <section id="features" class="features">
        <h2>Features</h2>
        <div class="feature-box">
            <div class="feature">
                <i class="icon">📁</i>
                <h3>File Organization</h3>
                <p>Manage your files efficiently with our organized folder structure.</p>
            </div>
            <div class="feature">
                <i class="icon">🔒</i>
                <h3>Secure Storage</h3>
                <p>All your files are encrypted and stored securely in the cloud.</p>
            </div>
            <div class="feature">
                <i class="icon">📤</i>
                <h3>Easy Sharing</h3>
                <p>Share your files instantly with others through simple links.</p>
            </div>
        </div>
    </section>
</main>  

            <Footer/>
        </div>
    )
}

export default Home;