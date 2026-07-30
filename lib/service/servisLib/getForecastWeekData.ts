import {forecastRequest, weekDadaType} from "@/costants/types";
import {convertHour, getDaysUntilFullMoon, isToday} from "@/lib/service/servisLib/calculationForecast";


export const getForecastWeekData = (data: forecastRequest): weekDadaType => {
    const forecastDay = data.forecast.forecastday

    const maxMinWeekTemp=forecastDay.reduce(
            (
                (acc, {day}) => ({
                    minTempWeek: Math.min(acc.minTempWeek, day.mintemp_c),
                    maxTempWeek: Math.max(acc.maxTempWeek, day.maxtemp_c),
                })
            ),
            {
                minTempWeek: forecastDay[0].day.mintemp_c,
                maxTempWeek: forecastDay[0].day.maxtemp_c,


            }
        )


    const getDay=(epoch: number) => {

        if(isToday(epoch)) return "Now"
        return new Date(epoch * 1000).toLocaleDateString("en-US", {
            weekday: "long",
            timeZone: "UTC",
        })
    }



    const daysTemp=forecastDay.map((data)=>{
        const {day,astro}=data
        return{
            day:getDay(data.date_epoch),
            image:day.condition.icon,
            minTemperature:""+day.mintemp_c,
            maxTemperature:""+day.maxtemp_c,
            moon:{
                moonIllumination:astro.moon_illumination,
                moon_phase:astro.moon_phase,
                isMoonUp:astro.is_moon_up,
                dayBeforeNewMoon:astro.is_moon_up>0?-1:getDaysUntilFullMoon(data.date_epoch),

            },
            sun:{
                sunrise: convertHour(astro.sunrise,0),
                sunset: convertHour(astro.sunset,0),
                firstLight:convertHour(astro.sunrise,-30),
                lastLight:convertHour(astro.sunset,30),
            }
    }})



     return {
        temperature:{
            minTempWeek:""+maxMinWeekTemp.minTempWeek,
            maxTempWeek:""+maxMinWeekTemp.maxTempWeek,
            days:daysTemp
        }


     }


}

