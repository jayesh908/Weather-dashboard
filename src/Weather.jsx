import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import { getweathercity, getweatherlocation } from "./api/City";

const Weather = () => {
  const [report, setreport] = useState(null);
  const [searchcity, setsearchcity] = useState("")
  const fetchdata = async () => {
    const response = await getweathercity(searchcity)
    setreport(response)
  }
  useEffect(() => {
    function fetcurrentuserlocation() {
      navigator.geolocation.getCurrentPosition((position) => {
        getweatherlocation(position.coords.latitude, position.coords.longitude).then((data) => setreport(data))
      })
    }
    fetcurrentuserlocation()

  }, [])

  let humidityc = ""

  if (report?.current?.humidity < 30) {
    humidityc = "Low humidity"
  }
  else if (report?.current?.humidity < 30 && report?.current?.humidity > 60) {
    humidityc = "Normal Humidity"
  }
  else {
    humidityc = "High Humidity"
  }

  let visibility = ""
  if (report?.current?.vis_km < 2) {
    visibility = "poor visibilty"
  }
  else if (report?.current?.vis_km < 2 && report?.current?.vis_km > 5) {
    visibility = "Normal visibility"
  }
  else {
    visibility = "Good visibility"
  }


  return (
    <div className="container">
      <div className="row pg my-5 p-3 ">
        <div className="col-lg-4 col-md-4 col-sm-12 mt-4">
          <div className="d-flex justify-content-center">
            <input className="city" type="search" placeholder="Search Your City" value={searchcity} onChange={(e) => setsearchcity(e.target.value)}></input>
            <button className="sbtn" onClick={() => { fetchdata() }}>Search</button></div>
          <div >
            <img src={report?.current?.condition?.icon} className="imgs" style={{height:"12rem"}}></img>
          </div>
          <div>
            <h1 style={{ fontSize: "5rem" }}>{report?.current?.temp_c}.c</h1>
            <h2 style={{ fontSize: "3rem" }}>{report?.current?.condition?.text}</h2>
          </div>
          <div><h3>{report?.location?.name},<span>{report?.location?.region}</span></h3><h3>{report?.location?.country}</h3></div>
          <div><h3>{report?.location?.localtime}</h3></div>
        </div>

        <div className="col-lg-8 col-md-8 sol-sm-12 mt-4 text-center bot">
          <h1>Today's Highlight</h1>
          <div className="row gy-4 mt-2">
            <div className="col-lg-6"><Card title="UV Index" subtitle={report?.current?.uv} data={report} /></div>
            <div className="col-lg-6"><Card title="Wind Status" subtitle={`${report?.current?.wind_kph}km/h`} text={`Wind-direction-${report?.current?.wind_dir}`} /></div>
            <div className="col-lg-6"><Card title="Humidity" subtitle={`${report?.current?.humidity}% `} text={humidityc} /></div>
            <div className="col-lg-6"><Card title="visibility" subtitle={`${report?.current?.vis_km}km`} text={visibility} /></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
