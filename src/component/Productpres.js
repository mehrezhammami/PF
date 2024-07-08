import React, { Component,setState } from "react";
import '../component/Productpres.css'; //Import here your file style
import { MDBContainer,MDBCol,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardFooter,MDBTooltip,MDBIcon,MDBCard, MDBBtn } from 'mdbreact'
import axios from 'axios'
import Categorie from "./categorie";
import { connect} from "react-redux";

class Productpres extends Component {
    constructor(props){
        super(props);
        this.state={
            ID:this.props.match.params.id,
            prod:'',
            items:[],
            Categorie:''
        }
    }
    

        componentDidMount()
        { 
            axios.get ('http://localhost:4000/api/read').then (res => this.setState({items:res.data})).catch (err => console.log(err))
        }
 
            
                render(){
                return (<>
                
            {this.state.items.filter(el=>el._id==this.props.match.params.id).map(el=>
    <div style={{display:"flex",marginTop:'90px',marginLeft: '90px'}}>
        <div>                
                  <img  cascade
                    src={`/image/${el.Image}`}
                    top
                    alt='sample photo'
                    style={{width:'580px'}}
                  />
        </div>
        <div style={{marginLeft:'90px'}}>        
                      <h3>Nom du produit : {el.Name} </h3>
                       <h3 style={{lineHeight: '45px'}}>Hauteur :  {el.Hauteur} </h3>
                       
                       <h3 style={{lineHeight: '45px'}}>Longueur :  {el.Longueur} </h3>
                       
                       <h3 style={{lineHeight: '45px'}}>Profondeur :  {el.Profondeur}</h3>
                       
                      <h3 style={{lineHeight: '45px'}}>Categorie : {el.Categorie}</h3>      
                       
                      <h3 style={{lineHeight: '45px'}}>Quantity : {el.Quantity}</h3>
                        
                        <h3 style={{lineHeight: '45px'}}>Prix : {el.Prix}DT\jour</h3>
                        
                        <h3 style={{lineHeight: '45px'}}>Reference : {el.Reference} </h3>
                        

                          <MDBBtn onClick={()=> this.props.Add(el)} style={{marginTop:'50px',marginLeft:'90px'}}>Add to Cart</MDBBtn>
        </div>        
    </div>
                )}

               </> )}
};


const mapDispatchToProps=(dispatch)=>{
    return{
      Add:(a)=>dispatch({type:'ADD',payload:a})
    }
  }
export default  connect(null,mapDispatchToProps) (Productpres);