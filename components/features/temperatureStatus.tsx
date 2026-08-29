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
    console.log(deltaTemp)
    const step=weight/deltaTemp
    console.log(step)

    const paddingStart=(Number(dataWeekTemperature.minTemperature)-Number(dataWeekTemperature.minTempWeek))*step
    console.log(paddingStart)
    const paddingEnd=weight-(Number(dataWeekTemperature.maxTemperature)-Number(dataWeekTemperature.minTempWeek))*step
    console.log(paddingEnd)


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