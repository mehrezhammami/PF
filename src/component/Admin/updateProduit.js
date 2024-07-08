import React,{useState,MDBFileInput,Component,setState}  from 'react';
import axios from "axios";
import { MDBIcon,MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBTooltip, MDBInput } from 'mdbreact';
import {Form} from 'react-bootstrap';
import Axios from 'axios'
import { BrowserRouter as Router, withRouter } from 'react-router-dom';


class updateProductPage extends Component {
    state ={
        search:'',
        items:[],
        filterState:''
    }
    componentDidMount(){ 
        axios.get ('http://localhost:4000/api/read').then (res => this.setState({items:res.data})).catch (err => console.log(err))}
        componentDidUpdate(prevProps,prevState){
            if(prevState.items.length!==this.state.items){
                axios.get ('http://localhost:4000/api/read').then (res => this.setState({items:res.data})).catch (err => console.log(err))

            }
        }

        UpdateProduct=(id)=>{
            Axios.put('http://localhost:4000/api/update/'+id)
        }
 
        DeleteProduct=(id)=>{
            Axios.delete('http://localhost:4000/api/Delete/'+id)
        }

    render (){
    return (<>
    <MDBRow>
        {this.state.items.map(el=><MDBCol>

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
                  <MDBIcon icon="trash-alt" onClick={()=>this.DeleteProduct(el._id)} />
                    <span>Delete</span>
                  </MDBTooltip>{' '}
                  <MDBTooltip domElement placement='top'>
                  <MDBIcon icon="edit" onClick={()=>this.props.history.push(`/admin/Updatemodel/${el._id}`)}/>
                    <span>Update</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard></MDBCol>)}
          </MDBRow>
          </>
          
    )};
}
          export default withRouter(updateProductPage);