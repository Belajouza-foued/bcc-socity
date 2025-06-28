import React from "react";
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css';
import logoBbc from '../../pages/images/Logo.png'
import { Link, Outlet } from "react-router-dom";


function Navbar() {



     return (
      <>
       <nav className="navbar navbar-expand-lg pt-3 pb-0" style={{ backgroundColor: '#D6D6D6' }}>
  <div className="container-fluid nav-container  pt-2 pb-2"    style={{
       
        maxWidth:"100%",
        borderRadius: '70px',
        width: '1350px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}>

    {/* Logo BCC */}
    <Link className="navbar-brand  ps-4" to="/evenment">
      <img src={logoBbc} className="logo-bbc" alt="Logo" />
    </Link>

    {/* Bouton hamburger */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Contenu de la navbar */}
    <div className="collapse navbar-collapse" id="navbarNav">

      {/* Liens centre */}
      <ul className="navbar-nav mx-auto d-flex align-items-center gap-3">

        <li className="nav-item">
          <Link to="/" className="nav-link">Accueil</Link>
        </li>
        <li className="nav-item">
          <Link to="evenment" className="nav-link">À Propos</Link>
        </li>
        <li className="nav-item">
          <Link to="/formation" className="nav-link">Formation</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">Événements</Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="nav-link">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link to="/connect" className="nav-link">Contact</Link>
        </li>

        {/* Dropdown Services */}
        <li className="nav-item dropdown coach-dropdown">
          <span className="nav-link  coach-title" role="button" data-bs-toggle="dropdown">
            Services
          </span>
          <ul className="dropdown-menu dropdown-content">
            <li><Link className="dropdown-item" to="/nosEvenment">Evenements 1</Link></li>
            <li><Link className="dropdown-item" to="/markEvenment">Evenements 2</Link></li>
            <li><Link className="dropdown-item" to="/blogService">Evenements 3</Link></li>
          </ul>
        </li>
      </ul>
   
      {/* Bouton droite */}
      <div className="d-flex pe-4">
        <button className="btn btn-danger  pe-3 ps-3 pt-1 pb-1" style={{ fontFamily:"Poppins",height: "35px",backgroundColor:"#AD2E43",borderRadius:"20px",fontSize:"15px" }}>
          <Link style={{ fontFamily:"Poppins",color:"#ffffff",fontSize:"14px",fontWeight:"600" }} className="btn-register pb-1" to="/register">Register</Link>
        </button>
      </div>
      {/*footer*/}
     
         {/*footer*/}

    </div>
  </div>
</nav>
     
			      

    
    
  
     </>
    );
  }
  <Outlet/>
  export default Navbar;
  
