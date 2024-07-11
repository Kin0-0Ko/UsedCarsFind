import React, { FC } from 'react';
import './CarList.css';
import { useAppSelector } from '../../hooks/redux';
import { useDispatch } from 'react-redux';
import { removeCar } from '../../Store/Reducesrs/CarsSlice';

interface CarListProps {}

const CarList: FC<CarListProps> = () => {
	const dispatch = useDispatch()
	const {cars, name} = useAppSelector(({form, cars: {cars, searchTerm}}) => {
		return {cars: cars.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase())), name: form.name}
	})
	const handleCarDelete = (id: string) =>{
		dispatch(removeCar(id))
	}
 
 return <div className="car-list">
   {cars.map(car =>{
	const bold = name && car.name.toLowerCase().includes(name.toLowerCase())
	
	return <div key={car.id} className={`panel ${bold && 'bold'}`}>
		<p>
			{car.name} - ${car.cost}
		</p>
		<button
		onClick={() => handleCarDelete(car.id)}
		className="button is-danger">
			Delete
		</button>
   </div>
   })}
   <hr />
  </div>
};

export default CarList;
