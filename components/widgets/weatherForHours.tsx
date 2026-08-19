import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import {dayDataType, sunDataType} from "@/costants/types";
import {JSX} from "react";
import {Card, CardFooter, CardHeader} from "@/components/ui/card";
import ConditionalImage from "@/components/widgets/features/conditionalImage";

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
                    {data.map((item, i) => (
                        <CarouselItem key={i + 1} className={"basis-1/5"}>
                            <Card
                                className={"text-white bg-transparent ring-0 shadow-0 border-0 flex-col items-center justify-center p-0 m-0 "}>
                                <CardHeader className={"text-[13px] text-center w-full mb-2"}>{item.time}</CardHeader>
                                <ConditionalImage status={""+item.condition.code} isDay={item.time > sunRise && item.time < sunSet}/>


                                <CardFooter className={"text-[17px]"}>{item.temperature}</CardFooter>
                            </Card>
                        </CarouselItem>))}
                </CarouselContent>
                {/*<CarouselPrevious />*/}
                {/*<CarouselNext />*/}
            </Carousel>
        </div>
    )
}


