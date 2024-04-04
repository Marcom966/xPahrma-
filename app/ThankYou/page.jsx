"use client"
import React from "react";
import { useRouter } from "next/navigation";
import './Thankyou.css';
import { useSearchParams } from "next/navigation";

//componente finale appilcazione, thank you
const ThankYou = () =>{
    const router = useRouter(); //inizializzo useRouter
    const searchParams = useSearchParams(); //inizializzo useSerachParams

    //ritraggo dati di fatturazzione da url usando searchparams
    const Via = searchParams.get('Via');
    const Ncivico = searchParams.get('Ncivico');
    const CAP = searchParams.get('CAP');
    const città = searchParams.get('città');
    const prodotto = searchParams.get('prodotto');

    //Controllo che utente abbia compilato tutti i campi e in caso non sia così mostro errore e lo "rispedisco" a checkout per aggiustare l'errore (non richiesto)
    /*if(Via==''||Ncivico==''||CAP==''||città==''){
        window.alert('Non hai inserito le credenziali di spedizione');
        router.push('/Checkout');
        return null;
    }*/


    return(
        <div className="ThankYou"> {/** creazione schelltro HTML pagina con dati di fatturazione e prodotto acquistato */}
            <h1 className="bigH1">Grazie per l'acquisto</h1>
            <center>
            <p className="acquisto">Hai acquistato: {prodotto}</p>
            <p className="acquisto2">{Via}</p>
            <p className="acquisto3">{Ncivico}</p>
            <p className="acquisto4">{CAP}</p>
            <p className="acquisto5">{città}</p>
            </center>
            <button type="button" className="buttonThanks" id="button" onClick={()=>router.push('/')}>Torna alla homepage</button> {/** Bottone di ritorno alla homapage */}
        </div>
    )
}
export default ThankYou;