import {weatherData} from "@/costants/types";
import {currentCoordinate} from "@/lib/feature/coordinate";


export const getWeatherData = async (): Promise<weatherData> => {

    const coordinate = await currentCoordinate();
    const response = await fetch(`api/preview?lat=${coordinate.lat}&lng=${coordinate.long}`);

    if (!response.ok) {
        throw new Error("Failed to fetch weather");
    }
    const weatherData = await response.json() as weatherData;
    const checkData = weatherData.preview


    if (!checkData || !checkData.current || !checkData.forecast || !checkData.week) {
        throw new Error("Data is not available");

    }
    return weatherData;


};