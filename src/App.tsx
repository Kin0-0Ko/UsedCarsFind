import React from 'react';
import './App.css';
import CarSearch from './components/CarSearch/CarSearch';
import CarForm from './components/CarForm/CarForm';
import CarList from './components/CarList/CarList';
import CarValue from './components/CarValue/CarValue';

function App() {
  return <div className='container is-fluid'>
	<CarForm/>
	<CarSearch/>
	<CarList/>
	<CarValue/>

  </div>
}

export default App;
