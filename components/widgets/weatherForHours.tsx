import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import {dayDataType, sunDataType} from "@/costants/types";
import {JSX} from "react";
import {Card, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import ConditionalImage from "@/components/features/conditionalImage";
import {Sunrise, Sunset} from "lucide-react";
import {convertTemperature} from "@/components/units/convertFunction";
import {time} from "zod/v4/mini/iso";

interface Props {
    data: dayDataType[]
    sun: sunDataType

}


export default function WeatherForHours({data, sun}: Props): JSX.Element {
//this is actual 23
    const sunRise = sun.sunrise.split(":")[0]
    const sunSet = sun.sunset.split(":")[0]
    const addZero=(time:string) => {
        if(time.length<2) return time.padStart(2,"0")
        return time;
    }


    return (
        <div className={`bgMirror p-2`}>
            <Carousel
                opts={{
                    align:"end",
                }}
                className=""
            >
                <CarouselContent>
                    {data.reduce<JSX.Element[]>((acc, item, i) => {
                        const time=addZero(item.time)
                        acc.push(
                            <CarouselItem key={i + 1} className={"basis-1/5"}>
                                <Card
                                    className={"text-white bg-transparent ring-0 shadow-0 border-0 flex-col items-center justify-center p-0 m-0 "}>
                                    <CardHeader
                                        className={"text-[13px] text-center w-full mb-2"}>{time}</CardHeader>
                                    <div className={"mb-2"}>
                                        <ConditionalImage status={"" + item.condition.code}
                                                          isDay={time > sunRise && time < sunSet}/>
                                    </div>
                                    <CardFooter
                                        className={"text-[17px]"}>{convertTemperature(item.temperature + "")}</CardFooter>
                                </Card>
                            </CarouselItem>
                        )

                        if (time.includes(sunRise) || time.includes(sunSet)) {
                            const isSunRise = time.includes(sunRise);
                            const addKey=isSunRise ? 10 : 11
                            acc.push(
                                <CarouselItem key={(i + 1) * addKey} className={"basis-1/5"}>
                                    <Card
                                        className={"text-white bg-transparent ring-0 shadow-0 border-0 flex-col items-center justify-center p-0 m-0"}>
                                        <CardHeader className={"mb-2 w-full p-0"}>
                                            <CardTitle className={"text-[13px]  text-center"}> {isSunRise ? sun.sunrise : sun.sunset}</CardTitle>

                                        </CardHeader>
                                        {isSunRise ?
                                            <Sunrise width={28} height={28} color={"#8cdf49"}/> :
                                            <Sunset width={28} height={28} color={"#ffffff"}/>
                                        }
                                        <CardFooter
                                            className={"text-[15px] mt-2"}>{isSunRise ? "SUNRISE" : "SUNSET"}</CardFooter>
                                    </Card>
                                </CarouselItem>
                            )


                        }

                        return acc
                    }, [])

                    }
                </CarouselContent>
                {/*<CarouselPrevious />*/}
                {/*<CarouselNext />*/}
            </Carousel>
        </div>
    )
}


