import TemperatureStatus from "@/components/features/temperatureStatus";




export default function WeatherForWeek () {

       const  dataWeekTemperature={
            "minTempWeek": "20",
            "maxTempWeek": "30",
            "minTemperature": "22",
            "maxTemperature": "28",

        }






    return (
        <TemperatureStatus dataWeekTemperature={dataWeekTemperature}></TemperatureStatus>
    )

}