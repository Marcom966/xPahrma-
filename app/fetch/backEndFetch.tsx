"use client"
import React, { useEffect, useState } from "react";
import axios, * as others from 'axios';
import Row from 'react-bootstrap/Row';
import Card from "../Card/Card";

const backEndFetch = () =>{
    const [product, setProduct] = useState([]);
    let Url = 'http://127.0.0.1:8000/database/';
    useEffect(()=>{
        async function axiosFunc(Url: string){
            const resp = await axios.get(Url);
            let resp2 = resp.data;
            setProduct(resp2);           
        }
        axiosFunc(Url);
    },[]);
    console.log(product);
    
    
        
    return(
        <div className="row-wrapper" style={{marginRight: "400px"}}>
            <Row style={{width: "200rem", height: "20rem", display: "inline", marginRight: "400px"}}>
                {/*{Array.isArray(product) ?
                product.map((prod, index)=>{
                    return <Card image={prod} year={movie.Year} image={movie.Poster} key={index}/>
                }): null}
            */}
            </Row>
        </div>
    )
        
}

export default backEndFetch;
