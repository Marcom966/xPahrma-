import React, { useCallback, useState, Component, useEffect } from "react";
import { Model } from "../Model/Model";
import Modal from 'react-modal';
import './Card.css';


//Componente card     
const Card = ({ object, image, title, description, price}:{object: Object, image: any, title: any, description: any, price: any}) =>{

    const [modalIsOpen, setModalIsOpen] = useState(false); //inizializzo useState

    const setModalIsOpenToTrue = ()=>{ //funzione per apertura modale
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse = ()=>{ //funzione per chiusura modale
        setModalIsOpen(false)
    }


        
    
    return(

        <div className="containerCerd2"> {/** Ritraggo da props dati provenienti da BackendFetch e li sistemo nelle variabili corrette*/}
            <img src={image} alt={"Immagine non disponibile"}></img>
            <h3>{title}</h3>
            <p id="pmodal">{description}</p>
            <p className="price">{price}€</p>
            <button type="button" style={{borderRadius: "10px", backgroundColor: "transparent", boxShadow: "1px 1px 1px #ffffff", color: "white", width: "100px"}} onClick={setModalIsOpenToTrue}>Più Dettagli</button> {/** Bottone per apertura modale */}

            <Modal className="containerModall" isOpen={modalIsOpen} ariaHideApp={false}> {/** Codice modale */}
                <button className="buttonCard" onClick={setModalIsOpenToFalse}>x</button>{/** Bottone chiusura modale */}
                <Model object={object}/> {/** Componente modale a cui passo oggetto con dati */}
            </Modal>
        </div>
    )
    
}
export default Card;