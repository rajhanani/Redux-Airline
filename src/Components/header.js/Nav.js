import React from 'react';
import "./Nav.css";
import {useNavigate} from 'react-router-dom'

export const Nav = () => {

  const navigate = useNavigate()

  const gotobook=()=>{
    navigate("/addflight")
  }

  const gotosignup=()=>{
    navigate("/")
  }

  return (
    <div className='nav_main'>

        <div className='nav_img'>
            {/* <img src='https://previews.123rf.com/images/deniskolt/deniskolt1712/deniskolt171200003/91087111-flying-airplane-logo-or-emblem-travel-icon-vector-illustration.jpg'></img> */}

            <img src='https://logos-world.net/wp-content/uploads/2021/02/Alaska-Airlines-Logo-2014-2016.png'></img>

        </div>
        
<div className='add_Flight'>
    <button onClick={gotobook} className="add_btn">Add Flight</button>
    <button className='logout_btn' onClick={gotosignup}>LOGOUT</button>
</div>

    </div>
  )
}
