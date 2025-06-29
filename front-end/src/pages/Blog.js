
import 'bootstrap/dist/css/bootstrap.css'; 
import './styles/Blog.css'
import imgBlog from './images/img-blog.jpg'
import React, { useState } from "react";
import { Link } from 'react-router-dom';
  

const  Blog = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpanded1, setIsExpanded1] = useState(false)
     const [isExpanded2, setIsExpanded2] = useState(false)
       const [isExpanded3, setIsExpanded3] = useState(false)
       const [isExpanded4, setIsExpanded4] = useState(false)
        const [isExpanded5, setIsExpanded5] = useState(false)
 const toggleText = () => {
          setIsExpanded(!isExpanded);
        };
         const toggleText1 = () => {
          setIsExpanded1(!isExpanded1);
        };
          const toggleText2 = () => {
          setIsExpanded2(!isExpanded2);
        };
            const toggleText3 = () => {
          setIsExpanded3(!isExpanded3);
        };
           const toggleText4 = () => {
          setIsExpanded4(!isExpanded4);
        };
          const toggleText5 = () => {
          setIsExpanded5(!isExpanded5);
        };


    return(  <>

    <div className='container-fluid blog-container' style={{ backgroundColor: '#D6D6D6' }}>
    <div className='row'>
        <div className='col-lg-12'>
    <div className='text-center pt-3 mt-5'>
  <h2 className="blog-one">BLOG</h2> 
  <div className='text-center mt-3' style={{ lineHeight: '0.8' }}>
    <p className="blog-two">Welcome to Cooks Delight, where culinary dreams come</p>
    <p className="blog-two">alive! Today</p>
  </div>
</div>

    </div>
      <div className="col-lg-6 mb-4 mt-5 d-flex justify-content-end align-items-center text-center mx-auto ps-5">
      <div className="card h-100" style={{ width:"632px", height:"234pX", borderRadius:"15px", overflow: "hidden"}}>
        <div className='card-dev'>
<img src={imgBlog} alt='design' className='img-design'   style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          display: "block"
        }}/>
        </div>
        
        <div className="card-body text-center" style={{  borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px"}}>
         <div className='col-12 d-flex align-items-center mb-2 ps-2' style={{borderRadius:"15px 15px 15px",}}>
          <span className="ps-3"style={{color:'#393738', fontWeight:"700",fontSize:"20px"}}>Professional Scrum Master</span>
                  </div>
                    <p className="text-blog" style={{fontFamily:"Poppins"}}>Un blog pour Scrum Masters, avec des conseils pratiques et outils pour optimiser les équipes agiles.</p>
          <div className='row px-3'>
  <div className='col-12 d-flex justify-content-between align-items-center mb-2 ps-2' style={{ borderRadius: "15px" }}>
    
    {/* Texte à gauche */}
    <span className="ps-3 pt-2" style={{
      color: '#262522',
      fontFamily: "Roboto",
      fontWeight: "500",
      fontSize: "13px"
    }}>
      40 Min - easy prep - 3 serves
    </span>

    {/* Bouton + texte étendu à droite */}
    <div className='d-flex flex-column align-items-end'>
      {isExpanded && (
        <p id="more-text" style={{ maxWidth: '400px', textAlign: 'right', }}>
          Ce programme est conçu pour renforcer la confiance en soi des participantes, en leur offrant des séances adaptées à leur niveau. Chaque exercice est conçu pour être accessible tout en garantissant des résultats progressifs. De plus, des conseils nutritionnels seront fournis pour accompagner votre entraînement et améliorer vos performances. Rejoignez-nous et commencez dès aujourd'hui à transformer votre santé !
        </p>
      )}
      <button
        className="btn btn-primary btn-class ps-4 pe-4 mt-2"
        id="read-more-btn"
        onClick={toggleText}
      >
        {isExpanded ? 'Lire moins' : 'Lire la suite'}
      </button>
    </div>

  </div>
</div>

               </div>
      </div>
    </div>
     
 <div className="col-lg-6 mb-4 pe-5 mt-5 d-flex justify-content-start align-items-center text-center mx-auto">
      <div className="card h-100" style={{ width:"632px", height:"234pX", borderRadius:"15px", overflow: "hidden"}}>
        <div className='card-dev'>
<img src={imgBlog} alt='design' className='img-design'   style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          display: "block"
        }}/>
        </div>
        
        <div className="card-body text-center" style={{  borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px"}}>
         <div className='col-12 d-flex align-items-center mb-2 ps-2' style={{borderRadius:"15px 15px 15px",}}>
          <span className="ps-3"style={{color:'#393738', fontWeight:"700",fontSize:"20px"}}>Professional Scrum Master</span>
                  </div>
                    <p className="text-blog" style={{fontFamily:"Poppins"}}>Un blog pour Scrum Masters, avec des conseils pratiques et outils pour optimiser les équipes agiles.</p>
          <div className='row px-3'>
  <div className='col-12 d-flex justify-content-between align-items-center mb-2 ps-2' style={{ borderRadius: "15px" }}>
    
    {/* Texte à gauche */}
    <span className="ps-3 pt-2" style={{
      color: '#262522',
      fontFamily: "Roboto",
      fontWeight: "500",
      fontSize: "13px"
    }}>
      30 Min - easy prep - 3 serves
    </span>

    {/* Bouton + texte étendu à droite */}
    <div className='d-flex flex-column align-items-end'>
      {isExpanded1 && (
        <p id="more-text1" style={{ maxWidth: '400px', textAlign: 'right' }}>
          Ce programme est conçu pour renforcer la confiance en soi des participantes, en leur offrant des séances adaptées à leur niveau. Chaque exercice est conçu pour être accessible tout en garantissant des résultats progressifs. De plus, des conseils nutritionnels seront fournis pour accompagner votre entraînement et améliorer vos performances. Rejoignez-nous et commencez dès aujourd'hui à transformer votre santé !
        </p>
      )}
      <button
        className="btn btn-primary btn-class ps-4 pe-4 mt-2"
        id="read-more-btn1"
        onClick={toggleText1}
      >
        {isExpanded1 ? 'Lire moins' : 'Lire la suite'}
      </button>
    </div>

  </div>
</div>

               </div>
      </div>
    </div>
     <div className="col-lg-6 mb-4 mt-5 d-flex justify-content-end align-items-center text-center mx-auto ps-5">
      <div className="card h-100" style={{ width:"632px", height:"234pX", borderRadius:"15px", overflow: "hidden"}}>
        <div className='card-dev'>
<img src={imgBlog} alt='design' className='img-design'   style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          display: "block"
        }}/>
        </div>
        
        <div className="card-body text-center" style={{  borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px"}}>
         <div className='col-12 d-flex align-items-center mb-2 ps-2' style={{borderRadius:"15px 15px 15px",}}>
          <span className="ps-3"style={{color:'#393738', fontWeight:"700",fontSize:"20px"}}>Professional Scrum Master</span>
                  </div>
                    <p className="text-blog" style={{fontFamily:"Poppins"}}>Un blog pour Scrum Masters, avec des conseils pratiques et outils pour optimiser les équipes agiles.</p>
          <div className='row px-3'>
  <div className='col-12 d-flex justify-content-between align-items-center mb-2 ps-2' style={{ borderRadius: "15px" }}>
    
    {/* Texte à gauche */}
    <span className="ps-3 pt-2" style={{
      color: '#262522',
      fontFamily: "Roboto",
      fontWeight: "500",
      fontSize: "13px"
    }}>
      40 Min - easy prep - 3 serves
    </span>

    {/* Bouton + texte étendu à droite */}
    <div className='d-flex flex-column align-items-end'>
      {isExpanded2 && (
        <p id="more-text2" style={{ maxWidth: '400px', textAlign: 'right' }}>
          Ce programme est conçu pour renforcer la confiance en soi des participantes, en leur offrant des séances adaptées à leur niveau. Chaque exercice est conçu pour être accessible tout en garantissant des résultats progressifs. De plus, des conseils nutritionnels seront fournis pour accompagner votre entraînement et améliorer vos performances. Rejoignez-nous et commencez dès aujourd'hui à transformer votre santé !
        </p>
      )}
      <button
        className="btn btn-primary btn-class ps-4 pe-4 mt-2"
        id="read-more-btn2"
        onClick={toggleText2}
      >
        {isExpanded2 ? 'Lire moins' : 'Lire la suite'}
      </button>
    </div>

  </div>
</div>

               </div>
      </div>
    </div>
    <div className="col-lg-6 mb-4 pe-5 mt-5 d-flex justify-content-start align-items-center text-center mx-auto">
      <div className="card h-100" style={{ width:"632px", height:"234pX", borderRadius:"15px", overflow: "hidden"}}>
        <div className='card-dev'>
<img src={imgBlog} alt='design' className='img-design'   style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          display: "block"
        }}/>
        </div>
        
        <div className="card-body text-center" style={{  borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px"}}>
         <div className='col-12 d-flex align-items-center mb-2 ps-2' style={{borderRadius:"15px 15px 15px",}}>
          <span className="ps-3"style={{color:'#393738', fontWeight:"700",fontSize:"20px"}}>Professional Scrum Master</span>
                  </div>
                    <p className="text-blog" style={{fontFamily:"Poppins"}}>Un blog pour Scrum Masters, avec des conseils pratiques et outils pour optimiser les équipes agiles.</p>
          <div className='row px-3'>
  <div className='col-12 d-flex justify-content-between align-items-center mb-2 ps-2' style={{ borderRadius: "15px" }}>
    
    {/* Texte à gauche */}
    <span className="ps-3 pt-2" style={{
      color: '#262522',
      fontFamily: "Roboto",
      fontWeight: "500",
      fontSize: "13px"
    }}>
      20 Min - easy prep - 3 serves
    </span>

    {/* Bouton + texte étendu à droite */}
    <div className='d-flex flex-column align-items-end'>
      {isExpanded3 && (
        <p id="more-text3" style={{ maxWidth: '400px', textAlign: 'right' }}>
          Ce programme est conçu pour renforcer la confiance en soi des participantes, en leur offrant des séances adaptées à leur niveau. Chaque exercice est conçu pour être accessible tout en garantissant des résultats progressifs. De plus, des conseils nutritionnels seront fournis pour accompagner votre entraînement et améliorer vos performances. Rejoignez-nous et commencez dès aujourd'hui à transformer votre santé !
        </p>
      )}
      <button
        className="btn btn-primary btn-class ps-4 pe-4 mt-2"
        id="read-more-btn3"
        onClick={toggleText3}
      >
        {isExpanded3 ? 'Lire moins' : 'Lire la suite'}
      </button>
    </div>

  </div>
</div>

               </div>
      </div>
    </div>
  <div className="col-lg-6 mb-4 mt-5 d-flex justify-content-end align-items-center text-center mx-auto ps-5">
      <div className="card h-100" style={{ width:"632px", height:"234pX", borderRadius:"15px", overflow: "hidden"}}>
        <div className='card-dev'>
<img src={imgBlog} alt='design' className='img-design'   style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          display: "block"
        }}/>
        </div>
        
        <div className="card-body text-center" style={{  borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px"}}>
         <div className='col-12 d-flex align-items-center mb-2 ps-2' style={{borderRadius:"15px 15px 15px",}}>
          <span className="ps-3"style={{color:'#393738', fontWeight:"700",fontSize:"20px"}}>Professional Scrum Master</span>
                  </div>
                    <p className="text-blog" style={{fontFamily:"Poppins"}}>Un blog pour Scrum Masters, avec des conseils pratiques et outils pour optimiser les équipes agiles.</p>
          <div className='row px-3'>
  <div className='col-12 d-flex justify-content-between align-items-center mb-2 ps-2' style={{ borderRadius: "15px" }}>
    
    {/* Texte à gauche */}
    <span className="ps-3 pt-2" style={{
      color: '#262522',
      fontFamily: "Roboto",
      fontWeight: "500",
      fontSize: "13px"
    }}>
      40 Min - easy prep - 3 serves
    </span>

    {/* Bouton + texte étendu à droite */}
    <div className='d-flex flex-column align-items-end'>
      {isExpanded4 && (
        <p id="more-text4" style={{ maxWidth: '400px', textAlign: 'right' }}>
          Ce programme est conçu pour renforcer la confiance en soi des participantes, en leur offrant des séances adaptées à leur niveau. Chaque exercice est conçu pour être accessible tout en garantissant des résultats progressifs. De plus, des conseils nutritionnels seront fournis pour accompagner votre entraînement et améliorer vos performances. Rejoignez-nous et commencez dès aujourd'hui à transformer votre santé !
        </p>
      )}
      <button
        className="btn btn-primary btn-class ps-4 pe-4 mt-2"
        id="read-more-btn4"
        onClick={toggleText4}
      >
        {isExpanded4 ? 'Lire moins' : 'Lire la suite'}
      </button>
    </div>

  </div>
</div>

               </div>
      </div>
    </div>
 <div className="col-lg-6 mb-4 pe-5 mt-5 d-flex justify-content-start align-items-center text-center mx-auto ">
      <div className="card h-100" style={{ width:"632px", height:"234pX", borderRadius:"15px", overflow: "hidden"}}>
        <div className='card-dev'>
<img src={imgBlog} alt='design' className='img-design'   style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          display: "block"
        }}/>
        </div>
        
        <div className="card-body text-center" style={{  borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px"}}>
         <div className='col-12 d-flex align-items-center mb-2 ps-2' style={{borderRadius:"15px 15px 15px",}}>
          <span className="ps-3"style={{color:'#393738', fontWeight:"700",fontSize:"20px"}}>Professional Scrum Master</span>
                  </div>
                    <p className="text-blog" style={{fontFamily:"Poppins"}}>Un blog pour Scrum Masters, avec des conseils pratiques et outils pour optimiser les équipes agiles.</p>
          <div className='row px-3'>
  <div className='col-12 d-flex justify-content-between align-items-center mb-2 ps-2' style={{ borderRadius: "15px" }}>
    
    {/* Texte à gauche */}
    <span className="ps-3 pt-2" style={{
      color: '#262522',
      fontFamily: "Roboto",
      fontWeight: "500",
      fontSize: "13px"
    }}>
      40 Min - easy prep - 3 serves
    </span>

    {/* Bouton + texte étendu à droite */}
    <div className='d-flex flex-column align-items-end'>
      {isExpanded5 && (
        <p id="more-text5" style={{ maxWidth: '400px',
    textAlign: 'justify', }}>
          Ce programme est conçu pour renforcer la confiance en soi des participantes, en leur offrant des séances adaptées à leur niveau. Chaque exercice est conçu pour être accessible tout en garantissant des résultats progressifs. De plus, des conseils nutritionnels seront fournis pour accompagner votre entraînement et améliorer vos performances. Rejoignez-nous et commencez dès aujourd'hui à transformer votre santé !
        </p>
      )}
      <button
        className="btn btn-primary btn-class ps-4 pe-4 mt-2"
        id="read-more-btn5"
        onClick={toggleText5}
      >
        {isExpanded5 ? 'Lire moins' : 'Lire la suite'}
      </button>
    </div>

  </div>
</div>

               </div>
      </div>
    </div>
     <section>
  <div className="container-fluid accordion-style pb-5 mb-5">
    <div className="row">
      <div className="col-lg-12 col-sm-12">
        <div className="accordion accordion1  text-center mx-auto justify-content-center accordion-flush pt-5" id="accordionFlushExample">
          
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
<Link to="/blogService" style={{color:"black",textDecoration:"none"}}>Blog service</Link>
<hr></hr>
<p>internal and external</p>
<hr></hr>
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
  </div>             
    </div>


</>)
  
};

export default  Blog;