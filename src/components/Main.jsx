import React, { useState } from 'react'
import Logo from "../images/logo.png";
import Load2 from "../images/load.gif";
import Home from "../images/home.gif";
import Icon from "../images/icon2.gif";
import Clear from "../images/clear.gif";
import Cloud from "../images/Cloud.gif";
import Rain from "../images/Rain.gif";
import Snow from "../images/Snow.gif";
import Mist from "../images/Mist.gif";

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
    console.log(toString(data2.sys.sunrise));
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
        <img src={Logo} alt="some error occured" className='w-56 h-36' />
        <form onSubmit={handlesubmit} className='flex flex-wrap justify-center items-center m-auto'>
          <input type="text" name='city' className='w-3/4 h-10 bg-slate-400 border rounded-md p-4' onChange={handlechange} />
          <button type="submit" className='w-24 h-9 bg bg-red-500 text-center text-white  border rounded-md m-2 '>Search</button>
        </form>
      </div>
      <div>
        <div className='flex justify-center items-center'>
          {Load ? <img src={Load2} className='m-52 w-28 h-28' alt="some error occured" /> : <p></p>}
        </div>
        {!fet ? <div className='m-16 p-0 bg-orange-200'>
          <h1 className='text-center font-mono p-2 font-bold text-2xl'>Weather forecast 🌅🔆🔆🌄 {data2.name}</h1>
          <div className='flex justify-center flex-wrap'>
          {data2.weather[0].main==="Clear"?<img src={Clear} className='w-60 h-44' alt='Some network error'/>:<div></div>}
          {data2.weather[0].main==="Rainy"?<img src={Rain} className='w-60 h-44' alt='Some network error'/>:<div></div>}
          {data2.weather[0].main==="Clouds"?<img src={Cloud} className='w-60 h-44' alt='Some network error'/>:<div></div>}
          {data2.weather[0].main==="Snow"?<img src={Snow} className='w-60 h-44' alt='Some network error'/>:<div></div>}
          {data2.weather[0].main==="Mist"?<img src={Mist} className='w-60 h-44' alt='Some network error'/>:<div></div>}
          {data2.weather[0].main==="Haze"?<img src={Mist} className='w-60 h-44' alt='Some network error'/>:<div></div>}
          {data2.weather[0].main==="Smog"?<img src={Mist} className='w-60 h-44' alt='Some network error'/>:<div></div>}
          <div >
          <h1 className='font-bold text-4xl font-mono text-center m-2'>{data2.weather[0].main}</h1>
          <h1 className='font-bold text-xl font-mono text-center m-2 text-orange-900'>{data2.weather[0].description}</h1>
          <h1 className='font-bold text-xl font-mono text-center m-2 text-White'>temp🌡={data2.main.temp}({data2.main.feels_like})</h1>
          </div>
          </div>
          <h1 className='font-bold text-4xl font-mono text-center m-2 text-White bg-orange-200 >Detailed Forecast'>Detailed Forecast</h1>
          <h1 className='font-bold text-xl font-mono text-center m-2 text-orange-900'>Sunrise 🌅= {data2.sys.sunrise}</h1>
          <h1 className='font-bold text-xl font-mono text-center m-2 text-orange-900'>Sunset 🌄= {data2.sys.sunset}</h1>
          <h1 className='font-bold text-xl font-mono text-center m-2 text-orange-900'>Max-temp 🔥= {data2.main.temp_max}</h1>
          <h1 className='font-bold text-xl font-mono text-center m-2 text-orange-900'>Min-temp ❄= {data2.main.temp_min}</h1>
          <h1 className='font-bold text-xl font-mono text-center m-2 text-orange-900'>Humidity 💧= {data2.main.humidity}</h1>
          <h1 className='font-bold text-xl font-mono text-center m-2 text-orange-900'>Wind 🌫= {data2.wind.speed}</h1>
          <h1 className='font-bold text-xl font-mono text-center m-2 text-orange-900'>Deg 🌫= {data2.wind.deg}</h1>


        </div> : <div >
          <div className=' flex justify-center items-center'>
            <img className='w-1/2 h-96 border rounded-lg m-5' src={Home} alt="Some error occured" /> 
          </div>
          <h1 className='font-bold text-xl font-mono text-center'>1.One should check weather  before going anywhere.So here comes tenkiknow </h1>
          <h1 className='font-bold text-xl font-mono text-center'>2.You can search  weather for any city on the go, by typing city name.</h1>
          <h1 className='font-bold text-xl font-mono text-center'>3.Tenki-know is a weather forecasting website which provide you weather condition of  any city  dynamically.</h1>
          <div className='flex justify-center items-center'>
            <img className='w-1/2 h-96 border rounded-lg m-5' src={Icon} alt="Some error occured" />
          </div>
          <h1 className='font-bold text-2xl font-mono m-5 text-center bg-black text-white'> <i> Thanks for using Tenki-know</i></h1>
        </div>}
      </div>
    </>
  )
}