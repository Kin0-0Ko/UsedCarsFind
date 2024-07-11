import React, { FC } from 'react';
import './CarSearch.css';
import { useAppSelector } from '../../hooks/redux';
import { useDispatch } from 'react-redux';
import { changeSearchTerm } from '../../Store/Reducesrs/CarsSlice';

interface CarSearchProps {}

const CarSearch: FC<CarSearchProps> = () => {
	const dispatch = useDispatch()
	const {searchTerm} = useAppSelector(store => store.cars)
	const handleSearchTermChenge = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(changeSearchTerm(event.target.value))
	}
 
 return <div className="list-header">
	<h3 className="title is-3">My Cars</h3>
	<div className="search field is-horizontal">
		<label className='label'>Search</label>
		<input 
		type="text" 
		className='input' 
		value={searchTerm}
		onChange={handleSearchTermChenge}
		/>
	</div>
  </div>
};

export default CarSearch;
