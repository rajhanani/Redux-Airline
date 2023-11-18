import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Oneairline.css'
import { useNavigate } from 'react-router-dom';

export const Oneairline = () => {
    const [oneitem, setoneitem] = useState([]);

    const navigate = useNavigate()

    const getitem = useSelector( (state)=>state.airreducer.getflight)
    console.log(getitem);

    const {id} = useParams()

    const match =()=>{
        let matchitem = getitem.filter( (e)=>{
            return e.id==id
        })
        setoneitem(matchitem)
      
    }

    useEffect ( ()=>{
        match()
      
    },[id])

    console.log(oneitem)

    const backtohome =()=>{
        navigate("/airlineportal")
    }

  return (
    <div>
      
  { 
  oneitem.map( (ele,id)=>{

    return (
<>
<div className='onemain'>

<div className='onemain_1'>

<div className='onemain_1_logo'>
  <img src={ele.logo}></img>
</div>

<div className='onemain_1_slogan'>
 <p>{ele.slogan}</p>
</div>

</div>

<div className='onemain_2'>

    <div className='onemain_2_name'>
        <h2>{ele.name}</h2>
    </div>

    <div className='onemain_2_country'>
        <h3>{ele.country}</h3>
    </div>

    <div className='onemain_2_head'>
    <p>{ele.head_quaters}</p>
    <p><a href={ele.website}>{ele.website}</a></p>
    <p>{ele.established}</p>
    </div>

</div>

<div className='back_home'>
<button className='back_btn' onClick={backtohome}>BACK HOME</button>
</div>

</div>


</>
)
})  }

   
        
    </div>
  )
}
