"use client"
import React from "react";
import { useRouter } from "next/navigation";
import './Thankyou.css';

const ThankYou = () =>{
    const router = useRouter();
    return(
        <div className="ThankYou">
            <h1 className="bigH1">Grazie per l'acquisto</h1>
            <button type="button" className="buttonThanks" id="button" onClick={()=>router.push('/')}>Torna alla homepage</button>
        </div>
    )
}
export default ThankYou;