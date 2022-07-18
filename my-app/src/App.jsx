import { useState } from "react";
import "./App.css";
import Card from "./components/Card"







const App = () =>{
  // const data = ["DARIS","PEDJA","MILJAN","LJANMI"]
  const [data,setData]=useState([])
  let a
  return <div className="container">
    <h1>Todo List</h1>
    <div className="unos">
      <input type="text" onChange={(e) =>{
        a = e.target.value
      }} />
      <button onClick={() =>{
        setData([...data,a])
        console.log(data)
      }}>Dodaj</button>
    </div>
    {
      data.map((el)=>{
        return <Card title={el} />

      })
    }
    
    {/* <Card title={"Daris"} />
    <Card  title={"Ljanmi"}/>
     */}
    




    
   
  </div>
}

export default App;