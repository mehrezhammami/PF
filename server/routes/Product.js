const express = require('express');
const router = express.Router();


const product = require('../model/productmodel');

// lire les informations
router.get('/read',(req,res)=>{
     product.find()
     .then(product=>res.json(product))

 })
// lire avec id
router.get('/read/:id',(req,res)=>{
    product.findById(req.params.id)
    .then(product=>res.json(product))

})
// ajout product
router.post('/write',(req,res)=>{
    const newproduct = new product({
        Name:req.body.Name,
        Hauteur:req.body.Hauteur,
        Largeur:req.body.Largeur,
        Profondeur:req.body.Profondeur,
        Prix:req.body.Prix,
        Reference:req.body.Reference,
        Quantity:req.body.Quantity,
        SousCategorie:req.body.SousCategorie,
        Categorie:req.body.Categorie,
        Image:req.body.img
    })
    newproduct.save()
})
// delete product
router.delete('/delete/:id',(req,res)=>{
    product.findById(req.params.id)
    .then(product=>product.remove().then(()=>res.json({succes:true}))).catch(err=>res.status(404).json({success:false}))

});
// update product
router.put('/upadte/:id',(req,res)=>{
    product.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
    .then((result)=>res.send(result))
    .catch(err=>res.status(400).json('err'+err))

})
module.exports=router;
    // let product=new product({
    
    //     Name:'TOTEM ZEN',
    //     Hauteur:120,
    //     Largeur:40,
    //     Prix:'80,000',
    //     Reference:'TRACTTM001',
    //     Quantity:4,
    //     SousCategorie: 'TOTEM',
    //     Categorie: 'Accessoires',
    
    // })
    // product.save()
    // .then(data=>console.log(data))
    // .catch(er=>console.log(er))
    
    //*** ajout */
    // product.create([
    //     // Ajout de categorie Accessoires
    //     {     
    //         Name:'PACK TRIO TOTEM BRIDGE',
    //         Hauteur:180,
    //         Largeur:40,
    //         Prix:'45,000' ,
    //         Reference:'TRACTTM029',
    //         Quantity:4,
    //         SousCategorie:'Totem',
    //         Categorie: 'Accessoires',
    //         Image:'img1.png'
    //     },
    
    //     {     
    //         Name:'TOTEM FAIROUZ',
    //         Hauteur:102,
    //         Largeur:28,
    //         Prix:'12,000',
    //         Reference:'TRACTTM009',
    //         Quantity:4,
    //         SousCategorie:'Totem',
    //         Categorie: 'Accessoires',
    //         Image:'img2.png'
    //     },
    
    //     {     
    //         Name:'VASE UMA 34/H24',
    //         Hauteur:24,
    //         Largeur:34,
    //         Prix:'18,000',
    //         Reference:'TRACVAS001',
    //         Quantity:4,
    //         SousCategorie:'Vase en verre',
    //         Categorie: 'Accessoires',
    //         Image:'img3.png'
    //     },
    
    //     {     
    //         Name:'VASE LUNGO',
    //         Hauteur:89,
    //         Largeur:15,
    //         Prix:'24,000',
    //         Reference:'TRACVAS011',
    //         Quantity:4,
    //         SousCategorie:'Vase en verre',
    //         Categorie: 'Accessoires',
    //         Image:'img4.png'
    //     },
    
    //     {     
    //         Name:'VASE MARTINI TORSADÉ H60',
    //         Hauteur:60,
    //         Largeur:26,
    //         Prix:'32,000',
    //         Reference:'TRACVAS009',
    //         Quantity:4,
    //         SousCategorie:'Vase en verre',
    //         Categorie: 'Accessoires',
    //         Image:'img5.png',
    //     },
    
    //     {     
    //         Name:'PHOTOHPORE AURORE 12/H21',
    //         Hauteur:21,
    //         Largeur:12,
    //         Prix:'6,000',
    //         Reference:'TRACPHB167',
    //         Quantity:4,
    //         SousCategorie:'Photophores',
    //         Categorie: 'Accessoires',
    //         Image:'img6.png'
    //     },
    
    //     {     
    //         Name:'PHOTOPHORE PHILIPPE 10/H18',
    //         Hauteur:18,
    //         Largeur:10,
    //         Prix:'6,000',
    //         Reference:'TRACPHB066',
    //         Quantity:4,
    //         SousCategorie:'Photophores',
    //         Categorie: 'Accessoires',
    //         Image:'img7.png'
    //     },
    
    //     {     
    //         Name:'PHOTOPHORE ESTELLE 18/H40',
    //         Hauteur:40,
    //         Largeur:18,
    //         Prix:'14,000',
    //         Reference:'TRACPHB066',
    //         Quantity:4,
    //         SousCategorie:'Photophores',
    //         Categorie: 'Accessoires',
    //         Image:'img8.png'
    //     },
    
    //     {     
    //         Name:'MACHINE A CAFE NESPRESSO',
    //         Prix:'40,000',
    //         Reference:'TRACC004',
    //         Quantity:4,
    //         SousCategorie:'Accessoires pour stand',
    //         Categorie: 'Accessoires',
    //         Image:'img9.png'
    //     },   
        
    //     {     
    //         Name:'PORTE PROSPECTUS',
    //         Prix:'20,000',
    //         Reference:'TRACTTM026',
    //         Quantity:4,
    //         SousCategorie:'Accessoires pour stand',
    //         Categorie: 'Accessoires',
    // Image:'img10.png',},
    //     {     
    //         Name:'TRIO LUSTRE BOULE ARGENT',
    //         Prix:'65,000',
    //         Reference:'TRACLSS025',
    //         Quantity:4,
    //         SousCategorie:'Lustres et suspensions',
    //         Categorie: 'Accessoires',
    //        Image:'img11.png'
    // },
    
    //     {     
    //         Name:'LANTERNE ANKARA',
    //         Hauteur:70,
    //         Largeur:30,
    //         Prix:'45,000',
    //         Reference:'TRACLSS019',
    //         Quantity:4,
    //         SousCategorie:'Lustres et suspensions',
    //         Categorie: 'Accessoires',
    //     Image:'img12.png'
    //     },
    
    //     {     
    //         Name:'LUSTRE CRISTAL OMBRE',
    //         Hauteur:60,
    //         Largeur:100,
    //         Prix:'95,000',
    //         Reference:'TRACLSS025',
    //         Quantity:4,
    //         SousCategorie:'Lustres et suspensions',
    //         Categorie: 'Accessoires',
    //     Image:'img13.png'
    //     },
    
    //     {     
    //         Name:'CHAUFFAGE PYRAMIDE',
    //         Hauteur:227,
    //         Profondeur:37,
    //         Prix:'80,000',
    //         Reference:'TRPMPME059',
    //         Quantity:4,
    //         SousCategorie:'Divers',
    //         Categorie: 'Accessoires',
    //     Image:'img14.png'
    //     },
    
    //     {     
    //         Name:'VENTILATEUR BRUMISATEUR',
    //         Prix:'80,000',
    //         Reference:'TRPMPME065',
    //         Quantity:4,
    //         SousCategorie:'Divers',
    //         Categorie: 'Accessoires',
    //     Image:'img15.png'
    //     },
    
    //     {     
    //         Name:'CHAFING DISH RECTANGULAIRE',
    //         Hauteur:670,
    //         Largeur:435,
    //         Profondeur:205,
    //         Prix:'65,000',
    //         Reference:'TRPMPME026',
    //         Quantity:4,
    //         SousCategorie:'Divers',
    //         Categorie: 'Accessoires',
    //     Image:'img16.png'
    //     },
    
    //     {     
    //         Name:'MILK DISPENSER',
    //         Prix:'45,000',
    //         Reference:'TRPMPME063',
    //         Quantity:4,
    //         SousCategorie:'Divers',
    //         Categorie: 'Accessoires',
    //     Image:'img17.png'
    //     },
    
    //     // Ajout de categorie Mobilier
    //     {     
    //         Name:'CHAISE LOUISE',
    //         Hauteur:77,
    //         Largeur:60,
    //         Profondeur:45,
    //         Prix:'18,000',
    //         Reference:'TRMBCHA008',
    //         Quantity:4,
    //         SousCategorie:'Chaises',
    //         Categorie:'Mobilier',
    //     Image:'img18.png'
    //     },
    
    //     {     
    //         Name:'CHAISE STARK NOIR',
    //         Hauteur:90,
    //         Largeur:55,
    //         Profondeur:45,
    //         Prix:'9,000',
    //         Reference:'TRMBCHA014',
    //         Quantity:4,
    //         SousCategorie:'Chaises',
    //         Categorie:'Mobilier',
    //     Image:'img19.png'
    //     },
    
    //     {     
    //         Name:'CHAISE PORTA VENEZIA VERT',
    //         Hauteur:81,
    //         Largeur:81,
    //         Profondeur:40,
    //         Prix:'15,000',
    //         Reference:'TRMBCHA004',
    //         Quantity:4,
    //         SousCategorie:'Chaises',
    //         Categorie:'Mobilier',
    //     Image:'img20.png'
    //     },
    
    //     {     
    //         Name:'FAUTEUIL PASCAL - LOUIS XV',
    //         Hauteur:96,
    //         Largeur:65,
    //         Profondeur:50,
    //         Prix:'38,000',
    //         Reference:'TRMBFAT010',
    //         Quantity:4,
    //         SousCategorie:'Fauteuils',
    //         Categorie:'Mobilier',
    //     Image:'img21.png'
    //     },
    
    
    //     {     
    //         Name:'FAUTEUIL VIP',
    //         Hauteur:75,
    //         Largeur:45,
    //         Profondeur:75,
    //         Prix:'29,000',
    //         Reference:'TRMBFAT013',
    //         Quantity:4,
    //         SousCategorie:'Fauteuils',
    //         Categorie:'Mobilier',
    //     Image:'img22.png'
    //     },
    
    //     {     
    //         Name:'FAUTEUIL COSY BLEU',
    //         Hauteur:83,
    //         Largeur:51,
    //         Profondeur:46,
    //         Prix:'18,000',
    //         Reference:'TRMBFAT002',
    //         Quantity:4,
    //         SousCategorie:'Fauteuils',
    //         Categorie:'Mobilier',
    //     Image:'img23.png'
    //     },
    
    //     {     
    //         Name:'POUF SABA',
    //         Hauteur:45,
    //         Largeur:45,
    //         Profondeur:45,
    //         Prix:'10,000',
    //         Reference:'TRMBPOF006',
    //         Quantity:4,
    //         SousCategorie:'Poufs',
    //         Categorie:'Mobilier',
    //     Image:'img24.png'
    //     },
    
    //     {     
    //         Name:'POUF SLIDE',
    //         Hauteur:40,
    //         Largeur:96,
    //         Profondeur:40,
    //         Prix:'5,000',
    //         Reference:'TRMBPOF007',
    //         Quantity:4,
    //         SousCategorie:'Poufs',
    //         Categorie:'Mobilier',
    //     Image:'img25.png'
    //     },
    
    //     {     
    //         Name:'POUF WALLY',
    //         Hauteur:50,
    //         Largeur:55,
    //         Profondeur:55,
    //         Prix:'12,000',
    //         Reference:'TRMBPOF001',
    //         Quantity:4,
    //         SousCategorie:'Poufs',
    //         Categorie:'Mobilier',
    //     Image:'img26.png'
    //     },
    
    //     {     
    //         Name:'BANQUETTE ROMA',
    //         Hauteur:65,
    //         Largeur:140,
    //         Profondeur:50,
    //         Prix:'35,000',
    //         Reference:'TRMBCNP009',
    //         Quantity:4,
    //         SousCategorie:'Canapés',
    //         Categorie:'Mobilier',
    //     Image:'img27.png'
    //     },
    
    //     {     
    //         Name:'MÈRIDIENNE MERIEM',
    //         Hauteur:90,
    //         Largeur:210,
    //         Profondeur:77,
    //         Prix:'120,000',
    //         Reference:'TRMBCNP015',
    //         Quantity:4,
    //         SousCategorie:'Canapés',
    //         Categorie:'Mobilier',
    //     Image:'img28.png'
    //     },
    
    //     {     
    //         Name:'MERIDIENNE SONIA',
    //         Hauteur:80,
    //         Largeur:160,
    //         Profondeur:80,
    //         Prix:'120,000',
    //         Reference:'TRMBCNP010',
    //         Quantity:4,
    //         SousCategorie:'Canapés',
    //         Categorie:'Mobilier',
    //     Image:'img29.png'
    //     },
    
    //     {     
    //         Name:'TABLE EN BOIS MASSIF CHÊNE',
    //         Hauteur:78,
    //         Largeur:156,
    //         Profondeur:86,
    //         Prix:'150,000',
    //         Reference:'TRMBTAB005',
    //         Quantity:4,
    //         SousCategorie:'Tables',
    //         Categorie:'Mobilier',
    //     Image:'img30.png'
    //     },
    
    //     {     
    //         Name:'TABLE OR',
    //         Hauteur:76,
    //         Profondeur:150,
    //         Prix:'150,000',
    //         Reference:'TRMBTAB008',
    //         Quantity:4,
    //         SousCategorie:'Tables',
    //         Categorie:'Mobilier',
    //     Image:'img31.png'
    //     },
    
    //     {     
    //         Name:'TABLE SPIDER',
    //         Hauteur:70,
    //         Largeur:160,
    //         Profondeur:75,
    //         Prix:'38,000',
    //         Reference:'TRMBTAB008',
    //         Quantity:4,
    //         SousCategorie:'Tables',
    //         Categorie:'Mobilier',
    //     Image:'img32.png'
    //     },
    
    //     {     
    //         Name:'BAR MINUTY',
    //         Hauteur:98,
    //         Largeur:208,
    //         Profondeur:90,
    //         Prix:'250,000',
    //         Reference:'TRMBBBF019',
    //         Quantity:4,
    //         SousCategorie:'Bars et buffets',
    //         Categorie:'Mobilier',
    //     Image:'img33.png'
    //     },
    
    //     {     
    //         Name:'BUFFET MINUTY GM',
    //         Hauteur:90,
    //         Profondeur:70,
    //         Prix:'65,000',
    //         Reference:'TRMBBBF020',
    //         Quantity:4,
    //         SousCategorie:'Bars et buffets',
    //         Categorie:'Mobilier',
    //     Image:'img34.png'
    //     },
    
    //     {     
    //         Name:'BUFFET A COLONNE',
    //         Hauteur:90,
    //         Largeur:220,
    //         Profondeur:80,
    //         Prix:'60,000',
    //         Reference:'TRMBBBF019',
    //         Quantity:4,
    //         SousCategorie:'Bars et buffets',
    //         Categorie:'Mobilier',
    //     Image:'img35.png'
    //     },
    
    //     {     
    //         Name:'PAGODE 5x5',
    //         Hauteur:500,
    //         Largeur:500,
    //         Prix:'450,000',
    //         Reference:'TRSATNT003',
    //         Quantity:4,
    //         SousCategorie:'tentes-chapiteaux',
    //         Categorie:'tentes-abris',
    //     Image:'img36.png'
    //     },
    
    //     {     
    //         Name:'PARASOL 4X4',
    //         Hauteur:300,
    //         Largeur:300,
    //         Prix:'45,000',
    //         Reference:'TRSATNT004',
    //         Quantity:4,
    //         SousCategorie:'abris-parasols',
    //         Categorie:'tentes-abris',
    //     Image:'img37.png'
    //     },
    
    //     {     
    //         Name:'PAGODE 5x5',
    //         Hauteur:500,
    //         Largeur:500,
    //         Prix:'450,000',
    //         Reference:'TRSATNT004',
    //         Quantity:4,
    //         SousCategorie:'abris-parasols',
    //         Categorie:'tentes-abris',
    //     Image:'img38.png'
    //     },
    
    //     {     
    //         Name:'ABRIS PLIANT',
    //         Hauteur:400,
    //         Largeur:400,
    //         Prix:'100,000',
    //         Reference:'TRSATNT003',
    //         Quantity:4,
    //         SousCategorie:'abris-parasols',
    //         Categorie:'tentes-abris',
    //     Image:'img39.png'
    //     },
    
    //     {     
    //         Name:'IGLOO',
    //         Hauteur:270,
    //         Largeur:330,
    //         Profondeur:300,
    //         Prix:'98,000',
    //         Reference:'TRSATNT005',
    //         Quantity:4,
    //         SousCategorie:'tentes-gonflables',
    //         Categorie:'tentes-abris',
    //     Image:'img40.png'
    //     },
    
    //     {     
    //         Name:'KITE 400',
    //         Hauteur:400,
    //         Profondeur:400,
    //         Prix:'350,000',
    //         Reference:'TRSATNT005',
    //         Quantity:4,
    //         SousCategorie:'tentes-gonflables',
    //         Categorie:'tentes-abris',
    //     Image:'img41.png'
    //     },
    
    //     {     
    //         Name:'THE CUBE',
    //         Hauteur:1500,
    //         Largeur:2500,
    //         Prix:'6 500,000',
    //         Reference:'TRSATNT007',
    //         Quantity:4,
    //         SousCategorie:'tentes-gonflables',
    //         Categorie:'tentes-abris',
    //     Image:'img42.png'
    //     },
    
    //     {     
    //         Name:'PARAVENT MOUCHARABIER',
    //         Hauteur:235,
    //         Largeur:152,
    //         Prix:'120,000',
    //         Reference:'TRCLPRV003',
    //         Quantity:4,
    //         SousCategorie:'paravents',
    //         Categorie:'cloisons',
    //     Image:'img43.png'
    //     },
    
    //     {     
    //         Name:'PARAVENT MEDINA',
    //         Hauteur:250,
    //         Largeur:185,
    //         Prix:'80,000',
    //         Reference:'TRCLPRV001',
    //         Quantity:4,
    //         SousCategorie:'paravents',
    //         Categorie:'cloisons',
    //     Image:'img44.png'
    //     },
    
    //     {     
    //         Name:'PARAVENT SPIDER',
    //         Hauteur:146,
    //         Largeur:100,
    //         Prix:'55,000',
    //         Reference:'TRCLPRV005',
    //         Quantity:4,
    //         SousCategorie:'paravents',
    //         Categorie:'cloisons',
    //     Image:'img45.png'
    //     },
    
    //     {     
    //         Name:'STRUCTURE TRIDENT',
    //         Hauteur:340,
    //         Largeur:73,
    //         Prix:'74,000',
    //         Reference:'TRCLPRV008',
    //         Quantity:4,
    //         SousCategorie:'structures-auto-portees',
    //         Categorie:'cloisons',
    //     Image:'img46.png'
    //     },
    
    //     {     
    //         Name:'ARCHE LYCRA',
    //         Hauteur:400,
    //         Largeur:196,
    //         Prix:'120,000',
    //         Reference:'TRCLPRV011',
    //         Quantity:4,
    //         SousCategorie:'structures-auto-portees',
    //         Categorie:'cloisons',
    //     Image:'img47.png'
    //     },
    
    //     {     
    //         Name:'TUNNEL LYCRA',
    //         Hauteur:214,
    //         Largeur:200,
    //         Prix:'90,000',
    //         Reference:'TRCLPRV008',
    //         Quantity:4,
    //         SousCategorie:'structures-auto-portees',
    //         Categorie:'cloisons',
    //     Image:'img48.png'
    //     }])
    
        
    
    
    // .then(product=>res.status(200).json(product))

