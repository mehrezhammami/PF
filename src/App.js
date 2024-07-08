import React, {useState} from 'react';
import Navbar from './component/navbar';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Search from './component/Search'
// import AjoutProduit from './component/Admin/AjoutProduit'
import Categorie from './component/categorie';
import Quinoussomme from './component/Quinoussomme';
import Acceuil from './component/Acceuil';
// import Cart from './component/Shoppingcart'
import Contactus from './component/Contactus';
import Signin from './component/Signin';
import Login from './component/Login';
import Footer from './component/Footer';
import Productpres from './component/Productpres';
import Mobilier from './component/Mobilier';
import AdminRoutes from './component/Admin/AdminRoutes';
import Accessoire from './component/Accessoire';
import Tente from './component/Tente';
import Cart from './component/Cart';
import Weather from './component/Admin/Weather';
import Switch from 'react-bootstrap/esm/Switch';
import PrivateRoute from './component/Admin/PrivateRoute';

// import productmodel from '../server/model/productmodel';
function App() { 
  return (
    
    <Router>
      <Switch>


    <Navbar/> 
    <Route exact path="/" component={Acceuil}/>
  
    {/* <Route path="/Categorie/Mobilier" component={Mobilier}/> */}
    <Route path="/Quinoussomme" component={Quinoussomme}/>
    <Route path="/Contactus" component={Contactus}/>
    <Route path="/Search" exact component={Search}/>
    <Route path="/Cart" component={Cart}/>
    <Route path="/Login" component={Login}/>
    <Route path="/Signin" component={Signin}/>
    <Route exact path="/categorie/Mobilier"component= {Mobilier}/>
    <Route exact path="/categorie/Accessoires"component= {Accessoire}/>
    <Route exact path="/categorie/Tentes-Abris"component= {Tente}/>
    <Route exact path="/Categorie" component={Categorie}/>
    <Route exact path="/Weather" component={Weather}/>
    <Route exact path="/Search/:id" component={Productpres}/>

    <PrivateRoute path='/admin' component={AdminRoutes}/>

    {/* <Route path="/Category/Mobilier" component={Mobilier}/> */}
    {/* <Productpres/> */}
    {/* <Cart/> */}
    {/* <Cardaccess/> */}
   {/* <AjoutProduit/>  */}
   <Footer/>
   
</Switch>
  </Router>
  );
}

export default App;
