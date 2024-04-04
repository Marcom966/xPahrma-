"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import './Model.css';

//componente modale
export function Model({object}:{object: Object}){
    let arrayFromObj: any[] = []
    arrayFromObj = Object.values(object); /*ritraggo dati da props e li metto in un array dopo averli
                                            convertiti da object a array*/
    /*const localstorage = () =>{ //parte di codice che serviva ad inserire inb localstorage alcuni dati che servivano ad essere "ripresi" dal localstorage in caso in cui l'accesso a pagina thank you non avvenisse perchè l'utente non aveva inserito tutti i dati di fatturazione (non richiesto)
        localStorage.setItem('name', arrayFromObj[0]);
        localStorage.setItem('price', arrayFromObj[3]);
    }*/

    return(
        <div className="containerModal" id="modal">
            <center>{/** scompongo array e inserisco i dati direttamente nelle loro rispettive posizioni corrette */}
                <img src={arrayFromObj[1]} alt={arrayFromObj[0]} style={{border: "1px solid white", boxShadow: "0 0 15px #fff"}}></img>{/*Tag lasciato appposta sbagliato per motivi di DOM*/}
                <h1>Link immagine: {arrayFromObj[1]}</h1>
                <p>Descrizione: {arrayFromObj[4]}</p>
                <p>Prezzo: {arrayFromObj[3]}€</p>
                <p>Proprietario: {arrayFromObj[5]}</p>
                <p>Caricato il: {arrayFromObj[2]}</p>
                <p>Disponibilità: {arrayFromObj[6]} Pezzi/o</p>
            </center>
            <center>
            <Link className="link" href={{pathname:'/Checkout', query: {name: arrayFromObj[0], price: arrayFromObj[3]}}}>{/* Al click del link accedo a pagina Checkout e passo alcuni dati ad essa che ci serviranno*/}
                Acquista questo prodotto
            </Link>
            </center>
        </div>
    )
}