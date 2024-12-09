import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Registration({regData}) {
  const[userName,setUserName]=useState();
  const[userEmail,setEmail]=useState();
  const[userPassword,setPassword]=useState();
  const[userdata,setUserdata]=useState();

  
  function showData(e)
  {
    e.preventDefault();
    //  alert("hii "+userName);
    // alert("hii "+userEmail);
    //  alert("hii "+userPassword);
    const data={
      userName,
      userEmail,
      userPassword
    }
    // alert(data)
    regData(data)
    // setUserdata(data)
  }
  return (
    <div>
      <div>{JSON.stringify(userdata)}</div>
         <form>
         <div className="form-group">
    <label for="exampleInputName">Name</label>
    <input onChange={(e)=>setUserName(e.target.value)} type="name" className="form-control" id="exampleInputName" placeholder="name"/>
  </div>
      {/* <div>{userEmail}</div> */}
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small onChange={(e)=>setUserEmail(e.target.value)} id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" onClick={showData} className="btn btn-primary">Register</button>
</form>
    </div>
  )
}

export default Registration