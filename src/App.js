import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {GlobalStyle} from './styles';

import Home from './components/Home/Home.js';

export default function App() {
	return (
		<>
			<GlobalStyle />
			{/*<div>
				<Exercise1 />
				<hr />
				<Exercise2 />
				<hr />
				<Exercise3 />
				<hr />
				<Exercise4 />
			</div>*/}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route />
			</Routes>
		</>
	);
}
