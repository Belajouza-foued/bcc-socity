import React, { Component } from "react";
import ProduitDataService from "../services/produit.service";
import "../pages/styles/AddProduit.css";
import {crudRouter} from '../Crud-router'

 class addProduit extends Component{
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);        
        this.onChangeTitre = this.onChangeTitre.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);   
        this.onChangeDescription = this.onChangeDescription.bind(this);   
         this.onChangeImage = this.onChangeImage.bind(this);
             this.saveAddProduit = this.saveAddProduit.bind(this);
        this.addProduit = this.addProduit.bind(this);
    
        this.state = {
          id: null,
         name:"",          
          titre:"",
          price:"",
          description:"",
           image: null,  // <-- ajout image ici
         submitted: false

        };
      }
    
      onChangeName(e) {
        this.setState({
          name: e.target.value
        });
      }
          
      onChangeTitre(e) {
        this.setState({
          titre: e.target.value
        });
      }
      onChangePrice(e) {
        this.setState({
          price: e.target.value
        });
      }
      onChangeDescription(e) {
        this.setState({
          description: e.target.value
        });
      }
 
onChangeImage = (e) => {
  const file = e.target.files[0];
  this.setState({ image: file });
};
      saveAddProduit() {
    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("titre", this.state.titre);
    formData.append("price", this.state.price);
    formData.append("description", this.state.description);
    formData.append("image", this.state.image);
    

    ProduitDataService.create(formData)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          titre: response.data.titre,
          price: response.data.price,
          description: response.data.description,
          image: null,
          submitted: true
        });

        console.log(response.data);
        this.props.router.navigate("/dashboard");
      })
      .catch(e => {
        console.log(e);
      });
  }
    
    
      addProduit() {
        this.setState({
            id: null,        
            name:"",            
            titre:"",
            price:"",
            description:"",       
            image: null,   
       submitted: false
        });
      }
render() {
  return (
    <div className="container-fluid pt-5 " style={{ backgroundColor: '#D6D6D6' }}>
    <div className="submit-form">
      {this.state.submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={this.addProduit}>
            Add
          </button>
        </div>
      ) : (
        <div className="container add-form">
            <h1 className="text-center">Add Produit</h1>
          <div className="form-group col-12">
            <label htmlFor="nom">nom</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={this.state.name}
              onChange={this.onChangeName}
              name="name"
            />
          </div>

          <div className="form-group col-12">
            <label htmlFor="titre">Titre</label>
            <input
              type="text"
              className="form-control"
              id="titre"
              required
              value={this.state.titre}
              onChange={this.onChangeTitre}
              name="titre"
            />
          </div>
          <div className="form-group col-12">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              required
              value={this.state.price}
              onChange={this.onChangePrice}
              name="price"           />     
                    </div>
          <div className="form-group col-12">
            <label htmlFor="description">description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={this.state.description}
              onChange={this.onChangeDescription}
              name="description"           />     
                    </div>
                    <div className="form-group col-12 mt-4">
                <input
                
  type="file"
  className="form-control"
  name="image"
  onChange={this.onChangeImage}
/>
         </div>      
              <div className="text-center mb-2">
          <button onClick={this.saveAddProduit} className="btn btn-success text-center mt-4 mb-4 mx-auto" style={{width:'30%'}}>
            Submit
          </button>
</div>
        </div>
      )}
    </div>
    </div>
  );
}
}
export default crudRouter(addProduit);
