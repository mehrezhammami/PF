import React, { Component } from "react";
import axios from 'axios'
import { MDBIcon, MDBContainer,MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBTooltip, MDBInput } from 'mdbreact'
import '../component/Tente.css'
import { BrowserRouter as Router, Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux' 

class Tente extends Component {
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
        <button onClick={()=>this.setState({souscategorie:'tentes-chapiteaux'})}>tentes-chapiteaux</button>
        <button onClick={()=>this.setState({souscategorie:'abris-parasols'})}>abris-parasols</button>   
        <button onClick={()=>this.setState({souscategorie:'tentes-gonflables'})}>tentes-gonflables</button>  
          </div>
          
          <MDBRow>
       { this.state.items.filter(el=>el.Categorie==='tentes-abris').filter(el=>el.SousCategorie.toUpperCase().includes(this.state.souscategorie.toUpperCase())).map(el=>
               <MDBCol lg='4' md='4' key={el._id} >
               
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
            </MDBCol>
            )} 
            
            </MDBRow>
           
            </MDBContainer>
            
        </div>
            )}}
            const mapDispatchToProps=(dispatch)=>{
              return{
                Add:(a)=>dispatch({type:'ADD',payload:a})
              }
            }
export default connect(null,mapDispatchToProps)(Tente);

           
         
       