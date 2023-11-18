import axios from 'axios'
import "./Login.css"
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const Login = () => {
    const [logindata, setlogindata] = useState({
        email:"",password:""
    })
    const [validuser, setvaliduser] = useState([]);

    const [serverdata, setserverdata] = useState("")

    const navigate = useNavigate()

let name,value;

const handleuserdata=(e)=>{
    
    name=e.target.name;
    value=e.target.value;
    setlogindata([{...logindata,[name]:value}]);

}

const handlelogin =()=>{

    console.log(logindata)

    const findemail =serverdata.find( ele=>{
        return ele.email===logindata[0].email
    })

    // setvaliduser(findemail)
    // console.log(validuser)

    if(findemail.email==logindata[0].email){
        navigate('/airlineportal')
    }else{
        alert("somethig went wrong......")
    }

}



function logindetails(){
    try{
        axios.get("http://localhost:5000/posts").then( (res)=>{setserverdata(res.data)})
        console.log(serverdata)

    }catch{
        console.log("Something Went wrong.....")

    }
}

useEffect( ()=>{
  logindetails()
 },[])



  return (
    <div>
<div className='main_login'>

<div className='sign_login'>
    <h2>LOGIN</h2>
</div>

<div className='form_login'>

    <input type="email" className='input_filed' placeholder='Enter Email' onChange={handleuserdata} name='email'  ></input><br></br>

    {/* <input type="password" className='input_filed' placeholder="Enter Password" onChange={handleuserdata} name='password'></input><br></br> */}

    <button type='button' className='btn_login' onClick={handlelogin}>LOGIN</button><br></br>

</div>


</div>

    </div>
  )
}
