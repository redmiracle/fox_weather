import { NextRequest,NextResponse} from "next/server";
import {getCoordinates} from "@/lib/service/servisLib/getCoordinates";

import {getForecast} from "@/lib/service/getForecast";


// http://localhost:3000/api/preview?lat=32.0853&lng=34.781
//coordinates Ashdod  31.8014° 34.6435°


export async function GET(request:NextRequest) {

    const coordinates=getCoordinates(request)
    const data = await getForecast(coordinates)
    // const [cityWeather,forcast] =await Promise.all([
    //     getWeatherData(coordinates),
    //     getForcast(coordinates)
    // ])


    return NextResponse.json({
      data
    });

}