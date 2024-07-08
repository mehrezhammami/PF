import React, { useEffect,useState } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

const Cart = (props) => {
    const [value,setValue]=useState('')
    const [items,setItems]=useState('')
    const [Somme,setSomme]=useState()
    const [quantity, setQuantity]=useState(1)
    useEffect(()=>{ 
        axios.get ('http://localhost:4000/api/read').then (res => setItems(res.data.map(el=>el.quantity=0))).catch (err => console.log(err))
    props.Cart.map(el=>el.quantity=1)},[])
        const handleChange= (e)=>{
            setValue(e.target.value)
            
        }
// let defaultSomme = el.prix * quantity
const increment=(prix,id,qtt) =>{
   
props.Cart.map(el=>(el._id===id)?el.quantity=qtt+1:el)
       setQuantity(prevQuan=> prevQuan + 1)
       setSomme(qtt*Number(prix))
   }
   const  decrement=(prix,id,qtt)=>{
    props.Cart.map(el=>(el._id===id)?el.quantity=qtt-1:el)
    setQuantity(prevQuan=> prevQuan-1)
    setSomme(qtt*Number(prix ))

}
    return (
    <div >
        { props.Cart.map(el=>
        <div key={el.id} style={{display:'flex',marginTop:'90px',marginLeft: '90px'}}>
        <div ><img src={`image/${el.Image}`} style={{width:'580px'}} /></div>
        <div style={{marginLeft:'90px',marginTop:'100px'}}>
        <h3>Nom du produit : {el.Name}</h3>
        <h3 style={{lineHeight: '115px'}} >Prix unitaire : {el.Prix}</h3>
        <h3 style={{lineHeight: '36px'}}>Quantité
            <button onClick={()=>increment((el.Prix).split(',')[0],el._id,el.quantity)}>+</button>
            <input type="Number" value={el.quantity}  /></h3>
            <button onClick={()=>decrement((el.Prix).split(',')[0],el._id,el.quantity)}>-</button>
        <h3 style={{lineHeight: '115px'}} >Somme : {Number(el.quantity)*Number(el.Prix.split(',')[0])}Dt/Jour</h3>
        </div>
        <Link to={`${props.match.path}/`+el.id}/>

        
    </div>)}</div>  );
}

 const mapStateToProps=(state)=>{
     return{
     Cart:state.Cart
 }}

export default connect (mapStateToProps,null) (Cart);