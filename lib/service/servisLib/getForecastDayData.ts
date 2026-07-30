import {conditionDada, dayDataType, forecastRequest, forecatsHour} from "@/costants/types";


const convertHour=(timeEpoch:number)=>{
    const hour = new Intl.DateTimeFormat("ru-RU", {
        hour: "numeric",
        hour12: false,
        timeZone: "Asia/Jerusalem",
    }).format(new Date(timeEpoch * 1000));

    return hour;
}

export const getForecastDayData = (data:forecastRequest) => {


    const localEpoch=data.location.localtime_epoch;
    const currentDayData=data.forecast.forecastday[0].hour;
    const newDayData=data.forecast.forecastday[1].hour;

    const getDayData=(data:forecatsHour):dayDataType=> {
        return {
            time: convertHour(data.time_epoch),
            temperature: data.temp_c,
            condition: {...data.condition},
        }
    }


    // const nowDayData=getDayData(data.current);

    const currentDayArr=currentDayData
        .filter((value => localEpoch < value.time_epoch))
        .map(value => getDayData(value))


    const newDayArr=newDayData
        .filter((value =>+convertHour(localEpoch)>+convertHour(value.time_epoch)))
        .map(value => getDayData(value))


    return [...currentDayArr,...newDayArr];

}

