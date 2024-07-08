import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

import Axios from "axios";

class Signin extends Component {
   constructor(props){
super(props);
this.state={
    email:'',
    password:'',
    name:'',
            }
        }
            Signin=()=>{
Axios.post('http://localhost:4000/Signin',{email:this.state.email,password:this.state.password,name:this.state.name,role:this.state.role}).then(res=>alert(res.data.message)).catch(er=>console.log(er))

            
        } 
    render(){
        return (
            <div>
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">Sign up</p>
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text"   onChange={(e)=>this.setState({name:e.target.value})}validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right"  onChange={(e)=>this.setState({email:e.target.value})}/>
          {/* <MDBInput label="role" icon="exclamation-triangle" group type="text" validate
            error="wrong" success="right" onChange={(e)=>this.setState({role:e.target.value})}/> */}
          <MDBInput label="Your password" icon="lock" group type="password" validate onChange={(e)=>this.setState({password:e.target.value})} />
        </div>
        <div className="text-center">
          <MDBBtn color="primary"onClick={this.Signin}>Register</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</div>
);
        
    }
}
export default Signin;