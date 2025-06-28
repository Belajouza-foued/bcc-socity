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
        <div className='text-center mt-3 pt-5 formation2' style={{letterSpacing:"1.5px"}}>
        <p className='formation3'>Devenez un expert du digital grâce à nos formations professionnelles certifiées,</p>
        <p className='formation3'>100% pratiques, et apprenez à maîtriser le Design graphique, l'UI/UX design, la</p>
        <p className='formation3'>Photographie, le Marketing digital et la Création de contenu.</p>
</div>
</div>
    </div>
    
<section>
  <div className="container-fluid accordion-style pb-5 mb-5">
    <div className="row justify-content-center">
      <div className="col-lg-12 col-md-6 col-sm-12 text-center mx-auto">

        <div className="accordion accordion-flush pt-5 mx-auto" id="accordionFlushExample">

          <div className="accordion-item" style={{ borderRadius: "20px" }}>

            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                style={{ borderRadius: "20px" }}
              >
                Domaine
              </button>
            </h2>

            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse position-absolute"
              style={{
                marginLeft:"70px",
                  width:'350px',
                top:'260px',
                 transform: 'translateX(-20%)', 
                zIndex: 999,
                backgroundColor: "#fff",
                borderRadius: "20px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                              }}
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body text-start px-4 py-3">
                <p>All projects</p>
                <hr />
                <p>Design</p>
                <hr />
                <p>Internal and external</p>
                <hr />
                <p>Trouver la solution</p>
              </div>
            </div>

          </div>
        </div> 

      </div>
    </div>
  </div> 
</section>


 <div className='row card-formation text-center mt-4 ps-5 ms-1'>
          <div className='col-lg-4 col-md-6'>
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
       <div className='col-lg-4 col-md-6'>
              <div className="position-relative text-white back-img2 ms-1">
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
              <div className="position-relative text-white back-img">
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
              <div className="position-relative text-white back-img2 ms-1">
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


</>)
  
};

export default  Formation;