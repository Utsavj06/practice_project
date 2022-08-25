export const getGym = (myData) => {
    return {
        type : "Get_Gym",
        payload : {
            Data : myData
        }
    }
}

export const getLocation = (myData) => {
    return {
        type : "Get_Location",
        payload : {
            Data : myData
        }
    }
}