import React, { useState } from 'react';
import './styles/Home.css'
import 'bootstrap/dist/css/bootstrap.css'; 
import image8 from './images/slider-3.jpg'
import image9 from './images/slider-2.jpg'
import image10 from './images/slider-1.jpg'
import imgHome from './images/group-home.png'
import imgHome1 from './images/groupe-home1.png'
import imgHome2 from './images/groupe-home2.png'
import imgHome3 from './images/groupe-home3.png'
import imgHome4 from './images/groupe-home4.png'
import imgTampon from './assets/tampon.png'
import imgElipsse from './assets/elipsse-1.png'
import imgTest from './assets/test-profile.png'
import MCProjectsSection from'../components/MCProjectsSection'
import CardDesign from '../components/CardDesign';
import number40 from './assets/number-40.png'
import number20 from './assets/number-20.png'
import number30 from './assets/number-30.png'
import number10 from './assets/number-10.png'
import imgChihen from './assets/logo-chihen.png'
import imgHealth from './assets/health.png'
import imgNetflix from './assets/Netflix.png'
import imgAbc from './assets/ABC.png'
import imgBip from './assets/Bib.png'
import imgHr from './assets/icon-hr.png'
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';
import image5 from './images/Logo.png'
import logoVideo from '../pages/images/Logo.png'
const Home  = () => {
  const [open,setOpen] = useState(false)
   const [open2,setOpen2] = useState(false)
    const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };
    const onVideoEnd = () => {
    setShowVideo(false); // masque la vidéo quand elle se termine
  };

  const opts = {
    height: '400',
    width: '580',
     playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 1,
      rel: 0,
    },
  }

    return(  <>
  
   <div className='container-fluid pt-5'style={{ backgroundColor: '#D6D6D6' }}>
<div className="row">
  <div className="col-12">
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={image8} className="d-block w-100 img-responsive" alt="..." />
        <div className="carousel-caption d-md-block">
          <h1 className="caroussel-1">Best Challenge Center</h1>
          <p className="caroussel-second">Formations & Consulting</p>
          <p className="caroussel-3">Cabinet de formation professionnelle, de consulting, et de<br />développements informatiques Etudes, Conseil, Formation<br />et Audit</p>
          <div className="caroussel-button">
            <button className="btn btn-danger caroussel-button1">À propos de nous</button>
          </div>
        </div>
      </div>

      <div className="carousel-item">
        <img src={image9} className="d-block w-100 img-responsive" alt="..." />
        <div className="carousel-caption d-md-block">
          <h1 className="caroussel-1">Best Challenge Center</h1>
          <p className="caroussel-second">Formations & Consulting</p>
          <p className="caroussel-3">Cabinet de formation professionnelle, de consulting, et de<br />développements informatiques Etudes, Conseil, Formation<br />et Audit</p>
          <div className="caroussel-button">
            <button className="btn btn-danger caroussel-button1">À propos de nous</button>
          </div>
        </div>
      </div>

      <div className="carousel-item">
        <img src={image10} className="d-block w-100 img-responsive" alt="..." />
        <div className="carousel-caption d-md-block">
          <h1 className="caroussel-1">Best Challenge Center</h1>
          <p className="caroussel-second">Formations & Consulting</p>
          <p className="caroussel-3">Cabinet de formation professionnelle, de consulting, et de<br />développements informatiques Etudes, Conseil, Formation<br />et Audit</p>
          <div className="caroussel-button">
            <button className="btn btn-danger caroussel-button1">À propos de nous</button>
          </div>
        </div>
      </div>
    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

  
    {/*image button hover*/}
    <div className='col-lg-6 col-sm-12 pt-5 mt-5' >
    <div className='container position-home ps-5 me-2'>
    <h1 className='pt-2'>Why chose</h1>
    <h2 className='pt-2'>Assisting individuals in locating the appropriate real estate.</h2>
      <p className=''>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.</p>
     <div className='img-homes img-fluid'>
      <img className='img-home img-fluid pt-0 pb-0' src={imgHome} alt=''/>
       <img className='img-home1 img-fluid' src={imgHome1} alt=''/>
       </div>
      </div>
      </div>
      <div className='col-lg-6 col-sm-12'>
        <div className='position-image pt-5'>
        <div className='image-tampon text-center position-relative'style={{zIndex:""}}>
          <img className='img-tampon img-fluid position-relative'  src={imgTampon} alt=''/>
          <img className='img-home2 img-fluid position-relative' src={imgHome2} alt=''/>
         <img className='img-home3 img-fluid position-relative' src={imgHome3} alt=''/>
        <img className='img-home4 img-fluid position-relative' src={imgHome4} alt=''/>
        </div>
        </div>
              </div>
                <div className='container-fluid back-video'>
    <div className='row'>
<div className='col-lg-6 col-sm-12 rounded-5'>
      <div className='card-video mx-auto pt-5 mt-5'>
         <img src={logoVideo} alt="" className="image-video mx-auto"/>
      <p className='sentence-video'>Lire la vidéo au dessus</p>
      
      {!showVideo ? (
        <button className='btn-video form-control' onClick={handleClick} style={{
          padding: '10px 20px',
          fontSize: '20px',
          backgroundColor: '#AD2E43',
          color: '#fff',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer'
        }}>
          Lire la vidéo
        </button>
      ) : (
       <div className="video-container">
  <YouTube
    videoId="Maqe7xTQmRs"
    opts={opts}
    onEnd={onVideoEnd}
    className="my-video"
  />
</div>
      )}
    </div>
    </div>
   
    {/*image button hover*/}
  <div className='col-lg-6 col-sm-12 rounded-5  web-development mx-auto'>
                    <div className='card-text text-center mx-auto'style={{padding:"20px"}}>
              <img src={image5} alt="" style={{height:"70px", width:"70px"}} className="image-web mx-auto"/>
              <div className='border-video'>
              <h4 className='borderhome2 ps-3'><b className='hover'>Bienvenue à notre cabinet</b></h4>
                     <p className='mx-auto border-text pt-3'>Best Challenge Center est un cabinet de conseil et de formation continue . Il a pour mission d’accompagner les entreprises en leur apportant une réponse efficace à leurs besoins en matière de formation et de développement des compétences.</p>
                     </div>
              <Link to="/evenment"><button className="btn btn-dark rounded-pill px-4 mt-3 shadow pe-4 ">Discover</button></Link>
          </div>
          </div>
           </div>
    </div>
              <section>
              <div className='col-12'>
                <div className='container pt-5 mt-5'>
                  <div className='row'>
                  <div className='text-center'>
                     <h1 className='pt-2' style={{color:"#A6354D",fontSize:"20px",fontWeight:"500",letterSpacing:"2px"}}>NOS SERVICES</h1>
                   <h2 className='pt-2' style={{fontFamily:'Poppins',color:"#393738",fontSize:"40px",fontWeight:"600"}}>Donec porttitor euismod dignissim</h2>
                  </div>
                  <div className='col-lg-4 col-sm-12 mt-5 pt-3'>
                    <div className='container img-radius position-relative'>
                                              <img src={imgElipsse} className='img-elipsse img-fluid' alt=''/>
<span className='position-absolute' style={{fontSize:"51px",fontFamily:'Poppins',fontWeight:"400",color:"#fff",left:"30px",top:"15px"}}>01</span>
                      <h4 className='position-absolute' style={{color:"#2B2B2B",fontSize:"20px",fontWeight:"500",fontFamily:"Poppins",left:"65px",top:"160px"}}>Buy a New Home</h4>
                      <p className='position-absolute text-center' style={{color:"#808080",fontSize:"16px",fontWeight:"400",fontFamily:"Poppins",left:"40px",top:"200px",maxWidth:"220px"}}>Donec porttitor euismod dignissim.
                         Nullam a lacinia ipsum, nec dignissim purus. </p>
                            </div>
                  </div>
                    <div className='col-lg-4 col-sm-12 mt-5 pt-3'>
                    <div className='container img-radius position-relative'>
                    <img src={imgElipsse} className='img-elipsse img-fluid' alt=''/>
<span className='position-absolute' style={{fontSize:"51px",fontFamily:'Poppins',fontWeight:"400",color:"#fff",left:"25px",top:"15px"}}>02</span>
                       <h4 className='position-absolute' style={{color:"#2B2B2B",fontSize:"20px",fontWeight:"500",fontFamily:"Poppins",left:"65px",top:"160px"}}>Buy a New Home</h4>
                      <p className='position-absolute text-center' style={{color:"#808080",fontSize:"16px",fontWeight:"400",fontFamily:"Poppins",left:"40px",top:"200px",maxWidth:"220px"}}>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
                                        </div>
                  </div>
                     <div className='col-lg-4 col-sm-12 mt-5 pt-3'>
                    <div className='container img-radius position-relative'>
                    
                        <img src={imgElipsse} className='img-elipsse' alt=''/>
<span className='position-absolute' style={{fontSize:"51px",fontFamily:'Poppins',fontWeight:"400",color:"#fff",left:"24px",top:"15px"}}>03</span>
                       <h4 className='position-absolute' style={{color:"#2B2B2B",fontSize:"20px",fontWeight:"500",fontFamily:"Poppins",left:"65px",top:"160px"}}>Buy a New Home</h4>
                      <p className='position-absolute text-center' style={{color:"#808080",fontSize:"16px",fontWeight:"400",fontFamily:"Poppins",left:"40px",top:"200px",maxWidth:"220px"}}>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
                         </div>
                  </div>
                  <div className='col-12 container-fluid'>
                      <div className='text-center pt-5'>
                     <h1 className='pt-2' style={{color:"#A6354D",fontSize:"20px",fontWeight:"500",letterSpacing:"2px"}}>NOS FORMATIONS</h1>
                   <h2 className='pt-2' style={{fontFamily:'Poppins',color:"#393738",fontSize:"40px",fontWeight:"600"}}>Donec porttitor euismod dignissim</h2>
                  </div>
                
         <MCProjectsSection />

<div className='d-flex justify-content-center align-items-center gap-2 mt-5 pt-5'>
  <span className='dot bg-red'></span>
  <span className='dot'></span>
  <span className='dot'></span>
  <span className='dot'></span>
</div>
<section className='mt-5'>
<div className='container-fluid bg-home mt-5'>
  <div className='row'>
    <div className='col-lg-12 col-sm-12'>
      <div className='text-center pt-3 mt-5'style={{fontFamily:"Poppins",fontWeight:"700",fontSize:"32px",zIndex:"1",color:"#ffff"}}>
    <h2>Découvrez une nouvelle façon </h2>
       <h2>d'apprendre ludique, immersive et</h2>
          <h2>interactive</h2>
            <button
        className="btn btn-outline-secondary custom-button mt-4"
        onClick={() => setOpen(!open)}
      >
        CONTACTEZ-NOUS <span className="arrow-icon">{open ? '<' : '>'}</span>
      </button>

      <div className={`slide-panel ${open ? 'open' : ''}`}>
        <div className="p-4">
          <p>All projects</p>
          <hr />
          <p>Design</p>
          <hr />
          <p>Internal and external</p>
          <hr />
          <p>Trouvez la solution</p>
        </div>
      </div>
         </div>
        </div>
      
  </div>
</div>
</section>
  <div className='col-12'>
          <div className='text-center mt-5 pt-4'>
                     <h1 className='pt-2' style={{color:"#A6354D",fontSize:"20px",fontWeight:"500",letterSpacing:"1.5px"}}>NOS ÉVENEMENTS</h1>
                   <h2 className='pt-2' style={{fontFamily:'Poppins',color:"#393738",fontSize:"40px",fontWeight:"600"}}>Donec porttitor euismod dignissim</h2>
                  </div>
                  <div className='pt-5 mt-3'>
                  <CardDesign/>
                  </div>
                  <div className="d-flex justify-content-center mt-3 pt-3">
  <div className="text-center position-relative">
    <button
      className="btn btn-outline-secondary custom-button2"
      onClick={() => setOpen2(!open2)}
    >
      VOIR PLUS <span className="arrow-icon2">{open2 ? '<' : '>'}</span>
    </button>

    <div className={`slide-panel2 ${open2 ? 'open2' : ''}`}>
      <div className="p-4">
        <p>All projects</p>
        <hr />
        <p>Design</p>
        <hr />
        <p>Internal and external</p>
        <hr />
        <p>Trouvez la solution</p>
      </div>
    </div>
  </div>
</div>
 <div className='col-lg-12 col-sm-12 text-center mt-5'>
                     <h1 className='pt-2' style={{color:"#A6354D",fontSize:"20px",fontWeight:"500",letterSpacing:"2px"}}>TESTIMONIAL</h1>
                   <h2 className='pt-2' style={{fontFamily:'Poppins',color:"#393738",fontSize:"40px",fontWeight:"600"}}>Ce que disent nos étudiants</h2>
                  </div>
                  <div className='row pt-5 mt-5'>
                   <div className='col-lg-4 col-sm-12 mt-5'>
                    <div className='container img-testimonial'>
                      <div className='position-relative'>
                         <img src={imgTest} className='img-test' alt=''/>
                        <h4 className='position-absolute' style={{color:"#AD2E43",fontSize:"17px",fontWeight:"700",fontFamily:"Poppins",left:"33px",top:"160px"}}>Ron Smith</h4>
                           <p className='position-absolute' style={{color:"#7A7A7A",fontSize:"14px",fontWeight:"400",fontFamily:"Poppins",left:"33px",top:"175px"}}>front-end dev</p>
                      <p className='position-absolute text-justify' style={{color:"#353535",fontSize:"17px",fontWeight:"400",fontFamily:"",left:"30px",top:"200px",maxWidth:"260px"}}>Cras a magna ut lectus vestibulum ullamcorper.
                         Etiam laoreet semper velit, vel fringilla tortor pharetra nec. </p>
                      </div>

                                          </div>
                  </div>
                    <div className='col-lg-4 col-sm-12 mt-5'>
                    <div className='container img-testimonial'>
                      <div className='position-relative'>
                         <img src={imgTest} className='img-test' alt=''/>
                        <h4 className='position-absolute' style={{color:"#AD2E43",fontSize:"17px",fontWeight:"700",fontFamily:"Poppins",left:"33px",top:"160px"}}>Ron Smith</h4>
                           <p className='position-absolute' style={{color:"#7A7A7A",fontSize:"14px",fontWeight:"400",fontFamily:"Poppins",left:"33px",top:"175px"}}>front-end dev</p>
                      <p className='position-absolute text-justify' style={{color:"#353535",fontSize:"17px",fontWeight:"400",fontFamily:"",left:"30px",top:"200px",maxWidth:"260px"}}>Cras a magna ut lectus vestibulum ullamcorper.
                         Etiam laoreet semper velit, vel fringilla tortor pharetra nec. </p>
                      </div>
                      
                                          </div>
                  </div>
                    <div className='col-lg-4 col-sm-12 mt-5'>
                    <div className='container img-testimonial'>
                      <div className='position-relative'>
                         <img src={imgTest} className='img-test' alt=''/>
                        <h4 className='position-absolute' style={{color:"#AD2E43",fontSize:"17px",fontWeight:"700",fontFamily:"Poppins",left:"33px",top:"160px"}}>Ron Smith</h4>
                           <p className='position-absolute' style={{color:"#7A7A7A",fontSize:"14px",fontWeight:"400",fontFamily:"Poppins",left:"33px",top:"175px"}}>front-end dev</p>
                      <p className='position-absolute text-justify' style={{color:"#353535",fontSize:"17px",fontWeight:"400",fontFamily:"",left:"30px",top:"200px",maxWidth:"260px"}}>Cras a magna ut lectus vestibulum ullamcorper.
                         Etiam laoreet semper velit, vel fringilla tortor pharetra nec. </p>
      </div>
     </div>
   </div>
</div>
<div className='d-flex justify-content-center align-items-center gap-2 mt-5 pt-5'>
  <span className='dot bg-red'></span>
  <span className='dot'></span>
  <span className='dot'></span>
  <span className='dot'></span>
</div>
<section className='mt-4 pt-4'>
<div className='container-fluid bg-number mt-5'>
  <div className='row numbers text-center mx-auto'style={{maxWidth:"1300px"}}>
       <div className='col-lg-3 col-sm-12'>
      <div className='text-center'style={{marginTop:"110px"}}>
        <img src={number40} alt='' className='number-40'/>
<p className='' style={{color:"#fff",fontSize:"18px",fontWeight:"400",fontFamily:"Poppins",paddingTop:"40px"}}>INSTRUCTEURS PROFESSIONNELS</p>
      </div>
     </div>
     <div className='col-lg-3 col-sm-12'>
      <div className='text-center'style={{marginTop:"110px"}}>
        <img src={number20} alt='' className='number-20'/>
<p className='' style={{color:"#fff",fontSize:"18px",fontWeight:"400",fontFamily:"Poppins",paddingTop:"40px"}}>DE NOUVEAUX COURS CHAQUE <br/>ANNÉE</p>
      </div>
     </div>
     <div className='col-lg-3 col-sm-12'>
      <div className='text-center'style={{marginTop:"110px"}}>
        <img src={number10} alt='' className='number-10'/>
<p className='' style={{color:"#fff",fontSize:"18px",fontWeight:"400",fontFamily:"Poppins",paddingTop:"40px"}}>SÉANCES EN LIGNES TOUS <br/>LES MOIS</p>
      </div>
     </div>
     <div className='col-lg-3 col-sm-12'>
      <div className='text-center'style={{marginTop:"110px"}}>
        <img src={number30} alt='' className='number-30'/>
<p className='' style={{color:"#fff",fontSize:"18px",fontWeight:"400",fontFamily:"Poppins",paddingTop:"40px"}}>ENSEIGNANT PROFESSIONNEL</p>
      </div>
     </div>
      
      
  </div>
</div>
</section>

                 </div>
                      <div className='col-lg-12 col-sm-12 text-center mt-5 pt-5'>
                     <h1 className='pt-2' style={{color:"#A6354D",fontSize:"20px",fontWeight:"500",letterSpacing:"1.5px"}}>NOS PARTENAIRES</h1>
                   <h2 className='pt-2' style={{fontFamily:'Poppins',color:"#393738",fontSize:"40px",fontWeight:"600"}}>Ce que disent nos étudiants</h2>
                  </div>
                  <div className='container-fluid pt-2 '>
                  <div className='row pt-5 mt-5' >
                  <div className='col-lg-3 col-sm-12 '>
                    <div className=''>
                      <img className='' src={imgChihen} alt=''/>
                    <span className='ps-3' style={{fontFamily:"KoHo",fontSize:'33px',fontWeight:"500",color:"#666666", position: 'relative',top:"12px" }}>UNESCO</span>
                    </div>
                  </div>
                  <div className='col-lg-2 col-sm-12'>
                     <div className=''>
                      <img className='' src={imgHealth} alt=''/>
                    <span className='' style={{fontFamily:"Inter",fontSize:'16px',fontWeight:"600",color:"#666666",position:'relative',top:"-10px" }}>WORLD HEALT </span>
                    <p style={{fontFamily:"Inter",fontSize:'16px',fontWeight:"600",color:"#666666",position:'relative',left:"75px",top:"-38px" }}>ORGANISATION</p>
                    </div>
                  </div>
                  <div className='col-lg-2 col-sm-12'>
                     <div className='text-center'>
                      <img className=''style={{position:'relative',top:'-15px',left:"5px"}} src={imgNetflix} alt=''/>
                    </div>
                  </div>
                    <div className='col-lg-2 col-sm-12'>
                     <div className=''>
                      <img className='' src={imgAbc} alt=''/>
                    <span className='' style={{fontFamily:"Jua",fontSize:'23.50px',fontWeight:"400",color:"#666666",position:'relative',top:"-10px",left:"8px",letterSpacing:"3px" }}>KINDER</span>
                       <p style={{fontFamily:"Jua",fontSize:'23px',fontWeight:"400",color:"#666666",position:'relative',left:"75px",top:"-38px",letterSpacing:"2px" }}>GARTEN</p>
                    </div>
                  </div>
                   <div className='col-lg-3 col-sm-12'>
                    <div className='text-center ps-5'>
                      <img className='' style={{position:"relative", left:"20px"}} src={imgBip} alt=''/>
                    <span className='ps-3' style={{fontFamily:"Krona one",fontSize:'22.96px',fontWeight:"500",color:"#666666", position: 'relative',top:"12px" }}>BABYLOV</span>
                    </div>
                  </div>
                  
</div>
</div>
<div className='student-container-wrapper vw-100'>
<div className='container-fluid student-container px-0 pt-3 pb-3 '>
  <div className='row gx-0'>
  <div className='col-lg-12 col-sm-12 text-center mt-5 pt-4'>
                     <h1 className='pt-5' style={{color:"#A6354D",fontSize:"20px",fontWeight:"500",letterSpacing:"1.5px"}}>NOS CONTACTES</h1>
 <h2 className='pt-2' style={{fontFamily:'Poppins',color:"#393738",fontSize:"40px",fontWeight:"600"}}>Ce que disent nos étudiants</h2>
                  </div>
                                      <div className='col-lg-4 col-sm-12 pt-5'>
                    <div className='text-justify ps-5 ms-5 mt-2 pt-5'>
                      <h1 style={{fontFamily:'Inter',fontSize:"56px",fontWeight:"700",  background: 'linear-gradient(to right, #a6354d, #4369cb)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'}}>WE are</h1>
                      <h1 style={{fontFamily:'Inter',fontSize:"56px",fontWeight:"700",  background: 'linear-gradient(to top, #a6354d, #4369cb)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'}}>always</h1>
      <h1 style={{fontFamily:'Inter',fontSize:"56px",fontWeight:"700",  background: 'linear-gradient(to left, #a6354d, #4369cb)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'}}>happy to</h1>
     <h1 style={{fontFamily:'Inter',fontSize:"56px",fontWeight:"700",  background: 'linear-gradient(to right, #4369cb, #a6354d)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'}}>assist you</h1>
                    </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 pt-5'>
                      <div className='pt-5 ps-5 ms-5 pt-5 mt-3'>
                          <h2 className='pt-1' style={{fontFamily:'Poppins',color:"#000000",fontSize:"25px",fontWeight:"600"}}>Email Adress</h2>
<img className='pt-2' src={imgHr} alt=''/>
                          <h2 className='pt-4' style={{fontFamily:'Inter',color:"#000000",fontSize:"25px",fontWeight:"600"}}>contact@best-challenge.com
</h2>
<p className="pt-3" style={{fontFamily:'Inter',color:"#000000",fontSize:"18px",fontWeight:"400",maxWidth:"220px"}}>Assistance hours: 
Monday - Friday 6 am to 8 pm EST</p>

                  </div>
                     </div>
                      <div className='col-lg-4 col-sm-12 pt-5'>
                      <div className='pt-5 ps-5 ms-5 mt-4'>
                          <h2 className='pt-1' style={{fontFamily:'Poppins',color:"#000000",fontSize:"25px",fontWeight:"600"}}>Number</h2>
<img className='pt-2' src={imgHr} alt=''/>
                          <h2 className='pt-4' style={{fontFamily:'Inter',color:"#000000",fontSize:"25px",fontWeight:"600"}}>+216 56 450 450</h2>
<p className="pt-3" style={{fontFamily:'Inter',color:"#000000",fontSize:"18px",fontWeight:"400",maxWidth:"220px"}}>Assistance hours: 
Monday - Friday 6 am to 8 pm EST</p>
                  </div>
                     </div>
                                      
                    
 </div>
 </div>
 </div>
                  </div>
                  </div>
                  </div>
                   </div>

              
              </section>

 



  
</div>
</div>

</>)
  
};

export default  Home;