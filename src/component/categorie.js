import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn  } from "mdbreact";
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

const Categorie = (props) => {
  return (
    <section className='text-center my-5' style={{fontFamily:'timesnewroman'}}>
      <h2 className='h1-responsive font-weight-bold my-5'>Our Categories</h2>

      <MDBRow>
        <MDBCol md='12' className='mb-4'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:`url(/img-carrosel/carro1.png)`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
                
            }}
          >
            <div className='text-white text-center d-flex flex-column align-items-center rgba-black-strong py-5 px-4 rounded'>
              <h3 className='purple-text'>
              <p className='py-3 font-weight-bold'>
                <MDBIcon icon="chair" />
                <strong> Mobilier</strong>
              </p></h3>
              
              <p className='pb-3'>
              Superbe table rectangulaire modèle VINTAGE avec plateau et structure en pin vernis pour 8 à 10 personnes. Location mobilier mariage et location table et chaise.Dimensions …
              </p>
              <MDBBtn color='secondary' rounded size='md' onClick={()=>props.history.push("/categorie/Mobilier")}>
                <MDBIcon far icon='clone' className='left' /> Voir Plus 
              </MDBBtn>
            </div>
          </MDBCard>
        </MDBCol>

        <MDBCol md='6' className='md-0 mb-4'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:`url(/img-carrosel/carro2.png)`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
        
            }}
          >
            <div className='text-white text-center  d-flex align-items-center rgba-black-strong py-5 px-4 rounded'>
              <div>
                <h3 className='pink-text'>
                  <p className='py-3 font-weight-bold'>
                <MDBIcon icon="flask" />
                <strong> Accessoires</strong>
                </p></h3>
                <p className='pb-3'>
                On vous propose ses éléments de décoration en location ou en vente proposant aux particuliers, aux agences et aux collectivités, une solution sur catalogue et/ou sur-mesure pour tous projets de décoration. 
                </p>
                <MDBBtn color='pink' rounded size='md'onClick={()=>props.history.push("/categorie/Accessoires")}>
                  <MDBIcon far icon='clone' className='left' /> Voir plus
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol md='6' className='md-0 mb-4'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:`url(/img-carrosel/carro3.png)`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
        
            }}
          >
            <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded'>
              <div>
              
                <h3 className='green-text'>
                  <p className='py-3 font-weight-bold'>
                <MDBIcon icon="campground" />
                <strong> Tentes-Abris</strong>
                </p> </h3>
              
                <p className='pb-3'>
                ProjectX.tn, vous propose différents types de structures prêtes à accueillir vos événements privés ou professionnels : séminaires, réceptions, mariages, cocktails, événements d’entreprise, événements sportifs. Nous avons les structures permettant de répondre à chacun de vos besoins : tente de réception, tente nomade, tente stretch, toile tendue, barnum, chapiteau, pagode et garden cottage de plusieurs dimensions.
                </p>
                <MDBBtn color='success' rounded size='md'onClick={()=>props.history.push("/categorie/Tentes-Abris")}>
                  <MDBIcon far icon='clone' className='left' /> Voir plus
                </MDBBtn>
            
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default withRouter(Categorie);