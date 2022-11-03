import React, { useEffect, useState } from 'react';
import axios from "axios";

 export default function Pagee() {
  const [state, setstate] = useState([])
     useEffect (() => {
       axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=be3b01cb").then((res) => {
    console.log(res.data)
     setstate(res.data)
       })
        }, [])
   return (
    <div className='Pag'>
        {state.map(items => {
     return(
        <>
       <img src={items.image}></img>
        {/* <p>{items.country_id}</p> */}
        <p>{items.Year}</p> 
        </>
      )
    })}
     </div>
   )
 }

