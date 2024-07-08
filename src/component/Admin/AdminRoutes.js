
import React from 'react';
import AjoutProductPage from './AjoutProduit';
import updateProductPage from './updateProduit'
import { BrowserRouter as Router, withRouter,Route } from 'react-router-dom';
import { MDBBtn } from "mdbreact";
import UpdateProduct from './Updatemodel';

const AdminRoutes = (props) => {
    return (<div>
        <p style={{marginTop:'40px',marginLeft:'230px'}}>Welcome back admin</p>
       
<div style={{marginLeft:'480px',marginTop:'-56px',paddingBottom:'80px'}}>
    <MDBBtn flat onClick={()=>props.history.push('/admin/update')}>Update Product</MDBBtn>
    <MDBBtn flat onClick={()=>props.history.push('/admin/add')}>Add Product</MDBBtn>
</div>

      <Route path='/admin/add' component={AjoutProductPage}/>
        <Route path='/admin/update' component={updateProductPage}/>
        <Route path='/admin/Updatemodel/:id' component={UpdateProduct}/>

    </div>  );
}
 
export default  withRouter(AdminRoutes);