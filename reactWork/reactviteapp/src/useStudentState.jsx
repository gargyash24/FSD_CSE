import React from 'react'

export default function useStudentState() {
    const [count,setCount]=useState(20);
  return (
    <div style={{color:'red'}}>{count}</div>
  )
}
