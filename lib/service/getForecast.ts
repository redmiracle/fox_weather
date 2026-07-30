import {API_KEY, base_url} from "@/costants/apiData";
import {coordinate, forecastRequest, weatherData} from "@/costants/types";
import {getCurrentData} from "@/lib/service/servisLib/getCurrentData";
import {getForecastDayData} from "@/lib/service/servisLib/getForecastDayData";
import {getForecastWeekData} from "@/lib/service/servisLib/getForecastWeekData";

interface error {
    error: string;
}

export async function getForecast(coordinates:coordinate):Promise<weatherData|error> {
    const {lat, lng} = coordinates;
    const reqCor=`${lat},${lng}`;

    try {

        const response=await fetch(`${base_url}/forecast.json?key=${API_KEY}&q=${reqCor}&days=7&aqi=yes&alerts=no\``)
        const res=await response.json() as forecastRequest
        if (!response.ok) {
            throw new Error(`WeatherAPI responded with status: ${response.status}`);
        }
        const weatherData= {
            preview: {
                current: getCurrentData(res),
                forecast:getForecastDayData(res),
                week:getForecastWeekData(res)
            }
        }

        return weatherData
    }catch(error) {

        return {
            error: "Failed to fetch preview data",

        };
    }
}
