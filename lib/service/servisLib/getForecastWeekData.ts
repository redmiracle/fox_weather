import {forecastDataDayReq, forecastRequest, weekDadaType} from "@/costants/types";
import {testJson} from "@/costants/testJson";



const getForecastWeekData=(data:forecastRequest):weekDadaType => {
    const forecastDay=data.forecast.forecastday

     const minMaxWeekTemp=(forecastDay:forecastDataDayReq[])=>{
        let minWeekTemp=forecastDay[0].day.mintemp_c;
        let maxWeekTemp=forecastDay[0].day.maxtemp_c;

        forecastDay.map(forDay=>{
            const minDayTemp=forDay.day.mintemp_c;
            const maxDayTemp=forDay.day.maxtemp_c;
            if(minDayTemp<minWeekTemp) minWeekTemp=minDayTemp;
            if(maxDayTemp>maxWeekTemp) maxWeekTemp=maxDayTemp;

        })



        return {
            minTempWeek: minWeekTemp,
            maxTempWeek: maxWeekTemp
        };


    }

    console.log(minMaxWeekTemp(forecastDay));

}

console.log(getForecastWeekData(testJson));
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