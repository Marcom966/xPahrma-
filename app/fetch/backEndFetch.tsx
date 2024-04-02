import React, { useEffect, useState } from "react";
import axios, * as others from 'axios';
import Row from 'react-bootstrap/Row';
//import Cerd from "../Cerd/Cerd";

const backEndFetch = () =>{
    let Url = 'http://127.0.0.1:8000/database/';
    let products = [];
    useEffect(()=>{
        async function axiosFunc(Url: string){
            const resp = await axios.get(Url);
            const resp2 = resp.data;
            let search = resp2.Search;
            console.log(search);
            
        }
        axiosFunc(Url);
    },[]);
        
    return(
        <div className="row-wrapper" style={{marginRight: "400px"}}>
            <Row style={{width: "200rem", height: "20rem", display: "inline", marginRight: "400px"}}>
                {/*{//Array.isArray(movies) ?
                movies.map((//movie, index)=>{
                    return <Cerd name={movie.Title} year={movie.Year} image={movie.Poster} key={index}/>
                }): null}
            */}
            </Row>
        </div>
    )
        
}

export default backEndFetch;
