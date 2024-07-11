import {createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addCar } from './CarsSlice';

interface FormSlice{
	name: string
	cost: number
}


const initialState: FormSlice = {
	name: '',
	cost: 0
};

const formSlice = createSlice({

name: 'Form',
initialState,
reducers: {
	changeName(state, action: PayloadAction<string>){
		state.name = action.payload;
	},
	changeCost(state, action: PayloadAction<number>){
		state.cost = action.payload
	}


},
extraReducers(build){
	build.addCase(addCar, (state) => {
		state.name = '';
		state.cost = 0;
	})
}
})

export default formSlice.reducer;
export const {changeName, changeCost} = formSlice.actions