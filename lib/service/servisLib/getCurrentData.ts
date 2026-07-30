import {forecastRequest} from "@/costants/types";

export const getCurrentData=(res:forecastRequest)=>{

    const location=res.location
    const current=res.current
    const forecast=res.forecast

    return {
            name: location.name,
            temperature:current.temp_c+"",
            wind: current.wind_kph+"" ,
            pressure: current.pressure_mb+"" ,
            feelsLike: current.feelslike_c+"",
            maxTemp: forecast.forecastday[0].day.maxtemp_c+"",
            minTemp: forecast.forecastday[0].day.mintemp_c+"",

            condition:
                {
                    "text": current.condition.text,
                    "icon": current.condition.icon,
                    "code": current.condition.code+"",
                },


        }



}