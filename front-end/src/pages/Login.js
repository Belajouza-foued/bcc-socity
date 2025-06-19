import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate
import './styles/Login.css'

import backImage from './images/work-img.png'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();  // Initialize navigate

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5030/api/auth/login', {
                email,
                password
            });
            console.log(response.data);
            // Navigate to profile page on success
            navigate('/dashboard');

            // Optionally reload the page
            window.location.reload();

            localStorage.setItem('token', response.data.token); // Save JWT to local storage
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div className='container-fluid login-container' style={{
                     backgroundImage:`url(${backImage})`,
            backgroundSize: 'cover', // Pour couvrir tout l'élément
            backgroundPosition: 'center', // Pour centrer l'image
            height: '700px',
            opacity:"80%" // Ajustez la hauteur selon vos besoins
          }} >
            <div className='row' >

               
            <div className="d-flex justify-content-center align-items-center vh-75 pt-5 pb-5">
  <div className="col-lg-4 col-sm-12 login-position" style={{lineHeight:"2"}}>
    <form className="form-login" onSubmit={handleLogin} >
      <h2 className="text-center title-login pt-5 mb-5" style={{fontSize:"50px",color:"#ffff"}}>Login:</h2>

      <div className="position-user col-12 pt-2 ms-4" style={{lineHeight:"1.8"}}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control design-login"
        />
      </div>

      <div className="position-relative col-12 pt-5 ms-4" style={{lineHeight:"1.8"}}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control design-login"
        />
      </div>

      <div className="form-check d-flex justify-content-between align-items-center col-12 pt-3">
        <div className="d-flex align-items-center ms-5 mt-1 pt-2">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label htmlFor="rememberMe" className="form-check-label">Remember me</label>
        </div>
        <Link to="/forgot-password" className="link-login pe-5 me-2">Forgot password?</Link>
      </div>

      <div className="col-12 pt-3 ms-4">
        <button type="submit" className="btn btn-primary form-control log-button">Login</button>
      </div>
    </form>
  </div>
</div>

            </div>
        </div>
    );
}

export default Login;
