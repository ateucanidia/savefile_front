import React from 'react';
import Navigation from './navigation.js';
import Footer from './footer.js';

function About() {
    return(
        <div>
             <Navigation/>
            <AboutMain/>
            <Footer/>
        </div>
    )
}


function AboutMain() {
    return(
        <div>
            <main>
            <section class="about-hero">
        <div class="about-content">
            <h1>About SaveFile</h1>
            <p>We are a leading provider of secure and efficient file management solutions. Our mission is to help individuals and businesses store, organize, and share their files with ease.</p>
        </div>
    </section>

     {/* Our Mission, Vision, and Values Section */}
    <section class="mission-vision-values">
        <div class="container">
            <div class="mission">
                <h2>Our Mission</h2>
                <p>To provide a reliable, secure, and user-friendly platform for file storage and sharing that empowers our users to manage their data effectively.</p>
            </div>
            <div class="vision">
                <h2>Our Vision</h2>
                <p>To be the most trusted platform for secure and efficient file management, fostering a world where data is easily accessible and protected.</p>
            </div>
            <div class="values">
                <h2>Our Values</h2>
                <ul>
                    <li><strong>Security:</strong> Your data is safe with us.</li>
                    <li><strong>Simplicity:</strong> Easy to use, powerful results.</li>
                    <li><strong>Trust:</strong> We value transparency and trust in all our dealings.</li>
                </ul>
            </div>
        </div>
    </section>

     {/* Our Team Section  */}
    <section class="team">
        <h2>Meet Our Team</h2>
        <div class="team-container">
            <div class="team-member">
                <img src="./public/images/team-member1.jpg" alt="Team Member 1" class="team-image"/>
                <h3>Jane Doe</h3>
                <p>CEO & Founder</p>
            </div>
            <div class="team-member">
                <img src="../public/images/logoSavfile.png" class="team-image"/>
                <img src="./public/images/team-member2.jpg" alt="Team Member 2" class="team-image"/>
                <h3>John Smith</h3>
                <p>CTO</p>
            </div>
            <div class="team-member">
                <img src="./public/images/team-member3.jpg" alt="Team Member 3" class="team-image"/>
                <h3>Sarah Lee</h3>
                <p>Head of Design</p>
            </div>
        </div>
    </section>

            </main> 
           
        </div>
    )
}



export default About;