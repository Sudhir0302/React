import { useState } from "react";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";

const App = () => {

  const appname={
    name:'sudhir',
    app:'react'
  }
  const [check,setCheck]=useState(false);
  function handleSumbit(e){
    e.preventDefault();
    setCheck(true)
    //alert("Submitted")
  }

  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-start items-center" >
        <Navbar appname={appname} />
        <Footer appname={appname}/>
      </div>
      <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
        <div className="h-3/6 w-[30%] flex flex-col justify-center items-center bg-blue-100 rounded-3xl shadow-2xl">
          <h1 className="text-2xl font-bold mb-4">LOGIN</h1>
          <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4">
            <input className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-green-500" type="text" id="" placeholder="Name" />
            <input className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-green-500" type="text" id="" placeholder="email" />
            <input className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-green-500" type="number" id="" placeholder="phone" />
            <input className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-green-500" type="password" id="" placeholder="password" />
            <button className="w-full bg-green-600 text-white p-3" type="submit" onClick={handleSumbit}>Register</button>
          </form>
         {check&&<Submit />}
        </div>
      </div>  
    </>
  ) 
}
function Submit(){
  return(
    <>
      <h1 className="flex justify-center items-center">SUBMITTED!!</h1>
    </>
  )
}
export default App;
