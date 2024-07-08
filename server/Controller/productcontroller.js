const Product=require('../model/productmodel')
exports.create=(req,res)=>{
    const Product=new Product({
    Name:req.body.Name,
    Hauteur:req.body.Hauteur,
    Largeur:req.body.Largeur,
    Profondeur:req.body.Profondeur,
    Prix:req.body.Prix,
    Reference:req.body.Reference,
    Quantity:req.body.Quantity,
    SousCategorie:req.body.SousCategorie,
    Categorie:req.body.Categorie ,
    Image:req.file.originalname


    });
    Product.save()
    .then(result=>res.send(result))
    .catch(er=>res.send(er))
}
    exports.findal=(req,res)=>{
        Product.find()
        .then(result=>res.send(result))
        .catch(er=>res.send(er))
    }










