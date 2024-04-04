"use client"
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import "./checkout.css";
import Link from "next/link";

//Componente Checkout
function Checkout (){
    const [val, setVal] = useState('');
    const [val2, setVal2] = useState('');
    const [val3, setVal3] = useState('');
    const [val4, setVal4] = useState('');
    //Inizializzo useState

    const searchParams = useSearchParams();
    //Inizializzo useSearchParams

    let search = searchParams.get('name');
    let price = searchParams.get('price');
    //Ritraggo dati da url componente (nome e prezzo prodotto)

    const change1 = (event: React.ChangeEvent<HTMLInputElement>) =>{ //fuzioni per salvare valore in input
        setVal(event.target.value);
    }
    const change2 = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setVal2(event.target.value);
    }
    const change3 = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setVal3(event.target.value);
    }
    const change4 = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setVal4(event.target.value);
    }

    //se utente non aveva riempito tutti i parametri veniva rispedito in questa pagina e non aveva più accesso al 
    //prodotto che stava aquistando e quindi io "prendevo" i dati dal local storage e compilavo le variabili con essi (non richiesto)
    /*if(search==''&&price==''){
        search = localStorage.getItem('name');
        price = localStorage.getItem('price');
    }*/
  

    return (
        <center>
            <div className="complimenti">{/** Creazione schelettro html con form per compilazione dati e mostra di prezzo e prodotto in acquisto */}
                <h1 className="h1">
                    Stai acquistando: {search}
                </h1>
                <p className="pCheckout">Totale: {price}€</p>
                <h1 className="indirizzo">indirizzo di fatturazione:</h1>
                <p className="inserisci">Via</p>
                <input type="text" className="input1" placeholder="inserisci via" onChange={change1}></input>
                <p className="inserisci2">N° civico</p>
                <input type="text" className="input2" placeholder="inserisci numero civico" onChange={change2}></input>
                <p className="inserisci3">CAP</p>
                <input type="text" className="input3" placeholder="inserisci CAP" onChange={change3}></input>
                <p className="inserisci4">Città</p>
                <input type="text" className="input4" placeholder="inserisci Città" onChange={change4}></input>
                <Link className="buttonCheckout" href={{pathname: './ThankYou', query: {Via: val, Ncivico: val2, CAP: val3, città: val4, prodotto: search}}}>Acquista</Link>{/** In caso di acquisto passaggio a pagina ThankYou in cui viene mostrato prodotto acquistato e breve recap dati di spedizione */}
            </div>
        </center>
        );
}
export default Checkout