import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Footer from './components/Footer/Footer.js';
import Create from './components/Pages/Create/Create.js';
import Home from './components/Pages/Home/Home.js';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Home title="Home" />} />
				<Route />
				<Route path="/create" element={<Create title="Create" />} />
				<Route />
			</Routes>
			<Footer />
		</>
	);
}
