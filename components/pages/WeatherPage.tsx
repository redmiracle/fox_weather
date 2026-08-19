'use client'

// import {useQuery} from "@tanstack/react-query";
// import {getWeatherData} from "@/lib/api/getWeather";
// import {useEffect} from "react";
// import {Card, CardHeader} from "@/components/ui/card";
import {dataJson} from "@/costants/dataJson";
import CityWeather from "@/components/widgets/cityWeather";
import WeatherForHours from "@/components/widgets/weatherForHours";


export default function WeatherPage() {


    // const {data,isLoading,error}=useQuery({
    //     queryKey:['weather'],
    //     queryFn:getWeatherData
    // })
    //
    //
    // useEffect(() => {
    //     if(data) {;
    //         console.log(data);
    //     }
    // }, [data])
    //
    // if (isLoading) {
    //     return <h1>Loading...</h1>;
    // }


    // if (error) {
    //     return <h1>Error: {error.message}</h1>;
    //
    // }


    return (<div>

        {/*{data && data.preview.current.name}*/}
        {dataJson &&
            <div className={"px-2"}>
                <CityWeather data={dataJson.preview.current} />
                <WeatherForHours data={ dataJson.preview.forecast} sun={dataJson.preview.week.temperature.days[0].sun} />

            </div>

        }
    </div>)
}