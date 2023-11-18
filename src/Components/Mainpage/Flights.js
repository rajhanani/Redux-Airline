import React from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import "./Flights.css"
import { useDispatch } from 'react-redux';
import { getAir } from '../redux/actions.js/index.js';
import { useNavigate } from 'react-router-dom';

export const Flights = () => {
    const [searchflights, setsearchflights] = useState([])
    const [first, setfirst] = useState([])

    const dispatch = useDispatch()
    const navigate = useNavigate()

useEffect ( ()=>{

    axios.get("http://localhost:5000/Airlinedata").then( (res)=>{setsearchflights(res.data)})

//   const my20= searchflights.filter( (word)=>word.id>=0 && word.id!=null && word.id<=20);

//  ;
//   console.log(first)
const my20= searchflights.filter( (word)=>word.id>=0 && word.id!=null && word.id<=20);
 console.log(first)
setfirst(my20)

},[searchflights])



const showairline=(ele)=>{
    dispatch( getAir(ele))
    console.log("get aie action")
    navigate(`/oneairline/${ele?.id}`)
}


  return (
    <div className='airline_portal'>
       
{
    first.map( (ele)=>{
        return (
            <>
    <div className='airline_details' onClick={()=>showairline(ele)}>

<div className='airline_details_1'>

<div className='airline_logo'>
    <img src={ele.logo}></img>
</div>

{/* <div className='airline_slogon'>
    <p>{ele.slogan}</p>
</div> */}

</div>
<div className='airline_details_2'>

<div className='airline_name'>
    <h2>{ele.name}</h2>
</div>

<div className='airline_country'>
    <h3>{ele.country}</h3>
</div>

{/* <div className='airline_head'>
    <p>{ele.head_quaters}</p>
    <a href={ele.website}>{ele.website}</a>
    <p>{ele.established}</p>
</div> */}

</div>

</div>
</>

)
})

}
    </div>
  )
}
