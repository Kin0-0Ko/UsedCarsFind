import React, { FC } from 'react';
import './CarValue.css';
import { useAppSelector } from '../../hooks/redux';

interface CarValueProps {}

const CarValue: FC<CarValueProps> = () => {
const totalCost = useAppSelector(({cars: {cars, searchTerm}}) => 
	 cars.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
	.reduce((acc, car) => acc + car.cost, 0)
)

return <div className="car-value">
     Total Cost: ${totalCost}
  </div>
};

export default CarValue;
