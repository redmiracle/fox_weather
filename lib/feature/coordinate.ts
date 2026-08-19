
import {redirect} from "next/navigation";

export interface currentCoordinateType {
    lat: number;
    long: number;
}

export const currentCoordinate = async (): Promise<currentCoordinateType> => {

    return await new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const {latitude, longitude} = position.coords;
                    resolve({
                        lat: latitude,
                        long: longitude,
                    })
                },
                (error) => {
                    console.log(error);
                    redirect("http://localhost:3000/data")
                }
            )
        },
    );


}