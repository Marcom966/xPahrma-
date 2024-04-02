import React, { useCallback, useState, Component, useEffect } from "react";
import "./Cerd.css";
//import { Model } from "../Modal/Modal";
import Modal from 'react-modal';
    
const Card = () =>{

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue = ()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse = ()=>{
        setModalIsOpen(false)
    }
        
    
    return(

        <div className="containerCerd2">
            <img></img>
            <h3></h3>
            <p id="pmodal"></p>
            <button type="button" style={{borderRadius: "10px", backgroundColor: "transparent", boxShadow: "3px 3px 3px 3px #ffffff", color: "white"}} onClick={setModalIsOpenToTrue}>Più Dettagli</button>

            <Modal className="containerModall" isOpen={modalIsOpen} ariaHideApp={false}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                {/*<Model/>*/}
            </Modal>
        </div>
    )
    
}
export default Card;