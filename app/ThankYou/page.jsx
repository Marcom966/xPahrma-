"use client"
import React from "react";
import { useRouter } from "next/navigation";
import './Thankyou.css';
import { useSearchParams } from "next/navigation";

const ThankYou = () =>{
    const router = useRouter();
    const searchParams = useSearchParams();
    const Via = searchParams.get('Via');
    const Ncivico = searchParams.get('Ncivico');
    const CAP = searchParams.get('CAP');
    const città = searchParams.get('città');
    const prodotto = searchParams.get('prodotto');


    return(
        <div className="ThankYou">
            <h1 className="bigH1">Grazie per l'acquisto</h1>
            <center>
            <p className="acquisto">Hai acquistato: {prodotto}</p>
            <p className="acquisto2">{Via}</p>
            <p className="acquisto3">{Ncivico}</p>
            <p className="acquisto4">{CAP}</p>
            <p className="acquisto5">{città}</p>
            </center>
            <button type="button" className="buttonThanks" id="button" onClick={()=>router.push('/')}>Torna alla homepage</button>
        </div>
    )
}
export default ThankYou;