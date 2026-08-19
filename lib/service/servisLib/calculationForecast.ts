import {NextRequest} from "next/server";
import {coordinate} from "@/costants/types";


export const getCoordinate=(request:NextRequest):coordinate=> {
    const {searchParams}=new URL(request.url);
    const lat=searchParams.get("lat");
    const lng=searchParams.get("lng");

    if(lat && lng){
        console.log(`lat=${lat},lng=${lng}`);
        return {lat,lng};

    }
     console.log(`error lat=${lat},lng=${lng}`)
    return {lat:"31.8014",lng:"34.6435"};

}



export const isToday = (epoch: number) => {
    const date = new Date(epoch * 1000);
    const today = new Date();

    return (
        date.getUTCFullYear() === today.getUTCFullYear() &&
        date.getUTCMonth() === today.getUTCMonth() &&
        date.getUTCDate() === today.getUTCDate()
    );
};


export const getDaysUntilFullMoon=(epoch:number)=> {
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




export const convertHour = (timePM:string,fix:number) => {
    const time = new Date(`1970-01-01 ${timePM}`);

    time.setMinutes(time.getMinutes() +fix);

    return new Intl.DateTimeFormat("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    }).format(time);

}
