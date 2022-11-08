import React, { useState } from 'react'
import Logo from "../images/logo.png";
import Load2 from "../images/load.gif";

export default function Main() {
  const [fet, setf] = useState(true)
  const [data2, setq2] = useState({
    "coord": {
      "lon": null,
      "lat": null
    },
    "weather": [
      {
        "id": null,
        "main": "",
        "description": "",
        "icon": "04d"
      }
    ],
    "base": "",
    "main": {
      "temp": null,
      "feels_like": null,
      "temp_min": null,
      "temp_max": null,
      "pressure": null,
      "humidity": null,
      "sea_level": null,
      "grnd_level": null
    },
    "visibility": null,
    "wind": {
      "speed": null,
      "deg": null,
      "gust": null
    },
    "clouds": {
      "all": null
    },
    "dt": null,
    "sys": {
      "type": null,
      "id": null,
      "country": "",
      "sunrise": null,
      "sunset": null
    },
    "timezone": null,
    "id": null,
    "name": "",
    "cod": null
  });
  const [city, setq] = useState("");
  const [Load, setl] = useState(false);
  let fetchdata = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7ecefe3f24398e253ad7e9cb97ba312f`
    let data = await fetch(url);
    let pdata = await data.json()
    setl(false)
    setq2(pdata);
    setf(false)
    console.log(data2);
  }
  let handlesubmit = (e) => {
    setl(true);
    e.preventDefault();
    fetchdata();
  }
  let handlechange = (e) => {
    setq(e.target.value)
  }
  return (
    <>
      <div className='flex justify-center items-center bg-black'>
        <img src={Logo} alt="some error occured" className='w-60 h-36' />
        <form onSubmit={handlesubmit} className='flex flex-wrap justify-center items-center m-auto'>
          <input type="text" name='city' className='w-3/4 h-10 bg-slate-400 border rounded-md p-4' onChange={handlechange} />
          <button type="submit" className='w-24 h-9 bg bg-red-500 text-center text-white  border rounded-md m-2 '>Search</button>
        </form>
      </div>
      <div>
        <div className='flex justify-center items-center'>
          {Load ? <img src={Load2} className='m-52 w-28 h-16' alt="some error occured" /> : <p></p>}
        </div>
        {!fet ? <div className='m-16 bg-orange-200'>
          <h1 className='text-center font-mono font-bold text-xl'>Weather forecast 🌅🔆🔆🌄 {city}</h1>
          <h1 className='text-center font-mono font-bold text-lg'>{data2.weather[0].description}</h1>
        </div> : <div >
          <h1>Its fucking tenki know</h1>
        </div>}
      </div>
    </>
  )
}