const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const productschema = new mongoose.Schema({
    Name:{type:String},
    Hauteur:{type:Number},
    Largeur:{type:Number},
    Profondeur:{type:Number},
    Prix:{type:String},
    Reference:{type:String},
    Quantity:{type:Number},
    SousCategorie:{type:String},
    Categorie:{type:String} ,
    Image:{type:String}
})

module.exports=mongoose.model('product',productschema)