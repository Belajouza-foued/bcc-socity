import { Component } from "react";
import ProduitDataService from "../services/produit.service";
import {crudRouter} from "../Crud-router";
class EditProduit extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTitre = this.onChangeTitre.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);    
        this.onChangeDescription = this.onChangeDescription.bind(this);
          this.onChangeImage = this.onChangeImage.bind(this);       
        this.EditProduit = this.EditProduit.bind(this); 
        this.getProduit = this.getProduit.bind(this);    
            this.state = {
                selectProduit : {
                    id: null,        
                    name:"",
                 titre:"",
                    price:"",
                    description:"",
                    image:""
               }              

        };
      }
      componentDidMount(){
        this.getProduit(this.props.router.params.id)
      }
   onChangeName(e) {
    const name = e.target.value;
    this.setState(function(prevState){
        return{
            selectProduit :{
...prevState.selectProduit,
name:name,

            }
        }
    })
   }  
   onChangeTitre(e) {
    const titre = e.target.value;
    this.setState(function(prevState){
        return{
            selectProduit :{
...prevState.selectProduit,
titre:titre,

            }
        }
    })
   }  
   onChangePrice(e) {
    const price = e.target.value;
    this.setState(function(prevState){
        return{
            selectProduit :{
...prevState.selectProduit,
price:price,

            }
        }
    })
   } 
   onChangeDescription(e) {
    const description = e.target.value;
    this.setState(function(prevState){
        return{
            selectProduit :{
...prevState.selectProduit,
description:description,

            }
        }
    })
   } 
 
onChangeImage(e) {
  const file = e.target.files[0]; // récupère le fichier sélectionné
  this.setState(prevState => ({
    selectProduit: {
      ...prevState.selectProduit,
      image: file // on stocke le fichier directement
    }
  }));
}

   //get admin by id// 
   getProduit(id) {
    ProduitDataService.get(id)
    .then(response =>{this.setState({
      selectProduit :response.data,
    });
  console.log (response.data);
  
  })
  .catch(err => {
    console.log (err);
  })
  
  }
  //function update admin//
EditProduit() {
  const formData = new FormData();
  formData.append("name", this.state.selectProduit.name);
  formData.append("titre", this.state.selectProduit.titre);
  formData.append("price", this.state.selectProduit.price);
  formData.append("description", this.state.selectProduit.description);

  if (this.state.selectProduit.image instanceof File) {
    formData.append("image", this.state.selectProduit.image);
  }

  ProduitDataService.update(this.state.selectProduit._id, formData)
    .then((res) => {
      console.log(res.data);
      this.props.router.navigate("/dashboard");
    })
    .catch((err) => {
      console.log(err);
    });
}

  render() {
    const { selectProduit } = this.state;
    return(
<div>
{selectProduit ? (
       <div className="container mt-3 pb-5">
  <div className="row text-center">
    <h1 className="mt-5">Edit Produits</h1>
    <div className="col-12 mt-3">
      <input
        type="text"
        className="form-control"
        id="name"
        value={selectProduit.name}
        onChange={this.onChangeName}
        placeholder="Nom"
      />
    </div>

    <div className="col-12 mt-3">
      <input
        type="text"
        className="form-control"
        id="email"
        value={selectProduit.titre}
        onChange={this.onChangeTitre}
        placeholder="Titre"
      />
    </div>

    <div className="col-12 mt-3">
      <input
        type="text"
        className="form-control"
        id="price"
        value={selectProduit.price}
        onChange={this.onChangePrice}
        placeholder="Prix"
      />
    </div>

    <div className="col-12 mt-3">
      <input
        type="text"
        className="form-control"
        id="description"
        value={selectProduit.description}
        onChange={this.onChangeDescription}
        placeholder="Description"
      />
    </div>

    <div className="col-12 mt-5">
      {selectProduit.image && typeof selectProduit.image === 'string' && (
        <img
          src={`http://localhost:5030/uploads/${selectProduit.image}`}
          alt="Aperçu"
          style={{ width: "120px", height: "auto", marginTop: "10px", borderRadius: "8px" }}
        />
      )}
    </div>

    <div className="col-12 text-center">
      <button className="btn btn-success px-5 mt-5" onClick={this.EditProduit}>
        Modifier le produit
      </button>
    </div>

  </div>
</div>

        ):(
    <h1>Produit modified</h1>      
    )};
</div>

    )
  }
}
export default crudRouter(EditProduit);