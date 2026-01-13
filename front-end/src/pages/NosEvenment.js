import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import './styles/NosEvenment.css'
import imgDesign from './images/mask-2.png'
import imgDesign1 from './images/img-design1.png'
import { Link } from 'react-router-dom';

const NosEvenment  = () => {
    return(  <>

    <div className='container-fluid nosEvenment-container' style={{ backgroundColor: '#D6D6D6' }}>
    <div className='row'>
        <div className='col-lg-12 pt-5'>
            <div className='title-nos text-center mt-5 pt-5'>
 <h1 className='titre-evenment'>NOS ÉVÈNEMENTS</h1>
            </div>
                 </div>
     
    <div className="col-lg-6 col-sm-12 mb-4 mt-5 d-flex justify-content-end mx-auto align-items-center text-center card-dev-1">
      <div className="card h-100 card-first ">
        <div className='card-dev'>
<img src={imgDesign} alt='design' className='img-design img-fluid'   style={{
          width: "100%",
          height: "380px",
          objectFit: "contain",
          display: "block"
        }}/>
        </div>
        
        <div className="card-body card-body-10 text-center" style={{  borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px"}}>
          <div className='row px-3'>
            <div className='col-lg-6 col-sm-12 d-flex align-items-center mb-2 ps-2' style={{borderRadius:"15px 15px 15px",}}>
          <span className="ps-3"style={{color:'#c32942', fontWeight:"700",fontSize:"18px"}}>Marketing digital</span>
                  </div>
                       <div className='col-lg-6 col-sm-12 ps-5'>
   <div className='date-container  d-flex justify-content-end align-items-center ms-5'>
   <h5 className='ps-2 pt-2 pe-2'style={{color:"#ffff",fontSize:"16px"}} >10:00 - 16:00</h5>
  </div>
      </div>
          </div>
         <p className="text-marketing">Venez assister à notre journée portes ouvertes qui aura lieu le 15 Janvier 2022 à partir de 10H. C’est gratuit ! N’hésitez pas à nous rendre visite . Soyez les bienvenus !</p>
        </div>
      </div>
    </div>
    <div className="col-lg-6 col-sm-12 mb-4 mt-5 d-flex justify-content-start mx-auto align-items-center text-center">
      <div className="card h-100 card-nos">
        <div className='card-dev'>
<img src={imgDesign1} alt='design' className='img-design1 img-fluid'   style={{
          width: "100%",
          height: "380px",
          objectFit: "contain",
          display: "block"
        }}/>
        </div>
        
        <div className="card-body text-center" style={{  borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px"}}>
          <div className='row px-3 card-body-9'>
            <div className='col-lg-6 col-sm-12 d-flex align-items-center mb-2 ps-2' style={{borderRadius:"15px 15px 15px",}}>
          <span className="ps-3"style={{color:'#c32942', fontWeight:"700",fontSize:"18px"}}>Marketing digital</span>
                  </div>
     <div className='col-lg-6 col-sm-12 ps-5'>
   <div className='date-container  d-flex justify-content-end align-items-center ms-5'>
   <h5 className='ps-2 pt-2 pe-2'style={{color:"#ffff",fontSize:"16px"}} >10:00 - 16:00</h5>
  </div>
      </div>
          </div>
         <p className="text-marketing-1">Venez assister à notre journée portes ouvertes qui aura lieu le 15 Janvier 2022 à partir de 10H. C’est gratuit ! N’hésitez pas à nous rendre visite . Soyez les bienvenus !</p>
        </div>
      </div>
    </div>
      <div className="col-lg-6 col-sm-12 mb-4 mt-5 d-flex justify-content-end mx-auto align-items-center text-center card-dev-1">
      <div className="card h-100 card-first ">
        <div className='card-dev'>
<img src={imgDesign} alt='design' className='img-design img-fluid'   style={{
          width: "100%",
          height: "380px",
          objectFit: "contain",
          display: "block"
        }}/>
        </div>
        
        <div className="card-body card-body-10 text-center" style={{  borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px"}}>
          <div className='row px-3'>
            <div className='col-lg-6 col-sm-12 d-flex align-items-center mb-2 ps-2' style={{borderRadius:"15px 15px 15px",}}>
          <span className="ps-3"style={{color:'#c32942', fontWeight:"700",fontSize:"18px"}}>Marketing digital</span>
                  </div>
                       <div className='col-lg-6 col-sm-12 ps-5'>
   <div className='date-container  d-flex justify-content-end align-items-center ms-5'>
   <h5 className='ps-2 pt-2 pe-2'style={{color:"#ffff",fontSize:"16px"}} >10:00 - 16:00</h5>
  </div>
      </div>
          </div>
         <p className="text-marketing">Venez assister à notre journée portes ouvertes qui aura lieu le 15 Janvier 2022 à partir de 10H. C’est gratuit ! N’hésitez pas à nous rendre visite . Soyez les bienvenus !</p>
        </div>
      </div>
    </div>
     <div className="col-lg-6 col-sm-12 mb-4 mt-5 d-flex justify-content-start mx-auto align-items-center text-center">
      <div className="card h-100 card-nos">
        <div className='card-dev'>
<img src={imgDesign1} alt='design' className='img-design1 img-fluid'   style={{
          width: "100%",
          height: "380px",
          objectFit: "contain",
          display: "block"
        }}/>
        </div>
        
        <div className="card-body text-center" style={{  borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px"}}>
          <div className='row px-3 card-body-9'>
            <div className='col-lg-6 col-sm-12 d-flex align-items-center mb-2 ps-2' style={{borderRadius:"15px 15px 15px",}}>
          <span className="ps-3"style={{color:'#c32942', fontWeight:"700",fontSize:"18px"}}>Marketing digital</span>
                  </div>
     <div className='col-lg-6 col-sm-12 ps-5'>
   <div className='date-container  d-flex justify-content-end align-items-center ms-5'>
   <h5 className='ps-2 pt-2 pe-2'style={{color:"#ffff",fontSize:"16px"}} >10:00 - 16:00</h5>
  </div>
      </div>
          </div>
         <p className="text-marketing-1">Venez assister à notre journée portes ouvertes qui aura lieu le 15 Janvier 2022 à partir de 10H. C’est gratuit ! N’hésitez pas à nous rendre visite . Soyez les bienvenus !</p>
        </div>
      </div>
    </div>
      
   
  {/*add butto*/}
  <section>
  <div className="container-fluid accordion-style pb-5 mb-5">
    <div className="row">
      <div className="col-lg-12 col-sm-12">
        <div className="accordion accordion1  text-center mx-auto justify-content-center accordion-flush pt-5 " id="accordionFlushExample">
          
          <div className="accordion-item text-center position-relative" style={{ borderRadius: "20px" }}>
  <div
    id="flush-collapseOne"
    className="accordion-collapse collapse position-absolute w-100  pb-0"
    style={{
      top: "70%",
      minHeight:"100px",
      padding:"20px",
      zIndex: 1,
      borderRadius: "20px",
      backgroundColor: "white",
    }}
    data-bs-parent="#accordionFlushExample"
  >
    <div className="accordion-body">
<p>all projects</p>
<hr></hr>
<p>design</p>
<hr></hr>
<p>internal and external</p>
<hr></hr>
<p>Touver la solution</p>
    </div>
  </div>

  <h2 className="accordion-header text-center" style={{ borderRadius: "20px" }}>
    <button
      className="accordion-button collapsed accordion-button1"
      style={{ borderRadius: "15px" }}
      
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#flush-collapseOne"
      aria-expanded="false"
      aria-controls="flush-collapseOne"
    >
      VOIR PLUS
    </button>
  </h2>
</div>
        </div> 
      </div>
    </div>
  </div>
</section>
<section className="projects-list">
  {/* Liste des projets ici */}

  {/* Pagination ici */}
 <nav className="pagination-container fixed-bottom bg-white py-2 shadow">
  <ul className="pagination justify-content-center m-0">
    <li className="page-item">
      <Link className="page-link" to="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </Link>
    </li>
    <li className="page-item"><Link className="page-link" to="/evenment">1</Link></li>
    <li className="page-item"><Link className="page-link" to="/formation">2</Link></li>
    <li className="page-item"><Link className="page-link" to="/about">3</Link></li>
    <li className="page-item">
      <Link className="page-link" to="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </Link>
    </li>
  </ul>
</nav>

</section>

<footer>
  {/* Ton footer ici */}
</footer>



    </div>             
    </div>


</>)
  
};

export default  NosEvenment;