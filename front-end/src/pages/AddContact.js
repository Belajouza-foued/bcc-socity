import 'bootstrap/dist/css/bootstrap.css'; 
import React, { Component } from "react";
import './styles/Contact.css'
import {crudRouter} from '../Crud-router'
import ContactDataService from '../services/contact.service';
import imgMap from './images/img-connect.png'
import logoConnect from './images/logo-map.png'
import imgMega from './images/mega-phone.png'

class  addContact extends Component {
   constructor(props) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);        
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);   
        this.onChangeMessage = this.onChangeMessage.bind(this);     
    this.saveAddContact = this.saveAddContact.bind(this);
        this.addContact = this.addContact.bind(this);
    
        this.state = {
          id: null,
         userName:"",          
          phoneNumber:"",
          email:"",
          message:"",
         submitted: false

        };
      }
    
      onChangeUserName(e) {
        this.setState({
          userName: e.target.value
        });
      }
         onChangePhoneNumber(e) {
        this.setState({
          phoneNumber: e.target.value
        });
      } 
      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        });
      }
      
      onChangeMessage(e) {
        this.setState({
          message: e.target.value
        });
      }
   
     
      saveAddContact() {
        var data = {
          userName: this.state.userName,   
          phoneNumber : this.state.phoneNumber,     
          email : this.state.email,  
         message : this.state.message,
         
                 };
    
        ContactDataService.create(data)
          .then(response => {
            this.setState({
              id: response.data.id,
        
              userName:response.data.userName,
              phoneNumber : response.data.phoneNumber,
              email : response.data.email,
               message :response.data.message,
                        
              submitted: true
            });
    
        console.log(response.data);

        // Redirection après succès
        this.props.router.navigate("/contact");
    })
    .catch((e) => {
        console.log(e);
    });
};    
    
      addContact() {
        this.setState({
            id: null,        
            userName:"",            
            phoneNumber:"",
            email:"",
            message:"",       
       submitted: false
        });
      }
      render() {
    return( 
       <>

    <div className='container-fluid digital-service' style={{ backgroundColor: '#D6D6D6'}}>
    <div className='row pt-4'>
      <div className='text-center pt-5 mt-5'>
             <h1 style={{fontSize:"67px",fontFamily:"Poppins",fontWeight:"600",color:"#262525"}}>Envoyez nous un message</h1> 
    <p style={{fontSize:"22px",fontFamily:"Inter",fontWeight:"500",color:"#393738"}} >Contactez-nous et créons ensemble un univers de possibilités !</p>
    </div>
       <div
  className="container my-5 pt-2 pb-2 mb-5"
  style={{
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    maxWidth: '1200px',
    maxHeight :'720px'
   
  }}
>
      <div className="row">
    {/* Formulaire à gauche */}
       <div className="col-lg-6 col-sm-12 d-flex align-items-center mt-3">
        
      <form className="p-4 h-100 w-100 text-justify"style={{lineHeight:""}} >
        <div className='text-start'>
         <h1 className='pb-3 text-justify' style={{color:"#393738",fontWeight:"700", fontSize:"45px",left:"1"}}>CONTACTEZ<span className='ps-3' style={{color:"#5b99d3",fontWeight:"700", fontSize:"45px"}}>NOUS</span></h1>
                <p style={{fontWeight:"400",fontFamily:"Poppins",fontSize:"16px",color:"#393738"}}>Alignons nos constellations ! Contactez-nous et laissez la magie de la collaboration illuminer nos cieux.</p>
                 </div>
                 <div className="submit-form">
      {this.state.submitted ? (
         <div>
  <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={this.addContact}>
            Add
          </button>
          </div>
      ) : (
        <div>
                 <div className="form-outline form-group mb-4">
          <input type="text" id="userName" placeholder='Nom' className="form-control custom-textarea"   required
              value={this.state.userName}
              onChange={this.onChangeUserName}
              name="userName"    style={{border:"2px solid #d9d9d9",color:"#333333"}}/>
                  </div>

        <div className="form-outline form-group mb-4">
          <input type="phoneNumber" id="phoneNumber" placeholder='phone number'  className="form-control custom-textarea" style={{border:"2px solid #d9d9d9",color:"#333333"}}
           required
              value={this.state.phoneNumber}
              onChange={this.onChangePhoneNumber}
              name="phoneNumber"  />
                  
                  </div>
                   <div className="form-outline form-group mb-4">
          <input type="text" id="email" placeholder='Email'  className="form-control custom-textarea" style={{border:"2px solid #d9d9d9",color:"#333333"}} 
           required
              value={this.state.email}
              onChange={this.onChangeEmail}
              name="email"  
          />
                  </div>
                  <div className="form-outline mb-4">
  <textarea
    className="form-control custom-textarea custom-connect"
    placeholder="Message"
     rows="5"
    required
    value={this.state.message}
    onChange={this.onChangeMessage}
    name="message"
    style={{ border: "2px solid #d9d9d9", color: "#333333" }}// ou le nombre de lignes que tu veux
  ></textarea>
</div>

      
        <button type="button" onClick={this.saveAddContact} className="btn btn-danger btn-block mb-4 w-100 pt-2 pb-2 btn-connect">
          Envoyer
        </button>
        
       </div>
       )}
       </div>
      </form>
    
    </div>

    {/* Image à droite */}
    <div className="col-lg-6 d-flex justify-content-center align-items-center pb-5 pt-4 mb-3">
      <div className='position-relative mb-5 pb-5'
        style={{
          width: '540px',
          height: '560px',
        }}
      >
        <img src={logoConnect} className="logo-connect " alt=''/>
        <img  className='mb-5'
          src={imgMap}
          alt=""
          style={{
            width: '100%',
            height: '125%',
            objectFit: 'cover',
            borderRadius: '8px',
            backgroundColor:"black"
                     }}
        />
      </div>
    </div>
  </div>
      </div>
     <div className='position-relative pt-5' >
  <p className="text-service mt-5 pt-5" style={{fontSize:"27px",fontWeight:"500",color:"#393738",opacity:"70%"}}>nous sommes là pour répondre à vos besoins !</p>
    <div className='image-service text-center mx-auto pb-5 mb-5'>
    <img src={imgMega} alt='' className='img-mega text-center'/>
    </div>
</div>
         </div>
</div>

</>
)
  }
};

export default crudRouter(addContact);