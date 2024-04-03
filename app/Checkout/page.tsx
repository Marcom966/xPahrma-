"use client"
import React from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import "./checkout.css";

function Checkout (){
    const searchParams = useSearchParams();
    const search = searchParams.get('name');
    const price = searchParams.get('price');
    const route = useRouter();    

    return (
        <center>
            <div className="complimenti">
                <h1 className="h1">
                    Stai acquistando: {search}
                </h1>
                <p className="pCheckout">Totale: {price}€</p>
                <button className="buttonCheckout" type="button" onClick={()=>route.push('/ThankYou')}>Acquista</button>
            </div>
        </center>
        );
}
export default Checkout