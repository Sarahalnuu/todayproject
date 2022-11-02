import React, { useEffect, useState } from 'react';
import axios from "axios";

 export default function Pagee() {
  const [state, setstate] = useState([])
     useEffect (() => {
       axios.get("https://api.nationalize.io/?name=michael").then((res) => {
    console.log(res.data.country)
    setstate(res.data.country)
       })
        }, [])
   return (
    <div className='Pag'>
        {state.map(items => {
     return(
        <>
       {/* <img src={items.country_id}/> */}
        <p>{items.country_id}</p>
        <p>{items.probability}</p>
        </>
      )
    })}
     </div>
   )
 }

