import React,{useState,MDBFileInput} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import Axios from "axios";

import { BrowserRouter as Router, withRouter } from 'react-router-dom';

const AjoutProductPage = () => {
  const [Name,setName]=useState('')
  const [Hauteur,setHauteur]=useState('')
  const [Longueur,setLongueur]=useState('')
  const [Profondeur,setProfondeur]=useState('')
  const [Prix,setPrix]=useState('')
  const [Reference,setReference]=useState('')
  const [Quantity,setQuantity]=useState('')
  const [SousCategorie,setSouscategorie]=useState('')
  const [Categorie,setCategorie]=useState('')
  const [Image,setImage]=useState('')


  const AddProduct=(e)=>{
    let file=this.state.Image
    let formdata=new FormData()
    
    formdata.append('Name',Name)
    formdata.append('Hauteur',Hauteur)
    formdata.append('Longueur',Longueur)    
    formdata.append('Profondeur',Profondeur)
    formdata.append('Prix',Prix)
    formdata.append('Reference',Reference)
    formdata.append('Quantity',Quantity)
    formdata.append('SousCategorie',SousCategorie)
    formdata.append('Categorie',Categorie)
    formdata.append('Image',file)
    e.preventDefault()
    Axios.post('http://localhost:4000/api/write',formdata).then(res=>alert('product added')).catch(er=>console.log(er))
  }
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <br/>
      <form>
        <p className="h4 text-center mb-4">Ajout produit</p>
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Nom du produit
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" onChange={(e)=>setName(e.target.value)} />
        <br />
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Hauteur du produit
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" onChange={(e)=>setHauteur(e.target.value)} />
        <br />
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Longueur du produit
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" onChange={(e)=>setLongueur(e.target.value)} />
        <br />
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Profondeur du produit
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" onChange={(e)=>setProfondeur(e.target.value)} />
        <br />
        <label className="grey-text">
          Prix du produit
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" onChange={(e)=>setPrix(e.target.value)} />
        <br />
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Reference du produit
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" onChange={(e)=>setReference(e.target.value)} />
        <br />
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Quantity du produit
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" onChange={(e)=>setQuantity(e.target.value)} />
        <br />
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Souscategorie
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" onChange={(e)=>setSouscategorie(e.target.value)} />
        <br />
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Categorie
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" onChange={(e)=>setCategorie(e.target.value)} />
        <br />
        <input type='file' onChange={(e)=>setImage(e.target.files[0])}/>
        
        <div className="text-center mt-4">
                  <MDBBtn color="warning" outline type="submit" onClick={AddProduct}>
                    Ajout
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
    };
  

    export default AjoutProductPage;
