import {NextRequest, NextResponse} from "next/server";
import {getCoordinate} from "@/lib/service/servisLib/calculationForecast";

import {getForecast} from "@/lib/service/getForecast";


// http://localhost:3000/api/preview?lat=32.0853&lng=34.781
//coordinates Ashdod  31.8014° 34.6435°


export async function GET(request: NextRequest) {

    const coordinates = getCoordinate(request)
    const data = await getForecast(coordinates)


    return NextResponse.json({
    ...data
    });

}