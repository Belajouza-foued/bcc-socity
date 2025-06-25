import React from 'react';
import './styles/MarkEvenment.css'
import 'bootstrap/dist/css/bootstrap.css'; 
import maskMark from './images/mask-mark.png'
import { Link } from 'react-router-dom';
import imgClock from './images/clock.png'
import imgCalendar from './images/Union.png'
import imgLocal from './images/local.png'
import imgMap from './images/image-map.png'
import imgBaffle from './images/img-baffle.png'
import logoMap from "./images/logo-map.png"
const MarkEvenment  = () => {
    return(  <>

   {/*logon form*/}
   <div className='container-fluid digital-container' style={{ backgroundColor: '#D6D6D6' }}>
<div className="row">
  <div className='col-lg-12 col-sm-12 mt-5'>
    <div className='mark-para mt-5'>
<div className=' text-center pt-5'>
    <button type='submit' className='btn btn-danger btn-markEvenmnt pt-1 pb-1 pe-3 ps-3'>EVENT 01</button>
    <h1 style={{fontWeight:"700", fontFamily:"Poppins",fontSize:"80px",color:"3A3838"}}>Marketing Digital</h1>
    <p style={{fontWeight:"400", fontFamily:"Roboto",fontSize:"21px",lineHeight:"1",color:"#393738"}}>Boostez votre présence en ligne et maîtrisez les stratégies</p>
    <p style={{fontWeight:"400", fontFamily:"Roboto",fontSize:"21px",lineHeight:"0.7",color:"#393738"}}>numériques pour propulser votre entreprise !</p>
</div>
    </div>
    <div className='image-mask text-center pt-5 '>
        <img src={maskMark} alt='' className='mask-mark img-fluid' />
        </div>      
  </div>
<div className='col-lg-12 col-sm-12'>
    <div className='row'>
                 <div className='col-lg-9 col-sm-12 mb-5 ps-5'>
  <div className='text-start pt-5 d-flex justify-content-start align-items-start gap-4 ps-5'>
    
    {/* Bloc 1 */}
    <div className=''>
      <img src={imgClock} alt='text-start' className='clock mb-2 me-2' />
      <span style={{color:'#393738', fontWeight:"400", fontSize:"20px"}}>Marketing digital</span>
    </div>

    {/* Bloc 2 */}
    <div className=''>
      <img src={imgCalendar} alt='' className='clock mb-2 me-2' />
      <span style={{color:'#393738', fontWeight:"400", fontSize:"20px"}}>15 janvier 2022</span>
    </div>

    {/* Bloc 3 */}
    <div className=''>
      <img src={imgLocal} alt='' className='clock mb-2 me-2' />
      <span style={{color:'#393738', fontWeight:"400", fontSize:"20px"}}>Sousse</span>
    </div>

  </div>
</div>

     <div className='col-lg-3 col-sm-12 pt-4'>
   <div className="">
        <button type='button' className='btn btn-danger button-mark ps-4 pe-4 pt-3 pb-3'>Contactez Nous</button>
      </div>
      </div>
      <div className='col-lg-5 col-sm-12 pt-3 mt-3'>
          {/*atous*/}
      <div className='text-center pt-5'>
  <h1 className="bienvenue">Bienvenue</h1>
  <h1 className="a-tous pt-5">
    à tous
    <span className='ps-3'>!</span>
  </h1>
</div>
      {/*atous*/}
      </div>
  
      <div className='col-7 mb-3 pt-3 mt-4'>
        <p style={{color:"#6C6B6B", fontWeight:"500",fontSize:"18px", fontFamily:"Poppins",letterSpacing:"3px"}}>Best Challenge Center est un cabinet de conseil et de formation continue . Il a pour mission d’accompagner les entreprises en leur apportant une réponse efficace 
            à leurs besoins en matière de formation et de développement des compétences.</p>
        <p className='pt-2' style={{color:"#6C6B6B", fontWeight:"500",fontSize:"18px", fontFamily:"Poppins",letterSpacing:"3px"}}>
nous vous invitons a assisster à nos formations, participer à des workshops, à des évenements, consulter nos séminaires , quelque soit votre domaine d'étude,
 nous sommes à votre disposition pour vous diriger vers les meilleurs choix</p>
      </div>
      <div className='container'></div>
      <div className='col-lg-6 col-sm-12'>
        
        <div className='text-justify ms-5 ps-5 mt-5 pt-5'>
    <h2 style={{color:"#393738", fontWeight:"600",fontSize:"40px", fontFamily:"Poppins"}}>Event info :</h2>
<p className="text-justify" style={{fontFamily:'Poppins',color:"#808080",fontSize:"16px",maxWidth:"550px"}}>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. 
    Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.</p>
    </div>
    <div className='row pt-4'>
        <div className='col-8'>
            <div className='text-center'style={{lineHeight:"1.8"}}>
            <div className='text-center pe-5 me-3'>
              <img src={imgCalendar} alt='' className='clock me-2 mb-2'/>
            <span style={{color:"#393738", fontWeight:"400",fontSize:"18px", fontFamily:"Poppins"}}>Start Date:</span>
            </div>
                  <div className='text-justify pe-5 me-2'>
              <img src={imgCalendar} alt='' className='clock me-2 mb-2 ps-1'/>
            <span style={{color:"#393738", fontWeight:"400",fontSize:"21px", fontFamily:"Poppins"}}>Start Date:</span>
            </div>
              <div className='text-justify pe-5 me-3'>
              <img src={imgCalendar} alt='' className='clock me-2 mb-2'/>
            <span style={{color:"#393738", fontWeight:"400",fontSize:"21px", fontFamily:"Poppins"}}>End Date:</span>
            </div>
              <div className='text-justify ps-5 ms-5'>
              <img src={imgCalendar} alt='' className='clock me-2 mb-2 ps-2'/>
            <span style={{color:"#393738", fontWeight:"400",fontSize:"21px", fontFamily:"Poppins"}}>Numbers of participants :</span>
            </div>
</div>
        </div>
        <div className='col-4'>
            <div className=''style={{color:"#393738", fontWeight:"400",fontSize:"15px", fontFamily:"Poppins",lineHeight:"1.5"}}>
            <p className=''>15 janvier 2022</p>
            <p className=''>10:00 AM</p>
            <p className=''>15 janvier 2022</p>
            <p className=''>50 personnes</p>
            </div>
        </div>
    </div>
      </div>
      <div className='col-lg-6 col-sm-12'>
<div className='image-map pt-3 mt-3 text-center position-relative'>
    <img src={logoMap} className="logo-map" alt=''/>
        <img className='img-map mt-5 pt-5 img-fluid'  src={imgMap} alt=''/>
</div>
      </div>
      <div className='col-12'>
        <div className='text-center pt-5 mt-5'>
            <h1 style={{color:"#393738", fontWeight:"700",fontSize:"40px", fontFamily:"Poppins"}}>Autres Evènements Qui Pourraient Vous</h1>
            <h1 style={{color:"#393738", fontWeight:"700",fontSize:"40px", fontFamily:"Poppins"}}>Plaire</h1>
        </div>
        <div className='card-position1 text-center mx-auto'>
    <div className='row text-center mt-5 pt-5'>
      <div className="col-lg-4 col-md-6 mb-4">
      <div className="card" style={{ width:"360px", height:"370px", borderRadius:"15px 15px"}}>
        <div className='card-img-top1'></div>
        
        <div className="card-body text-center">
          <div className='row'>
            <div className='col-lg-3 col-sm-12' style={{lineHeight:"0.9"}}>
          <span className="pt-2 ps-1"style={{color:'#c32942', fontWeight:"700",fontSize:"15px"}}>Janvier</span>
          <p style={{color:"#5b99d3",fontSize:"40px",fontWeight:"700"}} className="">19</p>
          </div>
     <div className='col-lg-9 col-sm-12'>
 <p className="card-text"style={{lineHeight:"0.8",position:"relative",left:'-30px'}}>
   <h5 className='pe-5 me-3' style={{fontWeight:"600",fontSize:"17px"}}>Design graphique</h5>
   <p  style={{fontWeight:"400",fontSize:"17px"}}>2025 16 au 19 janvier 2025</p>
   <span className='pe-4 me-1' style={{fontWeight:"400",fontSize:"15.20px",color:"#6A6A6A"}}>PARNASSE CIBLES 1 À 32</span>
          </p>
          </div>
                   </div>
        </div>
      </div>
    </div>
     <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card " style={{ width:"360px", height:"370px", borderRadius:"15px 15px"}}>
       <div className='card-img-top1'></div>
        <div className="card-body text-center">
          <div className='row'>
            <div className='col-lg-3 col-sm-12' style={{lineHeight:"0.9"}}>
          <span className="pt-2 ps-1"style={{color:'#c32942', fontWeight:"700",fontSize:"15px"}}>Janvier</span>
          <p style={{color:"#5b99d3",fontSize:"40px",fontWeight:"700"}} className="">20</p>
          </div>
    <div className='col-lg-9 col-sm-12'>
 <p className="card-text"style={{lineHeight:"0.8",position:"relative",left:'-30px'}}>
   <h5 className='pe-5 me-3' style={{fontWeight:"600",fontSize:"17px"}}>Design graphique</h5>
   <p  style={{fontWeight:"400",fontSize:"17px"}}>2025 16 au 19 janvier 2025</p>
   <span className='pe-4 me-1' style={{fontWeight:"400",fontSize:"15.20px",color:"#6A6A6A"}}>PARNASSE CIBLES 1 À 32</span>
          </p>
          </div>
                   </div>
        </div>
      </div>
    </div>
     <div className="col-lg-4 col-md-6 mb-4 col-sm-12">
      <div className="card" style={{ width:"360px", height:"370px", borderRadius:"15px 15px"}}>
                <div className='card-img-top1'></div>
        <div className="card-body text-center">
          <div className='row'>
            <div className='col-3' style={{lineHeight:"0.9"}}>
          <span className="pt-2 ps-1"style={{color:'#c32942', fontWeight:"700",fontSize:"15px"}}>Janvier</span>
          <p style={{color:"#5b99d3",fontSize:"40px",fontWeight:"700"}} className="">21</p>
          </div>
     <div className='col-lg-9 col-sm-12'>
 <p className="card-text"style={{lineHeight:"0.8",position:"relative",left:'-30px'}}>
   <h5 className='pe-5 me-3' style={{fontWeight:"600",fontSize:"17px"}}>Design graphique</h5>
   <p  style={{fontWeight:"400",fontSize:"17px"}}>2025 16 au 19 janvier 2025</p>
   <span className='pe-4 me-1' style={{fontWeight:"400",fontSize:"15.20px",color:"#6A6A6A"}}>PARNASSE CIBLES 1 À 32</span>
          </p>
          </div>
                   </div>
        </div>
      </div>
    </div>
    
    
   
  
 
 </div>
</div>
 <div className='row pt-5 mt-5 position-relative'>
 <div className='col-2 ps-3'>
<div className='image-baffle'>
    <img src={imgBaffle} alt='' className='img-baffle'/>
</div>
 </div>
 <div className='col-10 pt-3 mt-3'>
 <div className='baffle-container mt-5 pt-5 ps-5 ms-5'>
    <h1 className=' title-baffle ps-3 pt-5' style={{color:"#393738", fontWeight:"500",fontSize:"30px", fontFamily:"Poppins",opacity:"70%",letterSpacing:'1px'}}>Vivez l’expérience, saisissez l’opportunité !</h1>
 </div>
 </div>
 </div>
      </div>
      </div>
      </div>
        

 


<section className="projects-list">
  {/* Liste des projets ici */}

  {/* Pagination ici */}
 <nav className="pagination-container fixed-bottom bg-white py-2 shadow">
  <ul className="pagination justify-content-center m-0">
    <li className="page-item">
      <Link className="page-link" to="about" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </Link>
    </li>
    <li className="page-item"><Link className="page-link" to="/evenment">1</Link></li>
    <li className="page-item"><Link className="page-link" to="/formation">2</Link></li>
    <li className="page-item"><Link className="page-link" to="/nosEvenement">3</Link></li>
     <li className="page-item"><Link className="page-link" to="/evenment">4</Link></li>
    <li className="page-item">
      <Link className="page-link" to="/evenment" aria-label="Next">
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

export default  MarkEvenment;