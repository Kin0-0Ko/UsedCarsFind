import React, { FC } from 'react';
import './CarForm.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeCost, changeName } from '../../Store/Reducesrs/FormSlice';
import { addCar } from '../../Store/Reducesrs/CarsSlice';

interface CarFormProps {}

const CarForm: FC<CarFormProps> = () => {
	const dispatch = useAppDispatch();
	const {name, cost} = useAppSelector(store => store.form)

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(changeName(event.target.value))
	}

	const handleCostChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(changeCost(parseInt(event.target.value)) || 0)
	}
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		dispatch(addCar({name, cost, id: 'id'}))
	}

	return <div className='car-form panel'>
		<h4 className="subtitle is-3">Add car</h4>
		<form onSubmit={handleSubmit}>
			<div className="field-group">

				<div className="field">
					<label className='label'>Name</label>
					<input type="text" className='input is-expended'
						value={name}
						onChange={handleNameChange}
					/>
				</div>

				<div className="field">
					<label className='label'>Cost</label>
					<input type="number" className='input is-expended'
						value={cost || ''}
						onChange={handleCostChange}
					/>
				</div>

			</div>
			<div className="field">
				<button className="button is-link">Submit</button>
			</div>
		</form>
	</div>
};

export default CarForm;
