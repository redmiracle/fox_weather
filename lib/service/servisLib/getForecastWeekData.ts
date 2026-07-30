import {forecastRequest, weekDadaType} from "@/costants/types";


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


    const isToday = (epoch: number) => {
        const date = new Date(epoch * 1000);
        const today = new Date();

        return (
            date.getUTCFullYear() === today.getUTCFullYear() &&
            date.getUTCMonth() === today.getUTCMonth() &&
            date.getUTCDate() === today.getUTCDate()
        );
    };


    const getDaysUntilFullMoon=(epoch:number)=> {
        const msInDay = 86400000;
        const lunarMonth = 29.53059;
        const knownNewMoon = new Date(Date.UTC(2000, 0, 6, 18, 14, 0)); // Точка отсчета

        const targetDate = new Date(epoch * 1000)



        const diffDays = (targetDate.getTime() - knownNewMoon.getTime()) / msInDay;


        const currentDayOfCycle = (diffDays % lunarMonth + lunarMonth) % lunarMonth;

        let daysLeft;
        if (currentDayOfCycle <= 14.765) {
            daysLeft = 14.765 - currentDayOfCycle;
        } else {
            daysLeft = (14.765 + lunarMonth) - currentDayOfCycle;
        }

        return Math.round(daysLeft);
    }







    const getDay=(epoch: number) => {

        if(isToday(epoch)) return "Now"
        const day = new Date(epoch * 1000).toLocaleDateString("en-US", {
            weekday: "long",
            timeZone: "UTC",
        });
        return day
    }


    const convertHour = (timePM:string,fix:number) => {
        const time = new Date(`1970-01-01 ${timePM}`);

        time.setMinutes(time.getMinutes() +fix);

        const result = new Intl.DateTimeFormat("ru-RU", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        }).format(time);
        return result;

    }





    const daysTemp=forecastDay.map((data,i)=>{
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

// console.log(getForecastWeekData(testJson));
//
// const minMaxWeekTemp = (forecastDay: forecastDataDayReq[]) =>
//     forecastDay.reduce(
//         (acc, { day }) => ({
//             minTempWeek: Math.min(acc.minTempWeek, day.mintemp_c),
//             maxTempWeek: Math.max(acc.maxTempWeek, day.maxtemp_c),
//         }),
//         {
//             minTempWeek: forecastDay[0].day.mintemp_c,
//             maxTempWeek: forecastDay[0].day.maxtemp_c,
//         }
//     );