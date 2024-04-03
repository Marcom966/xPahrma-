import {useState, useMemo} from 'react';
import BackEndFetch from '../fetch/backEndFetch';
import './home.css';


export default function Home(){

  
  return (
    <div className="App">
      <div className='container'>
        <h1 className='title'>Giardinaggio</h1>
      </div>
    <div className="row" id="rowButtons">
        <div className='containerHome'>
          <BackEndFetch/>
        </div>
      </div>
    </div>
  )
}
