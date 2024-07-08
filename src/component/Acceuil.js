import React from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";

const Acceuil = () => {
  return (<div>
    <MDBContainer style={{marginTop:40}}>
    <MDBCarousel
    activeItem={1}
    length={3}
    showControls={true}
    showIndicators={true}
    className="z-depth-1"
  >
    <MDBCarouselInner>
      <MDBCarouselItem itemId="1">
        <MDBView>
          <img
            className="d-block w-100"
            src='\img-carrosel\carro 6.png'
            alt="First slide"
          />
        <MDBMask overlay="black-slight" />
        </MDBView>
      </MDBCarouselItem>
      <MDBCarouselItem itemId="2">
        <MDBView>
          <img
            className="d-block w-100"
            src="\img-carrosel\carro 5.png"
            alt="Second slide"
          />
        <MDBMask overlay="black-slight" />
        </MDBView>
      </MDBCarouselItem>
      <MDBCarouselItem itemId="3">
        <MDBView>
          <img
            className="d-block w-100"
            src="\img-carrosel\carro 4.png"
            alt="Third slide"
          />
        <MDBMask overlay="black-slight" />
        </MDBView>
      </MDBCarouselItem>
    </MDBCarouselInner>
  </MDBCarousel>
  </MDBContainer>
    <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
        Découvrez Nos Collections
        </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
        Vous êtes en pleine organisation de votre mariage, de votre cérémonie de remise de diplôme, vous allez fêter l’heureux événement de la naissance de votre enfant... autant d’occasions de vous faire plaisir et de partager des moments forts avec vos proches. Et pour cela vous voulez la plus belle des décorations. Avec les collections Ekrili, en quelques clics, tout est à portée de main. Un large choix de mobilier et d’éléments de décoration adaptés à chaque type d’événement et un univers approprié au lieu que vous avez choisi. Qu’il soit en outdoor, dans votre jardin, dans une salle des fêtes, en terrasse, dans un hôtel ou simplement dans votre grand salon ; que vous soyez un adapte de l’épuré ou du style baroque, nous vous offrons une palette de choix.
        </p>

        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="\acceuil1.jpg"
                alt=""
                className="img-fluid"
              />
                <MDBMask overlay="white-slight" />
              
            </MDBView>
            <MDBCardBody className="pb-0">
              <p className="green-text">
                <h4 className="font-weight-bold mt-2 mb-3">
                  Minuty
                </h4></p>
              
              <p>Entre expression du design et générosité des matériaux, la collection Minuty est composée d’un mobilier et d’éléments de décoration mariant robustesse de l’acier et raffinement. Une invitation à créer un événement chic, généreux et qui a du cachet. Cette collection généreuse par la rondeur de ses formes a aussi du caractère et se prête à la fête. Disponible dans sa trilogie de couleurs : or, noir et blanc, Minuty est la base d’une décoration d’exception, parfaite pour tout événement en intérieur comme en extérieur. Maintenant que les bases de notre mobilier Minuty sont posées, il ne vous reste plus qu'à composer : bibliothèques, buffets, tables basses, tables bistrots, totems, bar et structures, le tout parsemé de lumières tamisées, … A vous de jouer !
              </p>

            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="\acceuil2.jpg"
                alt=""
                className="img-fluid"
              />
                <MDBMask overlay="white-slight" />
            </MDBView>
            <MDBCardBody className="pb-0">
              <p className="blue-text">
                <h4 className="font-weight-bold mt-2 mb-3">
                  Cage
                </h4>
              </p>
              <p>
              Pour les amoureux de la Méditerranée, de la transparence et de la blancheur de nos étés, le fer forgé de notre Collection Cage vous séduira. L’association du fer forgé et du verre pour la création de tables, des cages en support de votre buffet, des structures aux formes douces et généreuses pour suspendre tout ce que vous souhaitez… autant d’éléments qui seront vos alliés pour créer une ambiance belle et épurée. Notre collection Cage s’adapte à toutes les ambiances : bohème, moderne ou traditionnelle tunisienne, à vous de rêver.</p>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="\acceuil3.jpg"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <p className="brown-text">
                <h4 className="font-weight-bold mt-2 mb-3">
                  Classique
                </h4>
              </p>
              <p>
                Le Classique c’est le style qui rend tout événement intemporel. Cette gamme vous offre un grand choix de mobilier et d’éléments de décoration qui plairont aux romantiques, aux amoureux du simple et du chic. Si vous rêvez d'une cérémonie élégante et sophistiquée, cette collection est très adaptée. Des chaises, des fauteuils, des canapés ultra glam, une collection digne de la royauté qui se déclinera à souhait avec tout type d’évènement.
              </p>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="\acceuil4.jpg"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <p className="cyan-text">
                <h4 className="font-weight-bold mt-2 mb-3">
                  Bridge
                </h4>
              </p>
               <p>
                    ISIS, OSIRIS et les pyramides d’Egypte ont sans nul doute inspiré cette collection aux lignes franches et épurées. Du mobilier au fort cachet, c’est ainsi que la gamme Bridge a été développée. Un design moderne au service du luxe décontracté. Une gamme de couleurs bronze et noir, ou or et ivoire pour des totems, pyramides, tables basses, buffets, bibliothèques, bars et consoles. Autant de possibilités pour concrétiser votre événement rêvé. Un caractère authentique, pour les passionnés des formes géométriques et des décorations de style atypiques.
              </p>
              
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </section>
      </div>
  );
}

export default Acceuil;