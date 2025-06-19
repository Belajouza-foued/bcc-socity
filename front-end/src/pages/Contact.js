import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../pages/styles/Contact.css'
import { Component } from 'react';
import image from './images/Logo.png'

import ContactDataService from '../services/contact.service';

export default class ListContact extends Component{
  constructor (props) {
    super (props);
    //input search admin
    this.onchangeSearchName = this.onchangeSearchName.bind(this);
    //get all admins
    this.getContacts = this.getContacts.bind(this);
    //activ admin
    this.setActiveContact = this.setActiveContact.bind(this);
    //actualiser la page   
    this.refreshListContact = this.refreshListContact.bind(this);
    //afficher list adminpar nom
    this.searchByName = this.searchByName.bind(this);
    this.deleteAllContact = this.deleteAllContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);



this.state = {
  contacts: [],
  searchName: "",
   contactCourant: null,
  index: -1
};

  }
componentDidMount(){
    this.getContacts();
}
  onchangeSearchName(e) {
    const searchName =e.target.value;
    this.setState({
      searchName:searchName,
    });    
  }
getContacts () {
 ContactDataService.getAll ()
  .then(response =>{this.setState({
    contacts :response.data,
  });
console.log (response.data);

})
.catch(err => {
  console.log (err);
})

}
refreshListContact() {
  this.getContacts ();
  this.setState ({
    contactCourant: null,
    index: -1
  })
}
setActiveContact(contact , index) {  
  this.setState({
    contactCourant : contact,
  index : index
});
}
searchByName(){
    ContactDataService.findByTitle(this.state.searchName)
    .then(response => {
        this.setState({
          contacts: response.data

        }); 
        console.log(response.data)
    })
    .catch(err=>{
        console.log(err);
    });
}
deleteAllContact(){
  ContactDataService.deleteAll()
  .then(response => {
    console.log(response.data);
    this.refreshListContact();
  })
  .catch(e => {
    console.log(e)
  });
}
deleteContact(id) {
  if (window.confirm("Êtes-vous sûr de vouloir supprimer cet contact ?")) {
    ContactDataService.delete(id)
      .then(response => {
        console.log(response.data);
        this.refreshListContact();
        alert('contact supprimé avec succès');
      })
      .catch(e => {
        console.log(e);
        alert('Erreur lors de la suppression');
      });
  }
}
handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:5030/api/contacts/${id}`);
    // Mettez à jour l'état local
    this.setState({
      contacts: this.state.contacts.filter(contacts=> contacts._id !== id)
    });
    alert('Admin supprimé avec succès');
  } catch (error) {
    console.error('Erreur lors de la suppression:', error);
    alert('Erreur lors de la suppression')
  }
};

render () {
  const {searchName , contacts,contactCourant, indexCourant }= this.state; 
  return ( 
    <>
   
 <div className="container-fluid">
   <div className="row">
    <div className="col-12 icon-nav">
    <nav className="navbar navbar-expand-lg offer-nav">
  <div className="container-fluid dashboard">
   
   
    <div className="collapse navbar-collapse" >
            </div>
       <div className="input-group2 d-flex justify-content-center align-items-center">
        <input  className="form-control pe-5 me-2" type="search" placeholder="Search" aria-label="Search" value={searchName} onChange={this.onchangeSearchName}/>
        <button className="btn btn-dark" type="submit" onClick={this.searchByName} >Search</button>
      </div>
    </div>
 </nav>
    </div>
    <div className="col-12 text-center pt-5">
   
    < Link to={'/addContact'}className='btn btn-dark btn-offer'>Add new Offer</Link>
    < button className='btn btn-danger btn-offer ms-5' onClick={this.deleteAllContact}>Delete all offer</button>
    </div>
    <h1 className="title-client text-center pt-5">Contact Offer</h1>
     <div className="col-12 d-flex justify-content-center align-items-center mx-auto">
 <div className='d-flex justify-content-center align-items-center mx-auto'>   
       <table className="table bg-white ms-3 table-client pt-5 mt-5 text-center mx-auto align-items-center">
<thead className="bg-light custom-head">
 <tr>

   <th className="px-5 py-1">id</th>
   <th className="px-5 py-1">Name</th>
   <th className="px-5 py-1">Number</th>
   <th className="marketing-head px-5 py-1">Email</th>
   <th className="contabilty-head px-5 py-1">Message</th>
  
 
 </tr>
</thead>
<tbody className=''>
  {contacts && contacts.map((
    contact, index)=>(    // eslint-disable-next-line no-unused-vars

 <tr className={+(indexCourant === contactCourant ? "active": "")} onClick={() => this.setActiveContact(contact, index)} key={index}>  
   <td>
     <div className=" d-flex text-center align-items-center form-client">
       <img
           src={image}
           alt=""         
                     className="rounded-offer ms-5"
           />
       
     </div>
        </td>
        <td className='pt-3'>
    <span className=''>{contact._id}</span>
    </td> 
   <td>
    <p className='pt-2'>{contact.userName}</p>
    </td>  
    
    <td>
    <p className='pt-2'>{contact.phoneNumber}</p>
    </td> 
    <td>
    <p className="pt-2">{contact.email}</p>
    </td>   
    <td>
    <p className="pt-2">{contact.message}</p>
    </td>  
 <td>
     <Link to={"/contact/"+ contact._id} type="button" className="btn btn-warning btn-client text-center px-5 no-border">
       Edit
     </Link>
   </td>
   <td>
   <button  className='btn btn-danger btn-client px-5 no-border'  onClick={() => this.deleteContact(contact._id)}>
  Delete
</button>
   </td>
 </tr>
 ))}

</tbody>
</table>
</div>
     </div>
   </div>
 </div>
</>)
}
  
}
    
  


