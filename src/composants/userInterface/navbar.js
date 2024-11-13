import React from "react";
import { Link, useNavigate} from "react-router-dom";
import mainLogo from'./../../assets/images/logoSavfile.png';
import { CgProfile } from "react-icons/cg";
function NavDashboard(){
    const userdata = JSON.parse(localStorage.getItem('userdata'));
    const Navigate = useNavigate
    const logout =() =>{
        localStorage.clear();
        Navigate('/login')
    }

    return(
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container dashboard-nav-container">
                    <a class="navbar-brand d-flex align-items-center" href="/">
                        <img src={mainLogo} class="img-fluid logo-image" alt=""/>
                    </a>
            

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav align-items-center ms-lg-5">
                        
                            <li class="nav-item ms-lg-auto">
                            <CgProfile />
                            { userdata ? <Link onClick ={logout} className="nav-link" to="/login">LogOut</Link> : null}
                            </li>

                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavDashboard;