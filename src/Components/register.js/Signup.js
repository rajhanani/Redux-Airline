import React from 'react'
import './Signup.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {

  const [user, setuser] = useState({
    name:"",
    email:"",
    number:"",
    city:"",
    password:""
  });



  let name,value;

  const handleuser =(e)=>{
 name=e.target.name;
 value=e.target.value;
 setuser({...user, [name]: value})
 console.log(user)

}

const gologin=()=>{

  navigate("/login")
}

  var regex = /^[1-9][0-9]{9,9}$/                    //For phone number
  var regexemail =/^([a-z 0-9\.-]+)@([a-z]+).([a-z]{2,3})$/   //for Email
  
const navigate = useNavigate()

  async function handlesubmit() {
    
    try {
         if(user.name!=""&& user.email!=""&& user.number!="" && user.city!==""&& user.password!=""){

        if(regexemail.test(user.email)){

              if(regex.test(user.number)){

             await axios.post("http://localhost:5000/posts", user)
             console.log(user)
             navigate("/login");

             }else{
             document.getElementById("numbererror").innerHTML="**Number is Not valid"
              }

        }else{
              document.getElementById("emailerror").innerHTML=" **Email is Not valid";
        }
        
    }else{
            alert("All Fileds are required");
           }

           } catch (error) {
        console.log("something went wrong")
    }

}
   
  return (

    <div className='main_div'>

<div className='main'>

<div className='sign'>
    <h2>SIGNUP</h2>
</div>

<div className='form'>
    
    <input type="text" className='input_filed' placeholder='Enter Name' onChange={handleuser} name='name' ></input><br></br>

    <input type="email" className='input_filed' placeholder='Enter Email' onChange={handleuser} name='email'  ></input>
    <span id='emailerror'></span>
    <br></br>

    <input type="tel"   className='input_filed' placeholder='Enter Number' onChange={handleuser} name='number' required ></input>
    <span id='numbererror'></span>
    <br></br>

    <input type="text" className='input_filed' placeholder='Enter City' onChange={handleuser} name='city' ></input><br></br>

    <input type="password" className='input_filed' placeholder="Enter Password" onChange={handleuser} name='password'></input><br></br>
    <button type='button' className='btn' onClick={handlesubmit} >SUBMIT</button><br></br>

</div>

<div className='go_login'>
<a onClick={gologin}>Alredy have an Account Click Hear..</a>
</div>

</div>



 {/* if(user.email.indexOf('@')<=0  || user.email.charAt(user.email.length-4)!="." || user.email.charAt(user.email.length-3)!=".") {

        document.getElementById("emailerror").innerHTML=" **Email is Invalid";
             }  */}

    </div>
  )
}
