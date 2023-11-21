import React from 'react'
import'./App.css'
import img from './login/images/screenshot (3).png'
const App = () => {
  return (
    <>
  <h1 className=" text">gobhika</h1>
  <p className="text">Sri Krishna college </p>
  <p className="text">Cse (cyber security)</p>
  <img src={img} alt="No"></img>  
  <h4 className="text">Department</h4>
  <ol>
  <li>Cyber security</li>
  <li>information technology</li>
  <li>civil</li>
  <li>Mechanical</li>
  </ol>
  </>
  )
}
export default App
