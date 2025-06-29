import React from 'react';
import './styles/Evenment.css'
import 'bootstrap/dist/css/bootstrap.css'; 
import './styles/About.css'
import imgAbout from './images/img-about2.png'
import imgMeta from './images/Rectangle-meta.png'
import imgMonkey from './images/Rectangle-monkey.png'
import imgSeo from './images/rect-seo.png'
import imgTik from './images/rect-tik.png'
import imgAstro from './images/astro-1.png'
import imgLine from './images/line-grey.png'
import recRect from './images/red-vert.png'
import lineRed from './images/line-red.png'
const About  = () => {
    return(  <>

    <div className='container-fluid about-container' style={{ backgroundColor: '#D6D6D6' }}>
    <div className='row pb-5'>
        <div className='col-lg-6 col-sm-12 pt-5 mt-5 ps-5'>
            <div className='title-about ps-5 pt-5 mt-5'>
                           <h1 className="title2-about">Marketing </h1>
                  <h1 className="title2-about">Digital</h1>
                           <div className="lines-container text-center mt-3 lines-about">
                       <div className="blue-about lines-about mt-2"></div>
    <hr className='text-center mb-5' style={{width:"375px"}}></hr> <span className='mt-2 pt-3 ps-3' style={{
        position: "absolute",
    top: "",
    right: "0",
    width: "10px",
    height: "10px",
    backgroundColor: "#6C6B6B",
    borderRadius: "50%",
    zIndex:"0"
  }}></span> 
    </div>
    <div className='text-justify text-about ms-3'>
                  <p  >Une formation intensive pour maîtriser les techniques de marketing digital et lancer votre nouvelle carrière.</p>
             </div>
             </div>
             <div className='text1-about'>
                <p>20 semaines</p>
                <p>4 heures par semaine</p>
                <p>Heures flexibles</p>
                <p>Soutien Professionel</p>
                <p>Certifications internationales</p>
                <div className='line-hr position-relative'>
                <img className='red-rect' src={recRect} alt='' />
                <img className='line-red' src={lineRed} alt=''/>
              </div>
              </div>
              
         
        </div>
        <div className='col-lg-6 col-sm-12'>
       
            <div className='parent-img  text-center  position-relative'>
              <img className='img-about img-fluid' src={imgAbout} alt=''/>
                         <img className='line-about ps-5' src={imgLine} alt=''/>
            </div>
        </div>
        <section>
            <div className='container-fluid'>
                <div className='col-lg-12'>
                    <div className='title-about3 text-center pt-5' style={{ lineHeight:'1.0'}}>
                        <p>DECOUVREZ UNE NOUVELLE MANIERE  </p>
                       <p>D’APPRENDRE.</p> 
                       <p className='pt-3 title-about4'>Découvrez et maîtrisez les outils et les méthodes qui vous permettront de briller </p>
                       <p className='pt-1 title-about4'>dans l'univers du marketing digital. Les plateformes publicitaires Meta</p>
                    </div>
                </div>
                <div className="container pt-5 mt-5 ">
  <div className="row text-center pt-3 mx-auto" style={{maxWidth:'1100px'}}>
    <div className="col-6 col-md-3 mb-4">
      <img src={imgMeta} className="img-fluid" alt=""/>
    </div>
    <div className="col-6 col-md-3 mb-4">
      <img src={imgMonkey} className="img-fluid" alt=""/>
    </div>
    <div className="col-6 col-md-3 mb-4">
      <img src={imgSeo} className="img-fluid" alt=""/>
    </div>
    <div className="col-6 col-md-3 mb-4">
      <img src={imgTik} className="img-fluid" alt=""/>
    </div>
  </div>
</div>

            </div>
        </section>
   <div
  className="container my-5 pb-2 about-form"
  style={{
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    maxWidth: '1100px',
  }}
>
  <div className="row">
        <div className="col-lg-6 col-sm-12 d-flex align-items-center">
       
           
       
      <form className="w-100 p-4">
         <h1 className='text-center pb-3 justify-contact'>CONTACTEZ<span className='nous ps-2 span-justify '>NOUS</span></h1>
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
    className="form-control custom-textarea"
    placeholder="Message"
    rows="5" 
  ></textarea>
</div>

      
        <button type="button" className="btn btn-danger btn-block mb-4 w-100">
          Envoyer
        </button>

       
      </form>
    </div>

    {/* Image à droite */}
   <div className="col-lg-6 d-flex justify-content-center align-items-center mb-5">
  <div className="astro-container">
    <img
      className="astro-image"
      src={imgAstro}
      alt=""
    />
  </div>
</div>

  </div>
</div>
  <div className=' text-center pt-5 mt-5' >
    <h1 className='titre-about4'>AUTTRES FORMATIONS QUI POURRAIT VOUS </h1>
    <h1 className='titre-about4'>PLAIRE</h1>
  </div>
  <div className='card-position1 text-center mx-auto'>
    <div className='row text-center mt-5 pt-5'>
      <div className="col-lg-4 col-md-6 mb-4">
      <div className="card card-top" style={{ width:"360px", height:"370px", borderRadius:"15px 15px"}}>
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
      <div className="card card-top" style={{ width:"360px", height:"370px", borderRadius:"15px 15px"}}>
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
      <div className="card card-top" style={{ width:"360px", height:"370px", borderRadius:"15px 15px"}}>
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
   
  </div>             
    </div>


</>)
  
};

export default  About;