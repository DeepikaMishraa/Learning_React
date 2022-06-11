
import React,{useState} from 'react';
import './App.css';
function App() {

  // const names=["one","two","three","four","five"];
  const [x, setX]=useState(5);
  const [names,setName]=useState("Rohit");

function handleClick(str){
  if(str=="inc")
  {let y=x+1;
    setX(y);
  }
  else{
  let y=x-1;
  setX(y);
}

 
}



  return (
   <>
   {/* {names.map((item,index)=><h1 key={index}>{item}</h1>)} */}

   <h1>{x}</h1>
   <h1>{names}</h1>
   <button onClick={()=>setX(10)}>change to 10</button>
   <button onClick={()=>handleClick("inc")}>increase</button>
   <button onClick={()=>handleClick("dec")}>decrease</button>
   <input onChange={(e)=>setName(e.target.value)}/>


   </>
  );

}

export default App;
