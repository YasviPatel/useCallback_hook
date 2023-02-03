import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';
import List from './List'

function App() {

  const [number,setNumber]=useState(0);
  const [dark,setDark]=useState('true');

   const getItems=useCallback((increment)=>{
    return [number+increment,number+2+increment,number+2+increment];
   },[number]);

   const theme = {
      backgroundColor: dark ? "black" :"white",
      color: dark ? "white" : "black"
   }

  return (
    <div style={theme}>
      <input type='number' value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
      <button onClick={()=>setDark(prevDark=>!prevDark)}>Toggle Theme</button>
      <List getItems={getItems}/>
    </div>
  );
}

export default App;
