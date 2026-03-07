// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import { useRef } from 'react';
// import Header from './Header';
// import { useState,useEffect, React } from 'react';


      //what is useref? -dom manipulate
      //How to use it?
      //concept of prop drilling
      //how to avoid it
// function App() {
//   const name = "shivam"
  // const refElement = useRef("");
  // const[name, setName] = usestate("Shivam")
  // console.log(refElement)
  // function Reset(){
  //   setName("")
  //   refElement.current.focus()
  // }
  // function handleInput(){
  //   refElement.current.style.color="blue"
  // }
//   const [count, setcounter] = useState(0)
//   const [data, setData] = useState("Ram")
// useEffect( ()=>{
//   console.log("component mounted")
// },[])


//   function updateCount(){
//     setcounter(count + 1)
//   }
//   function updateData(){
//     setData("Seeta")
// }
    // var x = 10;
  // function updatestate(){
    // x = 15;
  // }
    // const x = 10;
  // return (
  //   <> //fragment
  // <ChildA name={name}/>
    {/* <h1></h1>
    <input ref= {refElement} type = "text" value={name} onChange={(e)=> setName(e.target.value)}></input>
    <button onclick={Reset}>Reset</button>
    <button onClick={handleInput}>handle input</button> */}
    {/* <h1>Button clicked {count} times</h1>
    <button onclick={updatecount}>click </button>
    <button onclick={updateData}>update Data</button> */}
    {/* <h1>Learning state {x}</h1>
    <button on click={updatestate}>click me</button> */}
    {/* <Header name = "shivam"/>
    <Header name = "shivamagrawal_07"/> */}
   {/* <h1 className= 'x'>hello world</h1> */}
   {/* <p>{(x) > 15?"Greater": "Smaller" }</p> //we will not use if else in jsx but use turnary operator */}
//    </>
//   );
// }

// export default App;


// import './App.css';
// import React, { createContext } from 'react';
// import ChildA from './ChildA';

//What is context API?
//Create, provider, consumer
//How to use it?
//is context api also problematic? - usecontext hook

// const data = createContext();
// const data1 = createContext();
// function App(){
//   const name = "shivam"
//   const gender = "male"
//   return(
//     <>
//     <data.provider value = {name}>
//         <data1.provider value = {gender}>
//       <ChildA/>  
//       </data1.provider>
//     </data.provider>
//     </>
//   );
// }

// export default App;
// export {data, data1}; 


/////////////////////////////////////use context in react/////////////////////////////////////////////////////
// import './App.css';
// import React, {createContext} from 'react';
// import ChildA from './ChildA';

//What is usecontext hook?
//create, provider, usecontext
//how to use it
// const data = createContext();
// const data1 = createContext();

// function App(){
//   const name = "shivam"
//   const gender = "male"
//   return(
//     <>
//     <data.Provider name={name}>
//     <data1.Provider value={gender}>
//     <ChildA/>
//     </data1.Provider>
//     </data.Provider>
//     </>
//    );
// }

// export default App;
// export {data, data1}; 


//////////////////////////////////////////use memo in react////////////////////////////////////////////////////
// import './App.css';
// import React, { useMemo, useState } from 'react';

//What is usememo and why we use it?
//How to use memo with example?

// function App(){
//   const [add, SetAdd]= useState(0);
//   const [minus, SetMinus]= useState(100);

//  const multipliclation = useMemo(function multiply(){
//   console.log("*****************")
//   return add*10;
//  } ,[add])
//   return(
//     <div className = 'App'>
//       <h1>Learning usememo</h1>
//       {multiplication}<br/>
//       <button onClick = {()=>SetAdd(add + 1)}>addition</button>
//       <span>{add}</span><br/>

//       <button onclick = {()=>SetMinus(minus - 1)}>subtraction</button>
//       <span>{minus}</span>
//     </div>
//   );
// }

// export default App;

///////////////////////////////////////use callback in memo/////////////////////////////////////////////////////

import './App.css';
import React, {useState} from "react";

//What is usecallback and why we use it?
//How to use useCallback with example?

function App(){
  const [add,Setadd]= useState(0);
  return(
    <div className='App'>
      <h1>Learning useCallback</h1>
      <h1>{add}</h1>
      <button onClick={()=>setAdd(add + 1)}>Addition</button>
    </div>
  )
} 

// export default App;