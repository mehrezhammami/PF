import React, { Component,setState } from "react";
import axios from 'axios'
import { MDBIcon, MDBContainer,MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBTooltip, MDBInput } from 'mdbreact'
import '../component/Mobilier.css'
import { BrowserRouter as Router, Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux' 

class Mobilier extends Component {
  constructor(props) {
    super(props);
    this.state ={
        prod:'',
        items:[],
        souscategorie:''
    }
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
        <button onClick={()=>this.setState({souscategorie:'chaises'})}>Chaises</button>
        <button onClick={()=>this.setState({souscategorie:'Fauteuils'})}>Fauteuils</button>   
        <button onClick={()=>this.setState({souscategorie:'Poufs'})}>Poufs</button>  
        <button onClick={()=>this.setState({souscategorie:'Canapés'})} >Canapés</button>  
        <button  onClick={()=>this.setState({souscategorie:'Tables'})}>Tables</button>  
        <button  onClick={()=>this.setState({souscategorie:'Bars et buffets'})}>Bars et buffets</button>  
          </div>
          
          <MDBRow>
            {console.log(this.state.items)}
       { this.state.items.filter(el=>el.Categorie==='Mobilier').filter(el=>el.SousCategorie.toUpperCase().includes(this.state.souscategorie.toUpperCase())).map(el=>
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
                  <Link to={`/search/`+el._id}> <i className='grey-text fa fa-eye mr-3' /></Link>
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
export default connect(null,mapDispatchToProps) (Mobilier);

           
         
       