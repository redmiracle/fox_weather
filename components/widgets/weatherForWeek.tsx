import TemperatureStatus from "@/components/features/temperatureStatus";
import {weekDadaType} from "@/costants/types";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {convertTemperature} from "@/components/units/convertFunction";
import ConditionalImage from "@/components/features/conditionalImage";


interface Props {
    data: weekDadaType
}


export default function WeatherForWeek({data}: Props) {
//last versiaon 22
    const minWeekTemp = data.temperature.minTempWeek
    const maxWeekTemp = data.temperature.maxTempWeek


    return (
        <Card className={"bgMirror p-4 m-0"}>
            <CardHeader>
                <p className={"border-b-1 text-white opacity-30"}>7-DAY FORECAST</p>
            </CardHeader>
            <CardContent className={"mt-3"}>
                {data.temperature.days.map((day, i) => {
                    console.log(day.conditionalStatus)
                    const minTempDay = day.minTemperature
                    const maxTempDay = day.maxTemperature
                    const dataWeekTemperature = {
                        "minTempWeek": minWeekTemp,
                        "maxTempWeek": maxWeekTemp,
                        "minTemperature": minTempDay,
                        "maxTemperature": maxTempDay,
                    }


                    return (
                        <div key={i} className={"flex items-center justify-between text-white text-[13px]"}>
                            <div className={"w-[44px]"}>
                                <p className={"leading-[22px]"}>{day.day}</p>
                            </div>
                            <div className={"ms-10"}>
                                <p>{convertTemperature(minTempDay)}</p>
                            </div>
                            <div>
                                <ConditionalImage status={day.conditionalCode} isDay={true}/>
                            </div>
                            <TemperatureStatus key={i} dataWeekTemperature={dataWeekTemperature}></TemperatureStatus>
                            <p>{convertTemperature(maxTempDay)}</p>
                        </div>
                    )
                })

                }
            </CardContent>
        </Card>
    )

}