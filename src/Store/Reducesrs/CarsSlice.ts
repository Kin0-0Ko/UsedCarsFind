import {createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

interface Car{
	name: string
	cost: number
	id: string
}

interface CarsSlice{
	searchTerm: string
	cars: Car[]
}



const initialState: CarsSlice = {
	searchTerm: '',
	cars: []
};

const carsSlice = createSlice({

name: 'Form',
initialState,
reducers: {
	changeSearchTerm(state, action: PayloadAction<string>){
		state.searchTerm = action.payload
	},
	addCar(state, action: PayloadAction<Car>){
		state.cars.push({...action.payload, id: nanoid()})
	},
	removeCar(state, action: PayloadAction<string>){
		state.cars = state.cars.filter(car => {
			return car.id !== action.payload
		})
	},

}
})

export default carsSlice.reducer;
export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions