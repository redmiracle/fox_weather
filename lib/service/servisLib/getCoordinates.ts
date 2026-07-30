import { NextRequest} from "next/server";
import {coordinate} from "@/costants/types";



export function getCoordinates(request:NextRequest):coordinate {
    const {searchParams}=new URL(request.url);
    const lat=searchParams.get("lat");
    const lng=searchParams.get("lng");

    if(lat && lng){
        return {lat,lng};
    }

    return {lat:"31.8014",lng:"34.6435"};

}