import React from "react";
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.css';
import logoFooter from '../../pages/images/Logo (1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from "react-router-dom";
import MailService from '../../services/mail.service';
import { useState } from "react";
function Footer () {
 const [email, setEmail] = useState("");
   const handleSubmit = async () => {
    try {
      await MailService.sendEmail({ email });
      alert("Email envoyé !");
      setEmail(""); // Réinitialiser le champ
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      alert("Échec de l'envoi de l'email.");
    }
  };
     return (
      <>
    <section className=''>
<div className='container-fluid img-back1 footer-container'> 
  <div className='row pt-1'>
    <div className='col-lg-12 col-sm-12' style={{lineHeight:"1.5"}}>
        <div className='position-footer text-center pt-3'>
            <img className='logo-footer mt-3' src={logoFooter} alt=''/>
        </div>
        <div className='text-center pt-2'>
            <h1 className="title-footer">Get start to up your business</h1>
            <h1 className="title-footer">With personal AI manager</h1>
        </div>
      <div className='text-center  pt-3 mt-3'>
     <div className='d-flex justify-content-center align-items-center position-relative gap-2'>
      <FontAwesomeIcon icon={faUser} className='person ps-5' />
      <input
        type='email'
        placeholder='Enter your email'
        className='form-control input-text me-2'
        style={{ backgroundColor: "transparent", color: "#fff" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type='button'
        className='btn btn-danger try ps-3 pe-3 pt-2 pb-2'
        onClick={handleSubmit}
      >
        Try Now
      </button>
    </div>
  <div className="footer-container-2">
  <ul className="mx-auto pt-3">
    <li>Features</li>
    <li>A Propos</li>
    <li>New & Blog</li>
    <li>Careers</li>
    <li>About Us</li>
    <li>Terms</li>
    <li>Privacy</li>
    <li>Cookies</li>
  </ul>
</div>

</div>

    </div>
    
  </div>
</div>

</section>
     
			      

    
    
  
     </>
    );
  }
  <Outlet/>
  export default Footer;
  
