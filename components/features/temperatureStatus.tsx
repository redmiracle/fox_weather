interface Props {
    dataWeekTemperature: {
        "minTempWeek": string,
        "maxTempWeek": string,
        "minTemperature": string,
        "maxTemperature": string,

    }

}


export default function TemperatureStatus({dataWeekTemperature}: Props) {
    const weight = 108.5
    const deltaTemp = Number(dataWeekTemperature.maxTempWeek) - Number(dataWeekTemperature.minTempWeek)
    const step = weight / deltaTemp
    const paddingStart = (Number(dataWeekTemperature.minTemperature) - Number(dataWeekTemperature.minTempWeek)) * step
    const paddingEnd = weight - (Number(dataWeekTemperature.maxTemperature) - Number(dataWeekTemperature.minTempWeek)) * step


    return (
        <div style={{
            width: `${weight}px`,
            paddingLeft: `${paddingStart}px`,
            paddingRight: `${paddingEnd}px`,
        }} className={"bg-black"}>
            <div className={`bg-red-400 h-2`}></div>
        </div>
    )
}