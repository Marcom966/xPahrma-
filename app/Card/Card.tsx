import React, { useCallback, useState, Component, useEffect } from "react";
import { Model } from "../Model/Model";
import Modal from 'react-modal';
import './Card.css';
    
const Card = ({ object, image, title, description, price}:{object: Object, image: any, title: any, description: any, price: any}) =>{

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue = ()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse = ()=>{
        setModalIsOpen(false)
    }


        
    
    return(

        <div className="containerCerd2">
            <img src={image} alt={"Immagine non disponibile"}></img>
            <h3>{title}</h3>
            <p id="pmodal">{description}</p>
            <p className="price">{price}€</p>
            <button type="button" style={{borderRadius: "10px", backgroundColor: "transparent", boxShadow: "1px 1px 1px #ffffff", color: "white", width: "100px"}} onClick={setModalIsOpenToTrue}>Più Dettagli</button>

            <Modal className="containerModall" isOpen={modalIsOpen} ariaHideApp={false}>
                <button className="buttonCard" onClick={setModalIsOpenToFalse}>x</button>
                <Model object={object}/>
            </Modal>
        </div>
    )
    
}
export default Card;