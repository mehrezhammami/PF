import React,{useState,MDBFileInput, useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import Axios from "axios";
import { BrowserRouter as Router, withRouter } from 'react-router-dom';



  const UpdateProduct=(props)=>{
        const [Name,setName]=useState('')
        const [Hauteur,setHauteur]=useState('')
        const [Longueur,setLongueur]=useState('')
        const [Profondeur,setProfondeur]=useState('')
        const [Prix,setPrix]=useState('')
        const [Reference,setReference]=useState('')
        const [Quantity,setQuantity]=useState('')
        const [SousCategorie,setSouscategorie]=useState('')
        const [Categorie,setCategorie]=useState('')
      useEffect(()=>{
        Axios.get('http://localhost:4000/api/read/'+props.match.params.id).then(res=>{
          setName(res.data.Name)
          setHauteur(res.data.Hauteur)
          setLongueur(res.data.Longueur)
          setProfondeur(res.data.Profondeur)
          setPrix(res.data.Prix)
          setReference(res.data.Reference)
          setQuantity(res.data.Quantity)
          setSouscategorie(res.data.SousCategorie)
          setCategorie(res.data.Categorie)
              
    }).catch(er=>alert(er))
      },[])
      
        const UpdateProd=(e)=>{
          e.preventDefault()
          
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

          Axios.put('http://localhost:4000/api/upadte/'+props.match.params.id,{Name,Hauteur,Longueur,Profondeur,Prix,Reference,Quantity,SousCategorie,Categorie}).then(res=>{alert(res.data.Name)
          props.history.push('/admin/update')}).catch(er=>alert(er))
        }


return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <br/>
      <form>
        <p className="h4 text-center mb-4">Update produit</p>
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Nom du produit
        </label>
        <input type="text" id="defaultFormContactNameEx"  value={Name}className="form-control" onChange={(e)=>setName(e.target.value)} />
        <br />
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Hauteur du produit
        </label>
        <input type="text" id="defaultFormContactNameEx" value={Hauteur}className="form-control" onChange={(e)=>setHauteur(e.target.value)} />
        <br />
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Longueur du produit
        </label>
        <input type="text" id="defaultFormContactNameEx" value={Longueur}className="form-control" onChange={(e)=>setLongueur(e.target.value)} />
        <br />
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Profondeur du produit
        </label>
        <input type="text" id="defaultFormContactNameEx"value={Profondeur} className="form-control" onChange={(e)=>setProfondeur(e.target.value)} />
        <br />
        <label className="grey-text">
          Prix du produit
        </label>
        <input type="text" id="defaultFormContactNameEx" value={Prix}className="form-control" onChange={(e)=>setPrix(e.target.value)} />
        <br />
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Reference du produit
        </label>
        <input type="text" id="defaultFormContactNameEx" value={Reference}className="form-control" onChange={(e)=>setReference(e.target.value)} />
        <br />
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Quantity du produit
        </label>
        <input type="text" id="defaultFormContactNameEx" value={Quantity}className="form-control" onChange={(e)=>setQuantity(e.target.value)} />
        <br />
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Souscategorie
        </label>
        <input type="text" id="defaultFormContactNameEx" value={SousCategorie}className="form-control" onChange={(e)=>setSouscategorie(e.target.value)} />
        <br />
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Categorie
        </label>
        <input type="text" id="defaultFormContactNameEx" value={Categorie}className="form-control" onChange={(e)=>setCategorie(e.target.value)} />
        <br />
        
        <div className="text-center mt-4">
                  <MDBBtn color="warning" outline type="submit" onClick={UpdateProd}>
                    Update
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
    
}

    export default UpdateProduct;
