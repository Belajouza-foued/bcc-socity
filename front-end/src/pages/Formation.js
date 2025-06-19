import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import './styles/Formation.css'


const Formation  = () => {
    return(  <>

    <div className='container-fluid formation-container' style={{ backgroundColor: '#D6D6D6' }}>
    <div className='row pt-5'>
        <div className='col-lg-12 pt-5'>
    <div className='text-center title-formtion pt-5 mt-5'>
        <h1 className='formtion1'>NOS FORMATIONS</h1>
        <div className='text-center mt-3 pt-5 formation2' style={{lineHeight:'0.5',letterSpacing:"1.5px"}}>
        <p className='formation3'>Devenez un expert du digital grâce à nos formations professionnelles certifiées,</p>
        <p className='formation3'>100% pratiques, et apprenez à maîtriser le Design graphique, l'UI/UX design, la</p>
        <p className='formation3'>Photographie, le Marketing digital et la Création de contenu.</p>
</div>
    </div>
    
<section>
  <div className="container-fluid accordion-style pb-5 mb-5">
    <div className="row">
      <div className="col-lg-12 col-sm-12">
        <div className="accordion  text-center mx-auto justify-content-center accordion-flush pt-5" id="accordionFlushExample">
          
          <div className="accordion-item text-center position-relative" style={{ borderRadius: "20px" }}>
  <div
    id="flush-collapseOne"
    className="accordion-collapse collapse position-absolute w-100  pb-0"
    style={{
      top: "-420%",
      height:"300px",
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
      className="accordion-button collapsed"
      style={{ borderRadius: "20px" }}
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#flush-collapseOne"
      aria-expanded="false"
      aria-controls="flush-collapseOne"
    >
      Domaine
    </button>
  </h2>
</div>


        </div> {/* Fin de .accordion */}
      </div> {/* Fin de .col */}
    </div> {/* Fin de .row */}
  </div> {/* Fin de .container-fluid */}
</section>
 <div className='row card-formation text-center mt-4 '>
          <div className='col-lg-4 col-md-6'>
              <div className="position-relative text-white back-img ps-5 ms-5">
  {/* Contenu positionné en bas */}
  <div className="content-overlay position-absolute bottom-0 start-0 p-3">
    <h5 style={{color:"#393738",}} className='borderhome2'><b>MC project</b></h5>
    <h6 style={{color:"#393738",}} className='borderhome2' >
      Trouvez la solution de formation adaptée à votre besoin
    </h6>
      <div className="text-end">
        <button type='button' className='btn btn-danger button-250'>250dt</button>
      </div>
  </div>
</div>
 </div>
       <div className='col-lg-4 col-md-6'>
              <div className="position-relative text-white back-img2 ms-4">
  {/* Contenu positionné en bas */}
  <div className="content-overlay position-absolute bottom-0 start-0 p-3">
    <h5 style={{color:"#393738",}} className='borderhome2'><b>MC project</b></h5>
    <h6 style={{color:"#393738",}} className='borderhome2' >
      Trouvez la solution de formation adaptée à votre besoin
    </h6>
      <div className="text-end">
        <button type='button' className='btn btn-danger button-250'>250dt</button>
      </div>
  </div>
</div>
 </div>
       <div class='col-lg-4 col-sm-12 col-md-6'>
              <div className="position-relative text-white back-img">
  {/* Contenu positionné en bas */}
  <div className="content-overlay position-absolute bottom-0 start-0 p-3">
    <h5 style={{color:"#393738",}} className='borderhome2'><b>MC project</b></h5>
    <h6 style={{color:"#393738",}} className='borderhome2' >
      Trouvez la solution de formation adaptée à votre besoin
    </h6>
      <div className="text-end">
        <button type='button' className='btn btn-danger button-250'>250dt</button>
      </div>
  </div>
</div>
 </div>
    <div class='col-lg-4 col-sm-12  col-md-6 mt-5'>
              <div className="position-relative text-white back-img ms-5">
  {/* Contenu positionné en bas */}
  <div className="content-overlay position-absolute bottom-0 start-0 p-3">
    <h5 style={{color:"#393738",}} className='borderhome2'><b>MC marketing</b></h5>
    <h6 style={{color:"#393738",}} className='borderhome2' >
      Trouvez la solution de formation adaptée à votre besoin
    </h6>
      <div className="text-end">
        <button type='button' className='btn btn-danger button-250'>250dt</button>
      </div>
  </div>
</div>
 </div>
  <div class='col-lg-4 col-sm-12  col-md-6 mt-5'>
              <div className="position-relative text-white back-img2 ms-4">
  {/* Contenu positionné en bas */}
  <div className="content-overlay position-absolute bottom-0 start-0 p-3">
    <h5 style={{color:"#393738",}} className='borderhome2'><b>MC project</b></h5>
    <h6 style={{color:"#393738",}} className='borderhome2' >
      Trouvez la solution de formation adaptée à votre besoin
    </h6>
      <div className="text-end">
        <button type='button' className='btn btn-danger button-250'>250dt</button>
      </div>
  </div>
</div>
 </div>
  <div class='col-lg-4  col-sm-12 col-md-6 mt-5'>
              <div className="position-relative text-white back-img">
  {/* Contenu positionné en bas */}
  <div className="content-overlay position-absolute bottom-0 start-0 p-3 w-100">
    <h5 style={{color:"#393738",}} className='borderhome2'><b>MC project</b></h5>
    <h6 style={{color:"#393738",}} className='borderhome2' >
      Trouvez la solution de formation adaptée à votre besoin
    </h6>
     <div className="text-end">
        <button type='button' className='btn btn-danger button-250'>250dt</button>
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

export default  Formation;