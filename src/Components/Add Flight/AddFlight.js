import React, { useEffect } from 'react';
import "./AddFlight.css";
import { useState } from 'react';
import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { bookflight } from '../redux/actions.js';
import { useNavigate } from 'react-router-dom';

export const AddFlight = () => {
  const [ticket, setticket] = useState({
    name:"",
    email:"",
    number:'',
    from:"",
    to:"",
    date:"",
    seats:"1",
    name2:"",
    name3:""
  })

  const dispatch = useDispatch()
  const navigate=useNavigate()

let name,value;

const handleticket=(e)=>{

  name=e.target.name;
  value=e.target.value;
  setticket({...ticket,[name]:value})
    
}

const adduser = new Array(ticket.seats ? parseInt(ticket.seats) - 1 : '').fill('');
console.log(adduser);

// var inputsite = document.getElementById("input_group");
// var divsite= document.getElementById("another1")
// var lispan = document.getElementById("adddj");


// if(ticket.seats==2){ 

//   var link1=document.createElement("span")
//   link1.id="adddj"
//   divsite.appendChild(link1)
//  document.getElementById("adddj").innerHTML="**Add Other Passenger Deails Click hear.."
//  link1.setAttribute('onclick','addinput(e)');
// }


// function addinput(){

// const name1 = document.createElement("input");
// name1.type="text";
// name1.placeholder="Enter name"
// name1.className="jk1"
// inputsite.appendChild(name1);


// }








console.log(ticket);

var regex = /^[1-9][0-9]{9,9}$/                    //For phone number
var regexemail =/^([a-z 0-9\.-]+)@([a-z]+).([a-z]{2,3})$/   //for Email


const conformticket=(e)=>{

if(ticket.name!=""&&ticket.email!=""&&ticket.number!=""&&ticket.from!=""&&ticket.to!=""&ticket.date!=""&&ticket.seats!=""){

  if(regexemail.test(ticket.email) || regex.test(ticket.number)){

  
  if(regexemail.test(ticket.email)){

    if(regex.test(ticket.number)){

      dispatch( bookflight(e) );
      navigate("/showticket");

    }else{
      document.getElementById("numbervalid").innerHTML="**Number is Not Valid"
    }

  }else{
document.getElementById("emailvalid").innerHTML="**Email is Not Valid"
  }
  
}else{
  document.getElementById("emailvalid").innerHTML="**Email is Not Valid";
  document.getElementById("numbervalid").innerHTML="**Number is Not Valid";
}



}else{
  alert("All Fileds are Required")
}
}



  
  return (
    <div className='main_add_form'>

<div className='add_form'>

<label className='add_lable'>Name :</label><br></br>
<input type="text" className='input_filed' name='name' onChange={handleticket}></input><br></br>

    <label className='add_lable'>Email :</label><br></br>
    <input type="text" className='input_filed' name='email' onChange={handleticket}></input><br></br>
    <span id='emailvalid'></span>
    <br></br>

    <label className='add_lable'>Phone :</label><br></br>
    <input type="tel" className='input_filed'  name='number' onChange={handleticket}></input><br></br>
    <span id='numbervalid'></span>

<label className='add_lable'>From:</label><br></br>
<input type="text" className='input_filed' name='from' onChange={handleticket}></input><br></br>         

<label className='add_lable'>To:</label><br></br>
<input type="text" className='input_filed' name='to' onChange={handleticket}></input><br></br>

<label className='add_lable'>Date of Journey :</label><br></br>
<input type="date" className='input_filed' name='date' onChange={handleticket}></input><br></br>

<label className='add_lable'>No of Seats :</label><br></br>
<input type="number" className='input_filed' name='seats' onChange={handleticket} min={1}
max={3}  ></input><br></br>

{
  adduser.length >=1 && adduser.length<=2 && adduser?.map((item,index)=>
  <input type='text'
  name={`name${index +2}`}
  placeholder={`passenger name${index+2}`}
  onChange={handleticket}
  key={index}
  />)

}

<button type='button' className='add_btn' onClick={()=>conformticket(ticket)}>CONFORM</button><br></br> 
 
</div>
    </div>
  )
}
