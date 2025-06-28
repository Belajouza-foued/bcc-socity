import React from 'react';
import './styles/BlogService.css'
import 'bootstrap/dist/css/bootstrap.css'; 
import heroBlog from './images/blog-service.png'
import imgSwim from './images/rectangle-swiming.png'
import textSwim from './images/text-swim.png'
import whrihteSwim from './images/whrite-swim.png'
import { Link } from 'react-router-dom';





const BlogService  = () => {
    const paragrapheStyle = {
  fontWeight: "300",
  fontFamily: "Poppins",
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#333333",
  opacity: "",
  marginBottom: "16px",
  letterSpacing: "1px"
};

const spanStyle = {
  fontWeight: "500",
  letterSpacing: "1px"
};
const titleStyle = {
     fontWeight: "700",
      fontFamily: "Poppins",
      fontSize: "33px",
  marginBottom: "16px",
  opacity:"80%"
}

    return( 
       <>

    <div className='container-fluid digital-swim' style={{ backgroundColor: '#D6D6D6'}}>
    <div className='row'>
       <div className='col-lg-12 col-sm-12 pt-2'>
    <div className='mark-para mt-5'>
<div className=' text-center pt-5'>
  <Link className='' to="/blog">
    <button type='submit' className='btn btn-danger btn-blogService pt-1 pb-1 pe-3 ps-3 mb-2'>BLOG 1</button></Link>
    <h2 className='' style={{fontWeight:"600", fontFamily:"Poppins",fontSize:"40px",color:"#638EC4",lineHeight:"1.0"}}>Bienvenue sur </h2>
    <h1 className='' style={{fontWeight:"700", fontFamily:"Poppins",fontSize:"80px",color:"#393738",lineHeight:"1.1"}}>Scrum in Action</h1>
    <p style={{fontWeight:"400", fontFamily:"Poppins",fontSize:"21px",lineHeight:"0.8",color:"#393738"}}>Un blog dédié aux Scrum Masters, offrant conseils pratiques, outils</p>
    <p className=""style={{fontWeight:"400", fontFamily:"Poppins",fontSize:"21px",lineHeight:"0.8",color:"#393738"}}>et astuces pour faciliter les équipes agiles. Explorez des sujets clés </p>
<p style={{fontWeight:"400", fontFamily:"Poppins",fontSize:"21px",lineHeight:"0.8",color:"#393738"}}>comme la gestion des sprints et l’amélioration continue.</p>
</div>
    </div>
    <div className='hero-blog text-center pt-5 mt-4 '>
        <img src={heroBlog} alt='' className='blog-service img-fluid' />
        </div>   
       <div className="container-fluid mt-4 pt-5" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <div style={{ maxWidth: '720px', textAlign: 'justify' }}>
    <p style={{
      fontWeight: "300",
      fontFamily: "Poppins",
      fontSize: "21px",
      lineHeight: "1.6",
      color: "#333333",
      opacity: "0.8",
      marginBottom: "16px"
    }}>
      "Scrum in Action" est un espace dédié aux Professional Scrum Masters, conçu pour inspirer, guider et renforcer vos compétences dans l’univers de l’Agilité. Que vous soyez un expert confirmé ou un novice cherchant à mieux comprendre les rouages du framework Scrum, ce blog est votre partenaire idéal.
    </p>

    <h2 style={{
      fontWeight: "400",
      fontFamily: "Poppins",
      fontSize: "24px",
      textAlign: "justify",
      marginBottom: "16px"
    }}>
      Pourquoi "Scrum in Action" ?
    </h2>

    <p style={paragrapheStyle}>
      Le rôle de Scrum Master est bien plus qu’un simple facilitateur : c’est un pilier pour les équipes agiles, un promoteur de la collaboration et un garant de l’amélioration continue. "Scrum in Action" répond aux besoins de ces professionnels en leur offrant :
    </p>

    <p style={paragrapheStyle}>
      <span style={spanStyle}>Des conseils pratiques :</span> Découvrez des techniques éprouvées pour organiser des sprints réussis, gérer efficacement les blocages et favoriser une communication fluide au sein de vos équipes.
    </p>

    <p style={paragrapheStyle}>
      <span style={spanStyle}>Des études de cas :</span> Apprenez des expériences réelles de projets agiles, avec des exemples concrets sur la résolution de problèmes et l’atteinte d’objectifs ambitieux.
    </p>

    <p style={paragrapheStyle}>
      <span style={spanStyle}>Des outils de ressources :</span> Familiarisez-vous avec les logiciels et méthodes les plus récents pour suivre vos projets, planifier vos tâches et optimiser la productivité (Jira, Trello, Miro, etc.).
    </p>

    <p style={paragrapheStyle}>
      <span style={spanStyle}>Des actualités agiles :</span> Restez à jour avec les dernières tendances, innovations et évolutions du framework Scrum et de l’univers Agile.
    </p>
  </div>
</div>
<div className='image-swiming text-center pt-4 mt-4 '>
        <img src={imgSwim} alt='' className='img-swiming img-fluid' />
        </div>  
        <div className='container-fluid pt-5'  style={{ justifyContent: 'center', textAlign:"justify",maxWidth: '720px' }}>
            <h1 style={titleStyle}>
Notre objectif
            </h1>
             <p style={paragrapheStyle}>
      Découvrez des techniques éprouvées pour organiser des sprints réussis, gérer efficacement les blocages et favoriser une communication fluide au sein de vos équipes.
    </p>
         <p style={paragrapheStyle}>
     Rejoinez notre communité
    </p>
        <p style={paragrapheStyle}>
      
Plongez dans l’univers du Scrum, échangez avec d’autres professionnels, et explorez les multiples facettes de l’Agilité. Ensemble, nous maîtriserons l’art de faire avancer les équipes et de transformer les idées en succès concrets.
    </p>
    <p style={paragrapheStyle}>
      
L’Agilité, ce n’est pas seulement une méthodologie, c’est une façon de penser et de collaborer. Alors, prêt(e) à passer à l’action avec nous ?
    <span style={{ marginLeft: "6px" }}>🚀</span></p>
        </div>
        <div className='container mt-5 pt-5'>
  <p className="text-center mt-5 pt-5" style={{fontSize:"27px",fontWeight:"500",color:"#393738",opacity:"70%",fontFamily:'Inter'}}>nous sommes là pour répondre à vos besoins !</p>
       <div className=' text-center mx-auto position-relative'>
    <img src={textSwim} alt='' className='text-swim text-center img-fluid'/>
    <img src={whrihteSwim} alt='' className='whrihte-swim text-center img-fluid'/>
    </div>
        </div>
  </div>
  
         </div>
</div>

</>
)
  
};

export default  BlogService;