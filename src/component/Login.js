import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import Axios from "axios";

class Login extends Component {
constructor(props){
super(props);
this.state={
    email:'',
    password:"",

}
}
Login=()=>{
Axios.post("http://localhost:4000/Login",{email:this.state.email,password:this.state.password}).then(res=> {localStorage.setItem('token',res.data.token)
localStorage.setItem('user',res.data.username);
localStorage.setItem('role',res.data.role);
alert(res.data.message);
(res.data.role=='admin'?this.props.history.push('/admin'):this.props.history.push('/'))})
}
render(){
    return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">Sign in</p>
        <div className="grey-text">
          <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
            success="right" onChange={(e)=>this.setState({email:e.target.value})} />
          <MDBInput label="Type your password" icon="lock" group type="password" validate onChange={(e)=>this.setState({password:e.target.value})}/>
        </div>
        <div className="text-center">
          <MDBBtn onClick={this.Login}>Login</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
    
}};
export default Login;