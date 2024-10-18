import React from "react";

function Footer() {
    return(
        <div>
             <footer class="site-footer">
      <div class="container">
          <div class="row">

              <div class="col-lg-4 col-md-6 col-12 mb-3">
                  <div class="d-flex align-items-center mb-4">
                      <img src="images/logoSavfile.png" class="img-fluid logo-image"/>

                      <div class="d-flex flex-column">
                          <strong class="logo-text">Gotto</strong>
                          <small class="logo-slogan">Online Job Portal</small>
                      </div>
                  </div>  

                  <p class="mb-2">
                      <i class="custom-icon bi-globe me-1"></i>

                      <a href="#" class="site-footer-link">
                          www.jobbportal.com
                      </a>
                  </p>

                  <p class="mb-2">
                      <i class="custom-icon bi-telephone me-1"></i>

                      <a href="tel: 305-240-9671" class="site-footer-link">
                          305-240-9671
                      </a>
                  </p>

                  <p>
                      <i class="custom-icon bi-envelope me-1"></i>

                      <a href="mailto:info@yourgmail.com" class="site-footer-link">
                          info@jobportal.co
                      </a>
                  </p>

              </div>

              <div class="col-lg-2 col-md-3 col-6 ms-lg-auto">
                  <h6 class="site-footer-title">Company</h6>

                  <ul class="footer-menu">
                      <li class="footer-menu-item"><a href="#" class="footer-menu-link">About</a></li>

                      <li class="footer-menu-item"><a href="#" class="footer-menu-link">Blog</a></li>

                      <li class="footer-menu-item"><a href="#" class="footer-menu-link">Jobs</a></li>

                      <li class="footer-menu-item"><a href="#" class="footer-menu-link">Contact</a></li>
                  </ul>
              </div>

              <div class="col-lg-2 col-md-3 col-6">
                  <h6 class="site-footer-title">Resources</h6>

                  <ul class="footer-menu">
                      <li class="footer-menu-item"><a href="#" class="footer-menu-link">Guide</a></li>

                      <li class="footer-menu-item"><a href="#" class="footer-menu-link">How it works</a></li>

                      <li class="footer-menu-item"><a href="#" class="footer-menu-link">Salary Tool</a></li>
                  </ul>
              </div>

              

          </div>
      </div>
  </footer>
        
        </div>
    )
}

export default Footer;