import {conditionDada, dayDataType, forecastRequest} from "@/costants/types";


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

    const getDayData=(time:string,temp:number,condition:conditionDada):dayDataType=> {
        return {
            time: time,
            temperature: temp,
            condition: {...condition}
        }
    }


    const nowDayData=getDayData("now",data.current.temp_c,data.current.condition);

    const currentDayArr=currentDayData
        .filter((value => localEpoch < value.time_epoch))
        .map((value)=>{
            return getDayData(convertHour(value.time_epoch),value.temp_c,value.condition);

    })
    const newDayArr=newDayData
        .filter((value =>+convertHour(localEpoch)>+convertHour(value.time_epoch)))
        .map((value)=>{
            return getDayData(convertHour(value.time_epoch),value.temp_c,value.condition)


    })


    return [nowDayData,...currentDayArr,...newDayArr];

}

