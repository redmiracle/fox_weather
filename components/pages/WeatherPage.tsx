'use client'

import {useQuery} from "@tanstack/react-query";
import {getWeatherData} from "@/lib/api/getWeather";


import CityWeather from "@/components/widgets/cityWeather";
import WeatherForHours from "@/components/widgets/weatherForHours";
import WeatherForWeek from "@/components/widgets/weatherForWeek";


export default function WeatherPage() {


    const {data, isLoading, error} = useQuery({
        queryKey: ['weather'],
        queryFn: getWeatherData,

    })


    // useEffect(() => {
    //     if(data) {;
    //         console.log(data);
    //     }
    // }, [data])

    if (isLoading) {
        return <h1>Loading...</h1>;
    }


    if (error) {
        return <h1>Error: {error.message}</h1>;

    }


    return (<div>

        {data &&
            <div className={"px-5"}>
                <div className="mt-2">
                    <CityWeather data={data.preview.current}/>
                </div>
                <div className="mt-4">
                    <WeatherForHours data={data.preview.forecast} sun={data.preview.week.temperature.days[0].sun}/>
                </div>
                <div className="mt-6">
                    <WeatherForWeek data={data.preview.week}/>
                </div>
            </div>

        }
    </div>)
}