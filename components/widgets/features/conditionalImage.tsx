import {CloudFog, CloudMoon, CloudMoonRain, CloudSnow, CloudSun, CloudSunRain, Cloudy, Moon, Sun} from "lucide-react";

export interface Props {
    status: string;
    isDay: boolean;
}


export default function ConditionalImage({status, isDay}: Props) {
    const statusNumber = parseInt(status);
    const width = 28
    const height = 28
    const colorSun = "#8cdf49"
    const colorMoon = "#ffffff"



    switch (statusNumber) {
        case 1000:
            return (
                isDay ?
                    <Sun color={colorSun} width={width} height={height}/>
                    :
                    <Moon color={colorMoon} width={width} height={height}/>
            )
        case 1003:
            return (
                isDay ?
                    <CloudSun color={colorSun} width={width} height={height}/>
                    :
                    <CloudMoon color={colorMoon} width={width} height={height}/>
            )

        case 1006 : case 1009:
            return (
                <Cloudy color={colorMoon} width={width} height={height}/>
            )


        case 1030: case 1135: case 1147:

            return (
                <CloudFog color={colorMoon} width={width} height={height}/>

            )


        case 1063: case 1180: case 1183 : case 1189: case 1192: case 1195: case 1240: case 1243: case 1246:
            return (
                isDay ?
                    <CloudSunRain color={colorSun} width={width} height={height}/>
                    :
                    <CloudMoonRain color={colorMoon} width={width} height={height}/>
            )


        case 1066: case 1210: case 1213: case 1216: case 1219: case 1222: case 1225: case 1255: case 1258:
        case 1087: case 1273: case 1279: case 1282:
            return (
                <CloudSnow color={colorMoon} width={width} height={height}/>

            )



    }


}