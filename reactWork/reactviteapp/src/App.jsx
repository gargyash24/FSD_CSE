import React from 'react'
import Student from './Student'
// import logo from "./assets/onbulb.jpg"
export default function App() {
  const h1 = <h1>hello world</h1>
  const mystyle = {
    color: 'red',
    backgroundColor:'yellow'
  } 
  return (
    <div style={{backgroundColor:'cyan'}}>
    {h1}
    <div style={mystyle}>ABES Engineering College</div>
    <div>
      <Student college="ABES ENGINEERING COLLEGE"
      pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height={100} width={100}/>}
      // pic={<img src={logo} height={100} width={100}/>}
      name = "Yash"
      branch="CSE"
      roll="1"
      section = "B">
      </Student></div>
      <div><Student></Student></div>
    </div>
  )
}
