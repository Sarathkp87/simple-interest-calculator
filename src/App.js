import { Button, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';
function App() {

  //state creation
  const[principle,setPrinciple]=useState(0)
  const[year,setYear]=useState(0)
  const[rate,setRate]=useState(0)
  const[interest,setInterest]=useState(0)
  console.log(principle);
  console.log(interest);
  console.log(year);

  const handleCalculate=(e)=>{
    let output = principle*year*rate/100
    console.log(output);
    setInterest(output)

  }
  const handleReset=(e)=>{
    setPrinciple(0)
    setYear(0)
    setInterest(0)
    setRate(0)
  }

  return (
    <div className="App">
      <header className="App-header">
       <div className="container">
        <div className="head">
          <h1>Simple Intrest Calculator</h1>
          <p>The simple interest calculator is a handy tool for individuals and businesses to estimate the interest they can earn on investments or the interest they need to pay on loans. It helps users make informed financial decisions by providing a clear understanding of the impact of interest on their finances.</p>
        </div>

        <div className='card'>
          <h3 className='symbol'>&#8377;{interest}</h3>
          <p id='para'>Your total simple intrest</p>
        </div>

        <div className="input">
        <TextField  id="outlined-basic" label="Principle Amount" variant="outlined" onChange={e=>setPrinciple(e.target.value)} value={principle} /> 
        <br/>
        <TextField id="outlined-basic" label="Rate of Interest" variant="outlined" onChange={e=>setRate(e.target.value)} value={rate} />
        <br/>
        <TextField id="outlined-basic" label="Number of Years" variant="outlined" onChange={e=>setYear(e.target.value)} value={year} /> 
         <br/>
         <Button variant="contained" onClick={handleCalculate }>Calculate</Button>
         <br/>
          <Button variant="outlined" onClick={handleReset}>Reset</Button>
        </div>
        
       </div>
      </header>
    </div>
  );
}

export default App;
