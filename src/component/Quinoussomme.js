import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";

const FeaturesPage = () => {
  return (
    <section className="my-5" style={{fontFamily:'timesnewroman'}}>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
        QUI SOMMES-NOUS
        </h2>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
        Vous trouverez en magasin tout le nécessaire à l’élaboration de vos évènements.


        </p>

        <MDBRow>
          <MDBCol lg="5" className="text-center text-lg-left" >
            <img
              className="img-fluid"
              src="\apropos.png"
              alt=""
              style=
                    {{
                        marginLeft: 130 , 
                        height: 460
                     }}
              
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Pour Vos Besoins En Materiel Evenementiel</h5>
                <p className="grey-text">   
                             « l’événement à la carte» vous offre, pour la première fois en Tunisie, la possibilité de sélectionner et louer en quelques clics, du matériel pour vos événements. Que vous soyez professionnel ou particulier, notre plateforme en ligne vous propose une large gamme de mobilier, cloisons, accessoires et structures d’accueil

                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Notre Objectif</h5>
                <p className="grey-text">
                ProjectX.tn, est uniquement dédié à la location de matériel événementiel.<br/>
                Notre mission est de vous fournir du matériel alliant design et innovation et de vous garantir la livraison en temps et en heure de produits de qualité.

                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Nos Services</h5>
                <p className="grey-text">  
                <MDBIcon icon="headset" />     Assistance à la commande<br/>
                <MDBIcon icon="truck-moving" />     Livraison<br/>
                <MDBIcon icon="tools" />      Installation et mise en place<br/>
                <MDBIcon icon="hammer" />      Démontage<br/>
                
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default FeaturesPage;