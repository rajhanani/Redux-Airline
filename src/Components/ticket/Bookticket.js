import React from 'react'
import { useSelector } from 'react-redux'
import "./Bookticket.css"

export const Bookticket = () => {
    const getticket = useSelector( (state)=>state.airreducer.bookuserdata);
    console.log(getticket)

  return (
    <div className='table'>
      
{
getticket.map( (ele,id)=>{
    return (
<>
        <div className='book_title'>
            <h2>Ticket  From {ele.from} To {ele.to}</h2>
        </div>
<table>
<tr>
    <th>Passenger 1:</th>
    <td>{ele.name}</td>
</tr>

<tr>
    <th>Passenger 2:</th>
    <td>{ele.name2}</td>
</tr>

<tr>
    <th>Passenger 3:</th>
    <td>{ele.name3}</td>
</tr>

<tr>
    <th>Email:</th>
    <td>{ele.email}</td>
</tr>

<tr>
    <th>Phone:</th>
    <td>{ele.number}</td>
</tr>

<tr>
    <th>From:</th>
    <td>{ele.from}</td>
</tr>

<tr>
    <th>To:</th>
    <td>{ele.to}</td>
</tr>
<tr>
    <th>Date:</th>
    <td>{ele.date}</td>
</tr>
<tr>
    <th>No Of Seats:</th>
    <td>{ele.seats}</td>
</tr>

</table>
</>

)

}) }
    </div>
  )
}
