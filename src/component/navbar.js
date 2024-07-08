import React, { Component ,Fragment } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, p, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon,MDBCollapseHeader } from "mdbreact";
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
 import 'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';
import { MDBBtn } from "mdbreact";
import { connect } from "react-redux";



class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
logout=()=>{
  localStorage.removeItem('token')
  localStorage.removeItem('user')
   localStorage.removeItem('role')
  this.props.history.push('/')
}

render() {
  const token=localStorage.getItem('token')
  let user=localStorage.getItem('user')
  return (
    
    
      <MDBNavbar color="red" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text" style={{fontFamily:'timesnewroman'}}>ProjectX</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse}  />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar >
          <MDBNavbarNav left style={{fontSize:"18px",fontWeight:"bold",color:"white",justifyContent:"space-around",width:"500px",marginTop:"20px",fontFamily:'timesnewroman'}}>
            <MDBNavItem active>
              <p onClick={()=>this.props.history.push('/')}>Home</p>
            </MDBNavItem>
            <MDBNavItem>
              <p onClick={()=>this.props.history.push('/Quinoussomme')}>Qui Sommes-Nous ?</p>
            </MDBNavItem>
            <MDBNavItem>
              <p onClick={()=>this.props.history.push("/Categorie")}>Categorie</p>
            </MDBNavItem>
            <MDBNavItem>
              <p onClick={()=>this.props.history.push("/Contactus")}>Contact us</p>
            </MDBNavItem>
            <MDBNavItem>
              <p onClick={()=>this.props.history.push("/Weather")}>Weather</p>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
          <MDBNavItem><div style={{marginTop:"10px",marginRight:'10px'}}>
              <p className="waves-effect waves-light" >
              <MDBIcon icon="search" onClick={()=>this.props.history.push("/Search")} style={{fontSize:'20px'}} />
              </p></div>
            </MDBNavItem>            
            <MDBNavItem><div style={{marginTop:"10px",marginRight:'20px'}}>
              <div className="waves-effect waves-light" style={{position:'relative'}}>
              <MDBIcon icon="shopping-cart" onClick={()=>this.props.history.push("/Cart")} style={{fontSize:'20px'}} />
              </div>
              </div>
            </MDBNavItem>
            <MDBNavItem>
            <div style={{backgroundColor:"blue",borderRadius:"80px",width:"20px",textAlign:"center",position:"absolute",marginTop:"0px",marginLeft:"-28px",fontWeight:"bold"}}>{this.props.Cart.length}</div>
            </MDBNavItem>
            {/* <MDBNavItem>
              <p className="waves-effect waves-light" >
             <a href="https://www.facebook.com/anti.hacker.king/"> <MDBIcon fab icon="facebook" /></a>
              </p>
            </MDBNavItem> */}
            <MDBNavItem style={{marginRight: '100px'}}>
              <MDBDropdown>
                <MDBDropdownToggle nav caret >
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                {(!token)?
                <div style={{marginRight:"100px",position:"absolute"}}>
                <MDBDropdownMenu className="dropdownlogin" >
                    
                    <MDBBtn onClick={()=>this.props.history.push("/Login")} gradient="peach">
                    <MDBDropdown  >Login </MDBDropdown>
                    </MDBBtn>
                    <MDBBtn onClick={()=>this.props.history.push("/Signin")} gradient="blue">
                    <MDBDropdown >Register</MDBDropdown>
                    </MDBBtn>
                    </MDBDropdownMenu></div>: <div style={{marginRight:"100px",position:"absolute"}}><MDBDropdownMenu className="dropdownlogin">
                    
                    <MDBBtn  gradient="peach">
                    <MDBDropdown  >welcome:{user} </MDBDropdown>
                    </MDBBtn>
                    <MDBBtn onClick={this.logout} gradient="blue">
                    <MDBDropdown >Logout</MDBDropdown>
                    </MDBBtn>
                    </MDBDropdownMenu></div> }
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      
    );
  }
}
const mapStateToProps=(state)=>{
  return {
    Cart:state.Cart
  }
}

export default connect(mapStateToProps,null) (withRouter (Navbar));