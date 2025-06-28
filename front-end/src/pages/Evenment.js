import React from 'react';
import './styles/Evenment.css'
import 'bootstrap/dist/css/bootstrap.css'; 
import imgRectangle from './images/img-rectangle.png'
import imgRectangle2 from './images/img-rectangle2.png'
import imgWright from './images/whrite-1.png'
import imgWork from './images/work-img.png'

import { Link } from 'react-router-dom';

const Evenment  = () => {
    return(  <>

   {/*logon form*/}
  
   <div className='container-fluid  evenmet-container pt-5' style={{ backgroundColor: '#D6D6D6' }}>
    <div className='row pt-5'>
    
        <div className='col-lg-6 col-sm-12 pt-5 mt-5'>
           <div className='text-center title-position1' style={{ fontFamily: 'Poppins',  }}>
  <h1 className='qui' style={{ fontSize: '120px',fontWeight: '400', color: '#393738',lineHeight: '0.8',fontFamily:"Poppins" }}>Qui</h1>
  <h1 className='d-flex pe-2 title-sommes justify-content-end'>sommes</h1>
  <h1 className='pe-5 me-2' style={{ fontSize: '120px', fontWeight: '400', lineHeight: '0.7',color: '#393738',fontFamily:"Poppins"   }}>nous</h1>
</div>

                    
                  
                    <div className="lines-container text-center pt-5">
                       <div className="blue-line mt-3 pt-2" style={{width:"250px"}}></div>
    <hr className='hr-event mb-5'></hr> 
    </div> 
    <div className='text-paragraph mx-auto'>
  <p className='ps-5' style={{letterSpacing:"1.5px"}} >Best Challenge Center est un cabinet de conseil et de formation continue . Il a pour mission d’accompagner les entreprises en leur apportant une réponse efficace
     à leurs besoins en matière de formation et de développement des compétences.</p>
     <p className='ps-5' style={{letterSpacing:"1.5px"}}>nous vous invitons a assisster à nos formations, participer à des workshops, à des évenements, consulter nos séminaires , quelque soit votre domaine d'étude,
         nous sommes à votre disposition pour vous diriger vers les meilleurs choix</p>
  </div>
                                <div className="lines-container3 text-center ps-5" style={{ transform: 'rotate(90deg)',
         transformOrigin: 'left bottom' , top:"0",marginLeft:"40%", paddingTop:"560px",marginTop:"" }}>
                       <div className=" position-relative">
    <hr className='ms-3 ps-4 pt-2 pb-3 ' style={{width:"280px", marginTop:'', paddingRight:"",color:"#9B9B9B",opacity:"100%"}}></hr> <span className='circle' style={{
     position: "absolute",
    border:"2px",
    opacity:"100%",
    top: "0",
    left:"94%",
     right: "0",
    width: "13x",
    height: "13px",
    backgroundColor: "#9B9B9B",
         borderRadius: "50%"
  }}></span> 
    </div>
    </div>


</div>
<div className='col-lg-6 col-sm-12 pt-3 mt-3'>
  <div className='img-rectangle text-center position-relative mb-5'>
    <div className='blue-overlay'></div>
    <img src={imgRectangle} className='img-reg img-fluid' alt='' />
    <hr className='text-center hr-img'></hr> 
      </div>
</div>
         <div className='col-lg-12 col-sm-12 pt-5 mt-5'>
  <div className="title-1">
  <h1 className="title-word">Notre</h1>
  <h1 className="title-word vision-word">vision</h1>
</div>


  <div className='row red-position'>
    <div className='col-lg-6 col-sm-12 mb-5'>
      <div className='text-center '>
        <div className='img-rectangle2 position-relative'>
          <div className='red-overlay'></div>
          <img src={imgRectangle2} alt='' className='img-reg2 img-fluid' />
      
        </div>
      </div>
    </div>

    <div className='col-lg-6'>
                   <div className="lines-container2 pe-3">
                       <div className=" red-line mt-2" style={{width:'230px'}}></div>
    <hr className='text-center hr-red mb-5'  style={{width:"300px"}}></hr> 
    </div> 
      <div className='text-paragraph2 d-flex justify-content-start'>
        <p>Since 1990, Al-Hamoudi established an integrated media system for providing integrated advertising services whether companies, institutions, or individuals, in the Kingdom of Saudi Arabia market. Additionally, it works by an integrated team who armed with perfect knowledge, and the newest technological technical, 
          especially for our services provided at the highest models of quality, accuracy, and creativity.</p>
      </div> 
    </div>
  </div>
</div>
<section className='mt-5'>
  <div className='container-fluid background-image'>
    <div className='row'>
      <div className='col-lg-6 col-sm-12 ps-5'>
        <div className='text-always'>
          <h1 className='heading-always'>
            We are always <br />Happy to assist you
          </h1>
          <Link to="/connect">
          <button type='submit' className='btn btn-white btn-connect'>
            Connectez-nous
          </button>
          </Link>
        </div>
      </div>
      <div className='col-lg-6 col-sm-12 mx-auto'>
        <div className='whrite position-relative'>
          <img src={imgWright} className='img-whrite' alt='' />
        </div>
      </div>
    </div>
  </div>
</section>

<section className='mt-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-12'>
                <div className="text-center mission-text pt-5 mt-5">
  <h1 className="mission-title">Notre</h1>
  <h1 className="mission-title mission-line">Mission</h1>
</div>
          <div className="lines-container4 text-center position-relative">
  <div className="blue-line4 mt-3 pt-2" style={{ width: "240px" }}></div>
  <hr className="text-center hr-4" style={{ width: "460px" }} />
</div>
<div style={{ position: "relative" }}>
  <hr className="hr-2" />
</div>
     <div className="text-center work-position position-relative">
  <div className="second-overlay"></div>
   <img src={imgWork} alt="" className="img-work img-fluid" />
</div>

                                    
                                   
                 <div className='text-paragraph3 mt-5 pt-5 mx-auto ps-3'style={{ marginTop:'50px'}}>
       Since 1990, Al-Hamoudi established an integrated media system for providing integrated advertising services 
       whether companies, institutions, or individuals, in the Kingdom of Saudi Arabia market. Additionally,
        it works by an integrated team who armed with perfect knowledge, and the newest technological technical,
         especially for our services provided at the highest models of quality, accuracy, and creativity.
       
             </div>
            </div>
        </div>
    </div>
</section>
<section className="projects-list">
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

 </div>
 
              
    </div>


</>)
  
};

export default  Evenment;