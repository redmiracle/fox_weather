import {weatherData} from "@/costants/types";

export const dataJson: weatherData = {
    "preview": {
        "current": {
            "name": "London",
            "temperature": "+18°C",
            "wind": "12 km/h",
            "pressure": "1015 mb",
            "feelsLike": "+17°C",
            "maxTemp": "+20°C",
            "minTemp": "+12°C",
            "condition": {
                "text": "Partly cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                "code": "1003"
            }
        },
        "forecast": [
            {
                "time": "00",
                "temperature": 14,
                "condition": {"text": "Clear", "icon": "cdn.weatherapi.com/weather/64x64/night/113.png", "code": 1000}
            },
            {
                "time": "01",
                "temperature": 14,
                "condition": {"text": "Clear", "icon": "cdn.weatherapi.com/weather/64x64/night/113.png", "code": 1000}
            },
            {
                "time": "02",
                "temperature": 13,
                "condition": {"text": "Clear", "icon": "cdn.weatherapi.com/weather/64x64/night/113.png", "code": 1000}
            },
            {
                "time": "03",
                "temperature": 13,
                "condition": {"text": "Clear", "icon": "cdn.weatherapi.com/weather/64x64/night/113.png", "code": 1000}
            },
            {
                "time": "04",
                "temperature": 12,
                "condition": {"text": "Clear", "icon": "cdn.weatherapi.com/weather/64x64/night/113.png", "code": 1000}
            },
            {
                "time": "05",
                "temperature": 12,
                "condition": {
                    "text": "Partly cloudy",
                    "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
                    "code": 1003
                }
            },
            {
                "time": "06",
                "temperature": 13,
                "condition": {"text": "Sunny", "icon": "cdn.weatherapi.com/weather/64x64/day/113.png", "code": 1000}
            },
            {
                "time": "07",
                "temperature": 14,
                "condition": {"text": "Sunny", "icon": "cdn.weatherapi.com/weather/64x64/day/113.png", "code": 1000}
            },
            {
                "time": "08",
                "temperature": 15,
                "condition": {"text": "Sunny", "icon": "cdn.weatherapi.com/weather/64x64/day/113.png", "code": 1000}
            },
            {
                "time": "09",
                "temperature": 16,
                "condition": {
                    "text": "Partly cloudy",
                    "icon": "cdn.weatherapi.com/weather/64x64/day/116.png",
                    "code": 1003
                }
            },
            {
                "time": "10",
                "temperature": 17,
                "condition": {
                    "text": "Partly cloudy",
                    "icon": "cdn.weatherapi.com/weather/64x64/day/116.png",
                    "code": 1003
                }
            },
            {
                "time": "11",
                "temperature": 18,
                "condition": {
                    "text": "Partly cloudy",
                    "icon": "cdn.weatherapi.com/weather/64x64/day/116.png",
                    "code": 1003
                }
            },
            {
                "time": "12",
                "temperature": 19,
                "condition": {"text": "Cloudy", "icon": "cdn.weatherapi.com/weather/64x64/day/119.png", "code": 1006}
            },
            {
                "time": "13",
                "temperature": 20,
                "condition": {"text": "Cloudy", "icon": "cdn.weatherapi.com/weather/64x64/day/119.png", "code": 1006}
            },
            {
                "time": "14",
                "temperature": 20,
                "condition": {
                    "text": "Patchy rain nearby",
                    "icon": "cdn.weatherapi.com/weather/64x64/day/176.png",
                    "code": 1063
                }
            },
            {
                "time": "15",
                "temperature": 19,
                "condition": {
                    "text": "Patchy rain nearby",
                    "icon": "cdn.weatherapi.com/weather/64x64/day/176.png",
                    "code": 1063
                }
            },
            {
                "time": "16",
                "temperature": 18,
                "condition": {
                    "text": "Light rain",
                    "icon": "cdn.weatherapi.com/weather/64x64/day/296.png",
                    "code": 1183
                }
            },
            {
                "time": "17",
                "temperature": 18,
                "condition": {
                    "text": "Partly cloudy",
                    "icon": "cdn.weatherapi.com/weather/64x64/day/116.png",
                    "code": 1003
                }
            },
            {
                "time": "18",
                "temperature": 17,
                "condition": {"text": "Sunny", "icon": "cdn.weatherapi.com/weather/64x64/day/113.png", "code": 1000}
            },
            {
                "time": "19",
                "temperature": 16,
                "condition": {"text": "Sunny", "icon": "cdn.weatherapi.com/weather/64x64/day/113.png", "code": 1000}
            },
            {
                "time": "20",
                "temperature": 15,
                "condition": {"text": "Clear", "icon": "cdn.weatherapi.com/weather/64x64/night/113.png", "code": 1000}
            },
            {
                "time": "21",
                "temperature": 15,
                "condition": {"text": "Clear", "icon": "cdn.weatherapi.com/weather/64x64/night/113.png", "code": 1000}
            },
            {
                "time": "22",
                "temperature": 14,
                "condition": {"text": "Clear", "icon": "cdn.weatherapi.com/weather/64x64/night/113.png", "code": 1000}
            },
            {
                "time": "23",
                "temperature": 14,
                "condition": {"text": "Clear", "icon": "cdn.weatherapi.com/weather/64x64/night/113.png", "code": 1000}
            }
        ],
        "week": {
            "temperature": {
                "minTempWeek": "+10°C",
                "maxTempWeek": "+24°C",
                "days": [
                    {
                        "day": "Mon",
                        "image": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                        "minTemperature": "+12°C",
                        "maxTemperature": "+20°C",
                        "moon": {
                            "moonIllumination": 85,
                            "moon_phase": "Waxing Gibbous",
                            "isMoonUp": 1,
                            "dayBeforeNewMoon": 4
                        },
                        "sun": {
                            "sunrise": "05:12",
                            "sunset": "20:45",
                            "firstLight": "04:30 AM",
                            "lastLight": "09:27 PM"
                        }
                    },
                    {
                        "day": "Tue",
                        "image": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                        "minTemperature": "+10°C",
                        "maxTemperature": "+22°C",
                        "moon": {
                            "moonIllumination": 92,
                            "moon_phase": "Full Moon",
                            "isMoonUp": 1,
                            "dayBeforeNewMoon": 3
                        },
                        "sun": {
                            "sunrise": "05:14 AM",
                            "sunset": "08:43 PM",
                            "firstLight": "04:32 AM",
                            "lastLight": "09:25 PM"
                        }
                    },
                    {
                        "day": "Wed",
                        "image": "//cdn.weatherapi.com/weather/64x64/day/176.png",
                        "minTemperature": "+11°C",
                        "maxTemperature": "+19°C",
                        "moon": {
                            "moonIllumination": 97,
                            "moon_phase": "Full Moon",
                            "isMoonUp": 1,
                            "dayBeforeNewMoon": 2
                        },
                        "sun": {
                            "sunrise": "05:15 AM",
                            "sunset": "08:42 PM",
                            "firstLight": "04:33 AM",
                            "lastLight": "09:24 PM"
                        }
                    },
                    {
                        "day": "Thu",
                        "image": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                        "minTemperature": "+13°C",
                        "maxTemperature": "+24°C",
                        "moon": {
                            "moonIllumination": 100,
                            "moon_phase": "Full Moon",
                            "isMoonUp": 1,
                            "dayBeforeNewMoon": 1
                        },
                        "sun": {
                            "sunrise": "05:17 AM",
                            "sunset": "08:40 PM",
                            "firstLight": "04:35 AM",
                            "lastLight": "09:22 PM"
                        }
                    },
                    {
                        "day": "Fri",
                        "image": "//cdn.weatherapi.com/weather/64x64/day/119.png",
                        "minTemperature": "+14°C",
                        "maxTemperature": "+21°C",
                        "moon": {
                            "moonIllumination": 96,
                            "moon_phase": "Waning Gibbous",
                            "isMoonUp": 0,
                            "dayBeforeNewMoon": 0
                        },
                        "sun": {
                            "sunrise": "05:18 AM",
                            "sunset": "08:38 PM",
                            "firstLight": "04:36 AM",
                            "lastLight": "09:20 PM"
                        }
                    },
                    {
                        "day": "Sat",
                        "image": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                        "minTemperature": "+12°C",
                        "maxTemperature": "+23°C",
                        "moon": {
                            "moonIllumination": 90,
                            "moon_phase": "Waning Gibbous",
                            "isMoonUp": 0,
                            "dayBeforeNewMoon": 28
                        },
                        "sun": {
                            "sunrise": "05:20 AM",
                            "sunset": "08:37 PM",
                            "firstLight": "04:38 AM",
                            "lastLight": "09:18 PM"
                        }
                    },
                    {
                        "day": "Sun",
                        "image": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                        "minTemperature": "+13°C",
                        "maxTemperature": "+22°C",
                        "moon": {
                            "moonIllumination": 82,
                            "moon_phase": "Waning Gibbous",
                            "isMoonUp": 0,
                            "dayBeforeNewMoon": 27
                        },
                        "sun": {
                            "sunrise": "05:21 AM",
                            "sunset": "08:35 PM",
                            "firstLight": "04:39 AM",
                            "lastLight": "09:16 PM"
                        }
                    }
                ]
            }
        }
    }
}
