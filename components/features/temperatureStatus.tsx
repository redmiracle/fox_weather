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
        }} className={"bg-black20 rounded-lg py-[1px]"}>
            <div className={`bg-gradient-to-r from-red-400 to-red-600 h-2 rounded-lg`}></div>
        </div>
    )
}