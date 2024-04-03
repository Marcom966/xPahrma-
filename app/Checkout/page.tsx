"use client"
import React from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function Checkout (){
    const searchParams = useSearchParams();
    const search = searchParams.get('name');
    const price = searchParams.get('price');
    const route = useRouter();    

    return (
            <div className="complimenti">
                <h1 className="h1">
                    Stai acquistando {search}
                </h1>
                <p className="pCheckout">Totale: {price}€</p>
                <button className="button" type="button" onClick={()=>route.push('/ThankYou')}>Acquista</button>
            </div>
            );
}
export default Checkout