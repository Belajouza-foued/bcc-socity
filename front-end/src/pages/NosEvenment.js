import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import './styles/NosEvenment.css'
import imgDesign from './images/mask-2.png'
import imgDesign1 from './images/img-design1.png'
import { Link } from 'react-router-dom';
import CardDesign from '../components/CardDesign';

const NosEvenment  = () => {
  const cards = [
  { id: 1, image: imgDesign, title: "Marketing digital" },
  { id: 2, image: imgDesign1, title: "Marketing digital" },
  { id: 3, image: imgDesign, title: "Marketing digital" },
  { id: 4, image: imgDesign1, title: "Marketing digital" },
  { id: 5, image: imgDesign, title: "Marketing digital" },
  { id: 6, image: imgDesign1, title: "Marketing digital" },
];
    return(  <>

    <div className='container-fluid nosEvenment-container' style={{ backgroundColor: '#D6D6D6'}}>
    <div className='row'>
        <div className='col-lg-12 pt-5'>
            <div className='title-nos text-center mt-5 pt-5'>
 <h1 className='titre-evenment'>NOS ÉVÈNEMENTS</h1>
            </div>
                 </div>
     
  <div className="container-fluid mt-5 pt-5" style={{maxWidth:"1200px" }}>
      <div className="row">
        {cards.map((card) => (
          <div key={card.id} className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <CardDesign image={card.image} title={card.title} />
          </div>
        ))}
      </div>
    </div>
      
   
  {/*add butto*/}
  <section>
  <div className="container-fluid accordion-style pb-5 mb-5">
    <div className="row">
      <div className="col-lg-12 col-sm-12">
        <div className="accordion accordion1  text-center mx-auto justify-content-center accordion-flush pt-5 " id="accordionFlushExample">
          
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
<p>design</p>
<hr></hr>
<p>internal and external</p>
<hr></hr>
<p>Touver la solution</p>
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

<footer>
  {/* Ton footer ici */}
</footer>



    </div>             
    </div>


</>)
  
};

export default  NosEvenment;