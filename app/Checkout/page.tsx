"use client"
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import "./checkout.css";
import Link from "next/link";

function Checkout (){
    const [val, setVal] = useState('');
    const [val2, setVal2] = useState('');
    const [val3, setVal3] = useState('');
    const [val4, setVal4] = useState('');
    const searchParams = useSearchParams();
    const search = searchParams.get('name');
    const price = searchParams.get('price');
    const change1 = (event: React.ChangeEvent<HTMLInputElement>) =>{
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


    return (
        <center>
            <div className="complimenti">
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
                <Link className="buttonCheckout" href={{pathname: './ThankYou', query: {Via: val, Ncivico: val2, CAP: val3, città: val4, prodotto: search}}}>Acquista</Link>
            </div>
        </center>
        );
}
export default Checkout