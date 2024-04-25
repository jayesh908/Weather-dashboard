

export const getweathercity = async(city)=>{
    const apicall = await fetch(`https://api.weatherapi.com/v1/current.json?key=3ee38a7ea9b74783bd933625242504&q=${city}&aqi=yes`)
    return await apicall.json()
}
export const getweatherlocation = async(lat,lon)=>{
    const apicall = await fetch(`https://api.weatherapi.com/v1/current.json?key=3ee38a7ea9b74783bd933625242504&q=${lat},${lon}&aqi=yes`)
    return await apicall.json()
}
