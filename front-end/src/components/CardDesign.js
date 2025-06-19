import React from 'react';
import '../pages/styles/CardDesign.css';
import imgDesign from '../pages/images/mask-2.png'
import imgDesign1 from '../pages/images/img-design1.png'

const CardDesign = () => {
  return (
    <div className='container-fluid'>
    <div className='row'>
    <div className="col-lg-6 mb-4 mt-5 d-flex justify-content-end align-items-center text-center mx-auto">
      <div className="card h-100" style={{ width:"550px", height:"450PX", borderRadius:"15px", overflow: "hidden"}}>
        <div className='card-dev'>
<img src={imgDesign} alt='design' className='img-design'   style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          display: "block"
        }}/>
        </div>
        
        <div className="card-body text-center" style={{  borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px"}}>
          <div className='row px-3'>
            <div className='col-6 d-flex align-items-center mb-2 ps-2' style={{borderRadius:"15px 15px 15px",}}>
          <span className="ps-3"style={{color:'#c32942', fontWeight:"700",fontSize:"18px"}}>Marketing digital</span>
                  </div>
     <div className='col-6 ps-5'>
   <div className='date-container  d-flex justify-content-end align-items-center ms-5'>
   <h5 className='ps-2 pt-2 pe-2'style={{color:"#ffff",fontSize:"16px"}} >10:00 - 16:00</h5>
  </div>
      </div>
          </div>
         <p className="text-marketing">Venez assister à notre journée portes ouvertes qui aura lieu le 15 Janvier 2022 à partir de 10H. C’est gratuit ! N’hésitez pas à nous rendre visite . Soyez les bienvenus !</p>
        </div>
      </div>
    </div>
    <div className="col-lg-6 mb-4 mt-5">
      <div className="card h-100" style={{ width:"550px", height:"450px", borderRadius:"15px", overflow: "hidden"}}>
        <div className='card-dev'>
<img src={imgDesign1} alt='design' className='img-design1'   style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          display: "block"
        }}/>
        </div>
        
        <div className="card-body text-center" style={{  borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px"}}>
          <div className='row px-3'>
            <div className='col-6 d-flex align-items-center mb-2' style={{borderRadius:"15px 15px 15px",}}>
          <span className="ps-3"style={{color:'#c32942', fontWeight:"700",fontSize:"18px"}}>Marketing digital</span>
                  </div>
     <div className='col-6 ps-5'>
   <div className='date-container  d-flex justify-content-end align-items-center ms-5'>
   <h5 className='ps-2 pt-2 pe-2'style={{color:"#ffff",fontSize:"16px"}} >10:00 - 16:00</h5>
  </div>
      </div>
          </div>
         <p className="text-marketing">Venez assister à notre journée portes ouvertes qui aura lieu le 15 Janvier 2022 à partir de 10H. C’est gratuit ! N’hésitez pas à nous rendre visite . Soyez les bienvenus !</p>
        </div>
      </div>
    </div>
    
      
    </div>
    </div>
  );
};

export default CardDesign;