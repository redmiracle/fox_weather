import {currentDataType} from "@/costants/types";
import {JSX} from "react";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";


interface Props {
    data: currentDataType
}


export default function CityWeather({data}: Props): JSX.Element {


    return (
        <div>
            <Card className={"bg-transparent border-0 ring-0 shadow-none text-white" +
                "flex flex-col items-center p-0 m-0 pt-2"}>
                <CardHeader className={"w-full text-center"}>
                    <h1 className={"text-[36px] font-light"}>{data.name}</h1>
                </CardHeader>
                <CardContent className={"font-extralight text-[92px] leading-none tracking-[-3px] p-0 m-0"}>
                    {data.temperature.replace(/c/gi,"")}
                </CardContent>
                <CardFooter className={"flex flex-col items-center font-normal"}>
                    <p className={"opacity-90 text-[28.5px] text-[#E0F2FE] "}>{data.condition.text}</p>
                    <div className={"text-[17px] tracking-[-0.68px] opacity-60"}>
                        <span className={"me-2"}>H: {data.maxTemp}</span>
                        <span>L: {data.minTemp}</span>
                    </div>
                </CardFooter>

            </Card>
        </div>
    )
}