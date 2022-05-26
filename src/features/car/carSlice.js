import { createSlice } from '@reduxjs/toolkit';

const initialState =  {
    //array of objects
    cars: ["Model S", "Model 3", "Model X", "Model Y" ]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {} // functions that can be used to manipulate the state 
})

export const selectCars = state => state.car.cars

export default carSlice.reducer