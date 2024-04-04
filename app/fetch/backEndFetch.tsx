"use client"
import React, { useEffect, useState } from "react";
import axios, * as others from 'axios';
import Row from 'react-bootstrap/Row';
import Card from "../Card/Card";
import './backEndFetch.css';

//Componente fetch da backend
const backEndFetch = () =>{
    const [product, setProduct] = useState([]); //inizializzo useState
    let Url = 'http://127.0.0.1:8000/database/'; //url backend da cui prendere i dati
    useEffect(()=>{ //useRffect (react hook)
        async function axiosFunc(Url: string){ //funzione get in axios che "prende" i dati dal backend e popola variabile product di useState con dati ricevuti
            const resp = await axios.get(Url);
            let resp2 = resp.data;
            setProduct(resp2);           
        }
        axiosFunc(Url);
    },[]);
    
   
    return(
        <div className="row-wrapper" style={{marginRight: "400px"}}>{/** Schelettro HTML per formazione card */}
            <Row className="rowB" style={{width: "200rem", height: "20rem", display: "inline", marginRight: "400px"}}>{/** tag riga per mettere tutte le cards sulla stessa riga */}
                {Array.isArray(product) ?
                product.map((prod: any, index)=>{{/** ciclo sui protti ricevuti da chiamata axios prima, creo dinamicamente cards con dati e gli passo dati tramite props che poi serviranno a componente Card*/}
                    return <Card image={prod.image} title={prod.name} description={prod.description} price={prod.price} object={prod} key={index}/>
                }): null}
            </Row>
        </div>
    )
        
}

export default backEndFetch;
