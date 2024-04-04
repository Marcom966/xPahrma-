"use client"
import {useState, useMemo} from 'react';
import BackEndFetch from '../fetch/backEndFetch';
import './home.css';
import { useRouter } from "next/navigation";

//Effettiva pagina home indicata con '/' nelle rotte
//(Model, Card, e backendFetch sono chiamati con il proprio nome invece di page.tsx perchè 
// sono delle parti di pagina home invece che essere pagine a parte).

export default function Home(){
  const router = useRouter(); //inizializzo useRouter
  
  return ( //creo architetrtura html per pagina home
    <div className="App">
      <div className='container'>
        <h1 className='title'>Giardinaggio</h1>
      </div>
    <div className="row" id="rowButtons">
        <div className='containerHome'>
          <BackEndFetch/> {/* primo componente contenente il resto della pagina home*/}
        </div>
      </div>
      <button className='buttonIstruzioni' type="button" id='button' onClick={()=>router.push('./Instructions')}>Come usare questo sito</button>
    </div>
  )
}
