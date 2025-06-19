import React, { useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import "../pages/styles/Register.css";
import { useNavigate } from 'react-router-dom';  // Import useNavigate


function Register() {
    const [name, setName] = useState('');
       const [email, setEmail] = useState('');
       const [number, setNumber] = useState('');
       const [password, setPassword] = useState('');
        
    const navigate = useNavigate();  // Initialize navigate

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
          name,
          email,
          number,
          password
      };

        try {
            const response = await axios.post('http://localhost:5030/api/auth/register', userData, {
                headers: {
                     'Content-Type': 'application/json'
                }
            })  
            console.log(response.data);

            // Navigate to profile page on success
            navigate('/login');
            
            // Optionally reload the page
            window.location.reload();
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <>
<div className='container-fluid d-flex justify-content-center align-items-center' style={{   minHeight: '100vh',
    background: 'linear-gradient(to right, #c6d8f0, #f3f8fe)',
   
   }}>
<div className='row w-100 justify-content-center'>
     
       <div className='col-lg-4 col-sm-12 text-center' >
               <form onSubmit={handleSubmit} className='bg-white p-4'   style={{ borderRadius: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            
        <h2 className='line mb-4'>Register</h2>
        
            <div className=''>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='form-control mt-3'
                />
                  </div>
                  <div className=''>
                <input
                    type="number"
                    placeholder="Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                     className='form-control mt-3'
                />
                </div>
                             
                    <div className=''>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                     className='form-control mt-3'
                />
                </div>
               
                <div className=''>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                     className='form-control mt-3'
                />
                </div>
                
   
    
    <div className=' text-center  pt-4 mt-2'>
    <button type="submit" className=' btn btn-primary form-control'>Register</button>
    </div>
    </form>
    
    

    </div>
</div>

  </div>
       

        
        </>
       



    );
}


export default Register;