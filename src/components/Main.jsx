import React, { useState } from 'react'
import Logo from "../images/logo.png";
export default function Main() 
{
  const [data2, setq2] = useState([]);
  const [city, setq] = useState("");
  let fetchdata = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={9ff02c77652197cd3c437ab25481e6ce}`
    let data = await fetch(url);
    let pdata = await data.json()
    setq2(pdata)
    console.log(pdata);
  }
  let handlesubmit=(e)=>{
  alert(city)
  e.preventDefault();
  }
  let handlechange=(e)=>
  {
  setq(e.target.value)
  }
  let click=()=>{
  console.log(city);
  }
  return (
    <div>
    <div className='flex flex-wrap bg-black'>
     <img src={Logo} alt="some error occured" />
     <form onSubmit={handlesubmit}>
     <input type="text" name='city' className='w-60 h-6 bg-slate-400 font-black' onChange={ handlechange} />
     <button type="submit" className='w-44 h-9 text-center' onClick={click}>Submit</button>
     </form>
    </div>
    </div>
  )
}
