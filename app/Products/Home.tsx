import {useState, useMemo} from 'react';
import BackEndFetch from '../fetch/backEndFetch';


export default function Home(){

  
  return (
    <div className="App">
      <div className='container'>
        <h1 className='title'>Movie Galaxy</h1>
      </div>
    <div className="row" id="rowButtons">
          <button type='submit' style={{borderRadius: "10px", backgroundColor: "transparent", boxShadow: "3px 3px 3px 3px #ffffff", color: "white"}} onClick={handleClick}>Cerca</button>
          <input type="text" id="input" style={{borderRadius: "10px", backgroundColor: "transparent", boxShadow: "3px 3px 3px 3px #ffffff", marginRight: "40px", color: "white" }} name="message" placeholder="cerca il titolo di un film" onChange={handleChange}></input>
          <button type='submit' style={{borderRadius: "10px", backgroundColor: "transparent", boxShadow: "3px 3px 3px 3px #ffffff", color: "white"}} onClick={handleClickYear}>Cerca per anno</button>
          <input type="text" id="inputNew" style={{borderRadius: "10px", backgroundColor: "transparent", boxShadow: "3px 3px 3px 3px #ffffff", marginRight: "40px", color: "white" }} name="message" placeholder="cerca l'anno di uscita" onChange={handleChangeYear}></input>
        </div>
        <div className='containerHome'>
          <BackEndFetch/>
        </div>
    </div>
  )
}
