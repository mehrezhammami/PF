import React, { Component,setState } from "react";
import axios from 'axios'
import { MDBIcon, MDBContainer,MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBTooltip, MDBInput } from 'mdbreact'
import '../component/Accessoires.css'
import {connect} from 'react-redux' 
import { BrowserRouter as Router, withRouter,Link } from 'react-router-dom';

class Accessoire extends Component {
  
    constructor(props) {
      super(props);
      this.state = {  prod:'',
      items:[],
      souscategorie:''}
    }
    

        componentDidMount()
        { 
            axios.get ('http://localhost:4000/api/read').then (res => this.setState({items:res.data})).catch (err => console.log(err))
        }

            
                render(){
                return (
                <div> 

            
        
        
        <MDBContainer>
       <div  style={{display:"flex",justifyContent:"space-around",margin:"2%"}}>
        <button onClick={()=>this.setState({souscategorie:'Totem'})}>Totem</button>
        <button onClick={()=>this.setState({souscategorie:'Photophores'})}>Photophores</button>
        <button onClick={()=>this.setState({souscategorie:'Accessoires pour stand'})}>Accessoires pour stand</button> 
        <button onClick={()=>this.setState({souscategorie:'Lustres et suspensions'})}>Lustres et suspensions</button>   
        <button onClick={()=>this.setState({souscategorie:'Divers'})}>Divers</button>  
          </div>
          
          <MDBRow>
       { this.state.items.filter(el=>el.Categorie==="Accessoires").filter(el=>el.SousCategorie.toUpperCase().includes(this.state.souscategorie.toUpperCase())).map(el=>
               <MDBCol lg='4' md='4' >
               
               <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src={`/image/${el.Image}`}
              top
              alt='sample photo'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='text-muted'>
                <h5>{el.Name}</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>{el.Categorie}</a>
                </strong>
              </MDBCardTitle>
              <MDBCardText>Quantity :{el.Quantity}</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>{el.Prix}DT\jour</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                  <Link to={`${this.props.match.path}/`+el._id}> <i className='grey-text fa fa-eye mr-3' /></Link>
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                  <MDBTooltip domElement placement='top' >
                  <MDBIcon icon="shopping-basket"  onClick={()=>this.props.Add(el)}/>
                    <span>Add to Cart</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard> 
            </MDBCol>)} 
            
            </MDBRow>
           
            </MDBContainer>
            
        </div>
            )}}
            const mapDispatchToProps=(dispatch)=>{
              return{
                Add:(a)=>dispatch({type:'ADD',payload:a})
              }
            }

export default connect(null,mapDispatchToProps) (Accessoire);

           
         
       