import React from 'react';
import '../pages/styles/MCProjectsSection.css'; // si tu veux styliser séparément

const MCProjectsSection = () => {
  return (
    <div className='container-fluid'>
    <div className='row text-center mt-5 pt-5 me-3'>
     <div className='col-lg-4 col-md-6'>
              <div className="position-relative text-white back-img" style={{ marginLeft: "-10px" }}>
  {/* Contenu positionné en bas */}
  <div className="content-overlay position-absolute bottom-0 start-0 p-3">
    <h5 style={{color:"#393738",}} className='borderhome2'><b>MC PROJECT</b></h5>
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
              <div className="position-relative text-white back-img2 ps-5 pe-5" style={{ marginLeft: "2px" }}>
  {/* Contenu positionné en bas */}
  <div className="content-overlay position-absolute bottom-0 start-0 p-3">
    <h5 style={{color:"#393738",}} className='borderhome2'><b>FIBRE OPTIQUE</b></h5>
    <h6 style={{color:"#393738",}} className='borderhome2' >
      Trouvez la solution de formation adaptée à votre besoin
    </h6>
      <div className="text-end">
        <button type='button' className='btn btn-danger button-250'>250dt</button>
      </div>
  </div>
</div>
 </div>
       <div class='col-lg-4 col-md-6'>
              <div className="position-relative text-white back-img" style={{ marginLeft: "15px" }}>
  {/* Contenu positionné en bas */}
  <div className="content-overlay position-absolute bottom-0 start-0 p-3 ps-3">
    <h5 style={{color:"#393738",}} className='borderhome2'><b>MARKETING DIGITAL</b></h5>
    <h6 style={{color:"#393738",fontFamily:"Poppins",fontWeight:"500",fontSize:"15px",letterSpacing:"2px"}} className='borderhome2' >
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
  );
};

export default MCProjectsSection;