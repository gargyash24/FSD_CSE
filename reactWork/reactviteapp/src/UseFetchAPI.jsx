import React, { useEffect, useState } from 'react'

function UseFetchAPI() {
const[data,setData]=useState([]);


function getData()
{
  console.log("inside get data");
const response=fetch("https://dummyjson.com/recipes");
response.then((res)=>
{
    console.log(res);
    res.json().then((data)=>
    {
      console.log(data.recipes);
      setData(data.recipes);
    })
})
.catch((error)=>{console.log(error)})
}



  return (
    <div>UseFetchAPI
       {/* {JSON.stringify(data)} */}

       {
        data.map((ele)=>
        {
          return (
           <div style={{marginLeft:'200px', width:'300px', border:'2px solid red', backgroundColor:'cornsilk'}}> 
             <div><img src={ele.image} height={1000} width={1000}/></div>
            <div>{ele.name}</div>
           </div>
          )
        })
       }

       <button onClick={getData}>Fetch Data</button>
    </div>
  )
}

export default UseFetchAPI