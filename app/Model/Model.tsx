"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";


export function Model({object}:{object: Object}){
    let arrayFromObj: any[] = []
    arrayFromObj = Object.values(object);

    
    return(
        <div className="containerModal" id="modal">
            <center>
                <img src={arrayFromObj[1]} alt={arrayFromObj[0]} style={{border: "1px solid white", boxShadow: "0 0 15px #fff"}}></img>
                <h1>{arrayFromObj[1]}</h1>
                <p>Descrizione: {arrayFromObj[4]}</p>
                <p>Prezzo: {arrayFromObj[3]}</p>
                <p>Proprietario: {arrayFromObj[5]}</p>
                <p>Caricato il: {arrayFromObj[2]}</p>
                <p>Disponibilità: {arrayFromObj[6]}</p>
            </center>
            <Link className="link" href={{pathname:'/Checkout', query: {name: arrayFromObj[0]}}}>
                Acquista questo prodotto
            </Link>
        </div>
    )
}