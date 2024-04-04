"use client"
import React from "react";
import { useRouter } from "next/navigation";
import './Instructions.css'

//Componente istruzioni
export default function Instructions(){
    const router = useRouter(); //inizializzo useRouter
    return(
        <div className="Istruzioni">{/** Schelettro Html con tutti i testi da mostrare */}
            <h1 className="h1Istru">
                Come usare questo sito.
            </h1>
            <p className="pIstru">
                Andare alla homepage, comprare un prodotto, immettere informazioni spedizione
                (ATTENZIONE!, SE QUEST'ULTIME NON VENGONO IMMESSE IL PRODOTTO NON VERRA' SPEDITO,
                stiamo risolvendo il problema), cliccare su acquista. Eventualmente tornare alla 
                homepage per eseguire altri acquisti.
            </p>
            <button type="button" id="button" className="buttonBack" onClick={()=>router.push('/')}>Torna alla homepage</button>{/** Bottone per tornare alla homepage */}
        </div>
    )
}