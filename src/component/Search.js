import React, { Component,setState } from 'react';
import { MDBIcon,MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBTooltip, MDBInput } from 'mdbreact';
import {Form} from 'react-bootstrap';
import axios from 'axios'
import { BrowserRouter as Router, withRouter,Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Search extends Component {
    state ={
        search:'',
        items:[],
        filterState:''
    }
 componentDidMount(){ 
        axios.get ('http://localhost:4000/api/read').then (res => this.setState({items:res.data})).catch (err => console.log(err))}
        
    HandleSearch =(e)=>{
        e.preventDefault()
        this.setState({search:e.target.value})
    }
    render (){
    return (

        <div> 
            <MDBCol md='3'> 
        <MDBInput onChange={this.HandleSearch} />
        <br/>
        <MDBInput label="Mobilier" type="checkbox" id="checkbox1"  onChange={()=>this.setState({filterState:"Mobilier"})}/>
        <br/>
        <MDBInput label="Accessoires" type="checkbox" id="checkbox2" onChange={()=>this.setState({filterState:"Accessoires"})} />
        <br/>
        <MDBInput label="Tente" type="checkbox" id="checkbox3" onChange={()=>this.setState({filterState:"Tente"})} />
        </MDBCol>  
          <section className='text-center my-5'>
    <MDBRow>
            {this.state.items.filter(el=>el.Categorie.toUpperCase().includes(this.state.filterState.toUpperCase())).filter(el=>el.Name.toUpperCase().includes(this.state.search.toUpperCase())).map(el=>
             <MDBCol lg='4' md='4' className='mb-lg-0 mb-4'>
          <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src={`image/${el.Image}`}
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
    </section>
    </div>

  );
};
}

const mapDispatchToProps=(dispatch)=>{
  return{
    Add:(a)=>dispatch({type:'ADD',payload:a})
  }
}
export default connect(null,mapDispatchToProps) (Search);