import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import './styles/Connect.css'
import imgMap from './images/img-connect.png'
import logoConnect from './images/logo-map.png'
import imgMega from './images/mega-phone.png'


const Connect  = () => {
    return( 
       <>

    <div className='container-fluid digital-service' style={{ backgroundColor: '#D6D6D6'}}>
    <div className='row pt-4'>
      <div className='text-center pt-5 mt-5'>
             <h1 style={{fontSize:"67px",fontFamily:"Poppins",fontWeight:"600",color:"#262525"}}>Envoyez nous un message</h1> 
    <p className='' style={{fontSize:"22px",fontFamily:"Inter",fontWeight:"500",color:"#393738",opacity:"70%",letterSpacing:"0.4px"}} >Contactez-nous et créons ensemble un univers de possibilités !</p>
    </div>
       <div
  className="container  pb-2  connect-container"
  style={{
    backgroundColor: '#fff',
    padding: '',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    maxWidth: '1200px',
    maxHeight :'720px'
   
  }}
>
      <div className="row">
    {/* Formulaire à gauche */}
       <div className="col-lg-6 col-sm-12 d-flex align-items-center mt-3">
        
      <form className="p-4 h-100 w-100 text-justify"style={{lineHeight:"2"}} >
        <div className='text-start'>
         <h1 className='pe-2 text-justify justify-contact'>CONTACTEZ<span className='ps-2 span-justify'>NOUS</span></h1>
                <p className='' style={{lineHeight:"1.5",fontWeight:"400",fontFamily:"Poppins",fontSize:"16px",color:"#393738"}}>Alignons nos constellations ! Contactez-nous et laissez la magie de la collaboration illuminer nos cieux.</p>
                 </div>
                 <div className="form-outline mb-4">
          <input type="text" id="form2Example1" placeholder='Nom' className="form-control custom-textarea" style={{border:"2px solid #d9d9d9",color:"#d9d9d9"}}/>
                  </div>

        <div className="form-outline mb-4">
          <input type="email" id="form2Example2" placeholder='Email'  className="form-control custom-textarea" style={{border:"2px solid #d9d9d9",color:"#d9d9d9"}} />
                  </div>
                   <div className="form-outline mb-4">
          <input type="text" id="form2Example2" placeholder='Phonr Number'  className="form-control custom-textarea" style={{border:"2px solid #d9d9d9",color:"#d9d9d9"}} />
                  </div>
                  <div className="form-outline mb-4">
  <textarea
    className="form-control custom-textarea custom-connect"
    placeholder="Message"
    rows="5" // ou le nombre de lignes que tu veux
  ></textarea>
</div>

      
        <button type="button" className="btn btn-danger btn-block mb-4 w-100 pt-2 pb-2 btn-connect">
          Envoyer
        </button>

       
      </form>
    </div>

    {/* Image à droite */}
    <div className="col-lg-6 d-flex justify-content-center align-items-center pb-5 pt-4 mb-3">
      <div className='position-relative mb-5 pb-5'
        style={{
          width: '540px',
          height: '560px',
        }}
      >
        <img src={logoConnect} className="logo-connect " alt=''/>
        <img  className='mb-5 img-fluid'
          src={imgMap}
          alt=""
          style={{
            width: '100%',
            height: '125%',
            objectFit: 'cover',
            borderRadius: '8px',
            backgroundColor:"black"
                     }}
        />
      </div>
    </div>
  </div>
      </div>
    <div className='col-lg-12 col-sm-12 position-relative pt-5 mt-5'>
  <p className="text-service mt-5 pt-5">nous sommes là pour répondre à vos besoins !</p>
  <div className='image-service text-center mx-auto pb-5 mb-5'>
    <img src={imgMega} alt='' className='img-mega text-center img-fluid'/>
  </div>
</div>

         </div>
</div>

</>
)
  
};

export default  Connect;