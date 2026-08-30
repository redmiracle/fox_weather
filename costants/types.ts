//simple

export interface coordinate {
    lat: string,
    lng: string,
}

export interface conditionDada {
    "text": string,
    "icon": string,
    "code": number,
}


//current


export interface currentDataType {
    name: string
    temperature: string
    wind: string
    pressure: string
    feelsLike: string
    maxTemp: string
    minTemp: string
    condition: {
        text: string
        icon: string
        code: string
    }
}


//for forecast day


export interface dayDataType {
    time: string,
    temperature: number,
    condition: conditionDada,

}


//for week
export interface weekDadaType {

    temperature: {
        minTempWeek: string;
        maxTempWeek: string;
        days: weekDataForDayType[];

    }

}

export type sunDataType = {

    sunrise: string,
    sunset: string,
    firstLight: string,
    lastLight: string,

}

export interface weekDataForDayType {
    day: string,
    image: string,
    minTemperature: string,
    maxTemperature: string,
    conditionalCode:string,
    conditionalStatus:string,
    moon: {
        moonIllumination: number,
        moon_phase: string,
        isMoonUp: number,
        dayBeforeNewMoon: number,

    },
    sun:sunDataType


}


//main


export interface weatherData {
    preview: {
        current: currentDataType;
        forecast: dayDataType[];
        week: weekDadaType;
    };
}


// export interface currentDataType {
//     name: string,
//     temperature: string,
//     wind: string,
//     pressure: string,
//     feelsLike: string,
//     maxTemp: string,
//     minTemp: string,
//
//     condition:
//         {
//             "text": string,
//             "icon": string,
//             "code": string,
//         }
//
//
// }


//Request

export interface forecastDataDayReq {

    "date": string,
    "date_epoch": number,
    "day": {
        "maxtemp_c": number,
        "maxtemp_f": number,
        "mintemp_c": number,
        "mintemp_f": number,
        "avgtemp_c": number,
        "avgtemp_f": number,
        "maxwind_mph": number,
        "maxwind_kph": number,
        "totalprecip_mm": number,
        "totalprecip_in": number,
        "totalsnow_cm": number,
        "avgvis_km": number,
        "avgvis_miles": number,
        "avghumidity": number,
        "daily_will_it_rain": number,
        "daily_chance_of_rain": number,
        "daily_will_it_snow": number,
        "daily_chance_of_snow": number,
        "condition": {
            "text": string,
            "icon": string,
            "code": number,
        },
        "uv": 10.7,
        "avgwetbulb_c": number,
        "avgwetbulb_f": number,
        "maxwetbulb_c": number,
        "maxwetbulb_f": number,
        "air_quality": {
            "co": number,
            "no2": number,
            "o3": number,
            "so2": number,
            "pm2_5": number,
            "pm10": number,
            "us-epa-index": number,
            "gb-defra-index": number,
        },
    },
    "astro": {
        "sunrise": "05:46 AM",
        "sunset": "07:48 PM",
        "moonrise": "06:17 AM",
        "moonset": "08:44 PM",
        "moon_phase": "New Moon",
        "moon_illumination": 3,
        "is_moon_up": 1,
        "is_sun_up": 1
    },
    hour: forecatsHour[]
}


export interface forecastRequest {

    location: locationDataReq,
    current: currentDaraReq,
    forecast: {
        forecastday: forecastDataDayReq[],
    }


}


export interface locationDataReq {
    "name": string,
    "region": string,
    "country": string,
    "lat": number,
    "lon": number,
    "tz_id": string,
    "localtime_epoch": number,
    "localtime": string,

}

export interface windDataReq {
    "wind_mph": number,
    "wind_kph": number,
    "wind_degree": number,
    "wind_dir": string,
    "pressure_mb": number,
    "pressure_in": number,
    "precip_mm": number,
    "precip_in": number,
    "humidity": number,
    "cloud": number,
    "feelslike_c": number,
    "feelslike_f": number,
    "windchill_c": number,
    "windchill_f": number,
    "heatindex_c": number,
    "heatindex_f": number,
    "dewpoint_c": number,
    "dewpoint_f": number,
    "vis_km": number,
    "vis_miles": number,
    "uv": number,
    "gust_mph": number,
    "gust_kph": number,
    "will_it_rain": number,
    "chance_of_rain": number,
    "will_it_snow": number,
    "chance_of_snow": number,
    "wetbulb_c": number,
    "wetbulb_f": number
}


export interface airQuality {
    "co": number,
    "no2": number,
    "o3": number,
    "so2": number,
    "pm2_5": number,
    "pm10": number,
    "us-epa-index": number,
    "gb-defra-index": number
}


interface currentDaraReq extends windDataReq, airQuality {
    "last_updated_epoch": number,
    "last_updated": string,
    "temp_c": number,
    "temp_f": number,
    "is_day": number,
    "condition": {
        "text": string,
        "icon": string,
        "code": number,
    },

    "short_rad": number,
    "diff_rad": number,
    "dni": number,
    "gti": number

}


export interface forecatsHour {
    "time_epoch": number,
    "time": string,
    "temp_c": number,
    "temp_f": number,
    "is_day": number,
    "condition": {
        "text": string,
        "icon": string,
        "code": number,
    },
    "wind_mph": number,
    "wind_kph": number,
    "wind_degree": number,
    "wind_dir": string,
    "pressure_mb": number,
    "pressure_in": number,
    "precip_mm": number,
    "precip_in": number,
    "snow_cm": number,
    "humidity": number,
    "cloud": number,
    "feelslike_c": number,
    "feelslike_f": number,
    "windchill_c": number,
    "windchill_f": number,
    "heatindex_c": number,
    "heatindex_f": number,
    "dewpoint_c": number,
    "dewpoint_f": number,
    "will_it_rain": number,
    "chance_of_rain": number,
    "will_it_snow": number,
    "chance_of_snow": number,
    "vis_km": number,
    "vis_miles": number
    "gust_mph": number,
    "gust_kph": number,
    "uv": number,
    "wetbulb_c": number,
    "wetbulb_f": number,
    "air_quality": {
        "co": number,
        "no2": number,
        "o3": number,
        "so2": number,
        "pm2_5": number,
        "pm10": number,
        "us-epa-index": number,
        "gb-defra-index": number
    },
    "short_rad": number,
    "diff_rad": number,
    "dni": number,
    "gti": number

}