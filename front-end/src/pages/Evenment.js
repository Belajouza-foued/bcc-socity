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
           <div className='text-center title-position1 text-1 ps-3' style={{ fontFamily: 'Poppins',  }}>
  <h1 className='me-5 pe-5' style={{ fontSize: '133px',fontWeight: '400', color: '#393738',lineHeight: '0.8',fontFamily:"Poppins" }}>Qui</h1>
  <h1 className='title-sommes' style={{ fontSize: '133px',fontFamily:"Poppins"  ,fontWeight: '400', lineHeight: '0.8',color: '#393738'  }}>sommes</h1>
  <h1 className='ps-2' style={{ fontSize: '133px', fontWeight: '400', lineHeight: '0.7',color: '#393738',fontFamily:"Poppins"   }}>nous</h1>
</div>

                    
                  
                    <div className="lines-container text-center pt-5">
                       <div className="blue-line mt-3 pt-2" style={{width:"250px"}}></div>
    <hr className='text-center mb-5' style={{width:"520px"}}></hr> 
    </div> 
    <div className='text-paragraph  pt-5 mx-auto'>
  <p className=''>Best Challenge Center est un cabinet de conseil et de formation continue . Il a pour mission d’accompagner les entreprises en leur apportant une réponse efficace
     à leurs besoins en matière de formation et de développement des compétences.</p>
     <p className='' style={{letterSpacing:"1.3px"}}>nous vous invitons a assisster à nos formations, participer à des workshops, à des évenements, consulter nos séminaires , quelque soit votre domaine d'étude,
         nous sommes à votre disposition pour vous diriger vers les meilleurs choix</p>
  </div>
                                <div className="lines-container3 text-center ps-5" style={{ transform: 'rotate(90deg)',
         transformOrigin: 'left bottom' , top:"0",marginLeft:"43%", paddingTop:"560px",marginTop:"" }}>
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
         <div className='col-lg-12 pt-5 mt-5'>
  <div className='title-1'>
    <h1 className="mt-5 ps-5 ms-2 pt-5"style={{ fontWeight: '400', fontFamily:'Poppins',fontSize: '183px',color:"#393738"}}>Notre</h1>
    <h1 className=' pt-3 ps-5 ms-3' style={{ fontWeight: '400', fontSize: '183px', lineHeight:'0.3',color:"#393738", fontFamily:'Poppins' }}>vision</h1>
  </div>

  <div className='row red-position'>
    <div className='col-lg-7 col-sm-12 mb-5'>
      <div className='text-center '>
        <div className='img-rectangle2 position-relative'>
          <div className='red-overlay'></div>
          <img src={imgRectangle2} alt='' className='img-reg2 ps-5 img-fluid' />
      
        </div>
      </div>
    </div>

    <div className='col-lg-5'>
                   <div className="lines-container2 pe-3">
                       <div className=" red-line mt-2" style={{width:'230px'}}></div>
    <hr className='text-center hr-red mb-5'  style={{width:"300px"}}></hr> 
    </div> 
      <div className='text-paragraph2'>
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
    <div className='text-always' style={{
  marginTop: "-40px",  /* remonte l’élément */
  lineHeight: "1.9",
  fontFamily:"Inter",
  fontWeight:"700",
  fontSize: '65px',
  letterSpacing: "1px",
 
}}>
  <h1 className='mt-4 pt-3' style={{ fontSize: '60px' }}>
    We are always <br />Happy to assist you
  </h1>
  <button type='submit' className='btn btn-white text-center mx-auto ps-4 pt-2 pb-2 pe-4 mb-4' style={{ fontSize: '18px' }}>
    Connectez-nous
  </button>
</div>

    </div>
     
    <div className='col-lg-6 col-sm-12 mx-auto'>
      <div className='whrite align-items-center justify-content-center mx-auto '>
        <div className='second-overlay mt-1 ps-2'></div>
        <img src={imgWright} className='img-whrite align-items-center justify-content-center pb-5 mb-5 img-fluid' alt='' />
      </div>
    </div>
  </div>
</div>

</section>
<section className='mt-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-12'>
                <div className='text-center mission-text mb-5'>
                    <h1 className="ps-5 pb-3" style={{ fontWeight: '400', fontSize: '200px',letterSpacing:"0",color:"#393738"}}>Notre</h1>
                    <h1 className=""style={{ fontWeight: '400', fontSize: '200px',letterSpacing:"0",lineHeight:'0.2',color:"#393738"}}>Mission</h1>
                </div>
                          <div className="lines-container4 text-center">
                       <div className="blue-line4 mt-3 pt-2 " style={{width:"240px"}}></div>
    <hr className='text-center  hr-4' style={{width:"460px"}}></hr> 
    </div> 
                <div className='text-center work-position mt-5'>
                    <img src={imgWork} alt='' className='img-work img-fluid'/>
                                    </div>
                                    <div className='position-relative'>
                                      <hr className='hr-2'></hr> 
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

 </div>
 
              
    </div>


</>)
  
};

export default  Evenment;