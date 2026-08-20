import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import {dayDataType, sunDataType} from "@/costants/types";
import {JSX} from "react";
import {Card, CardFooter, CardHeader} from "@/components/ui/card";
import ConditionalImage from "@/components/widgets/features/conditionalImage";
import {Sunrise, Sunset} from "lucide-react";

interface Props {
    data: dayDataType[]
    sun: sunDataType

}


export default function WeatherForHours({data, sun}: Props): JSX.Element {

    const sunRise = sun.sunrise.split(":")[0]
    const sunSet = sun.sunset.split(":")[0]


    return (
        <div className={"mt-8"}>
            <Carousel
                opts={{
                    align: "center",
                }}
                className=""
            >
                <CarouselContent>
                    {data.reduce<JSX.Element[]>((acc, item, i) => {

                        acc.push(
                            <CarouselItem key={i + 1} className={"basis-1/5"}>
                                <Card
                                    className={"text-white bg-transparent ring-0 shadow-0 border-0 flex-col items-center justify-center p-0 m-0 "}>
                                    <CardHeader
                                        className={"text-[13px] text-center w-full mb-2"}>{item.time}</CardHeader>
                                    <ConditionalImage status={"" + item.condition.code}
                                                      isDay={item.time > sunRise && item.time < sunSet}/>
                                    <CardFooter className={"text-[17px]"}>{item.temperature}</CardFooter>
                                </Card>
                            </CarouselItem>
                        )

                        if (item.time === sunRise || item.time === sunSet) {
                            const isSunRise = item.time === sunRise
                            acc.push(
                                <CarouselItem key={(i + 1) * 10} className={"basis-1/5"}>
                                    <Card
                                        className={"text-white bg-transparent ring-0 shadow-0 border-0 flex-col items-center justify-center p-0 m-0 "}>
                                        <CardHeader className={"text-[13px] text-center w-full mb-2"}>{
                                            isSunRise ? sun.sunrise : sun.sunset}</CardHeader>
                                        {isSunRise ?
                                            <Sunrise width={28} height={28} color={"#8cdf49"}/> :
                                            <Sunset width={28} height={28} color={"#ffffff"}/>
                                        }
                                        <CardFooter className={"text-[15px]"}>{isSunRise?"SUNRISE":"SUNSET"}</CardFooter>
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


