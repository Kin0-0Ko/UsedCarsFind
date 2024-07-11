import {combineReducers, configureStore} from '@reduxjs/toolkit'
import FormSlice from './Reducesrs/FormSlice'
import CarsSlice from './Reducesrs/CarsSlice'
const rootReduser = combineReducers({
	form: FormSlice,
	cars: CarsSlice
})	

export const setUpStore = () => {
	return configureStore({
		reducer: rootReduser
	})
}

export type RootState = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setUpStore>
export type AppDistpatch = AppStore['dispatch']
