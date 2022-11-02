import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Create from './component/Create';

function App() {
   const [state, setstate] = useState([])
   useEffect (() => {
       axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      console.log(res.data.results);
        setstate(res.data.results)
    })
     }, [])

  // const [state, setstate] = useState([])
  //  useEffect (() => {
  //    axios.get("https://6362425566f75177ea2a9ac0.mockapi.io/Todolist").then((res) => {
  //   console.log(res.data);
  //   setstate(res.data);
  //  })
  //   }, [])

   return (
    <div className="App">

     {/* <Create></Create> */}

     {state.map(items => {
    return(
      <>
      <img src={items.image}/>
      <p>{items.name}</p>
      </>
    )
  })}   

 {/* {state.map(items => {
    return(
      <>
      <p>{items.fName}</p>
      <p>{items.email}</p>
      </>
    )
  })}  */}
    </div>
  );
   } 


export default App;
