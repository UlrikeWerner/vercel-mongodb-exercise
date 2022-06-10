import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';

export default function Footer() {
	const location = useLocation();
	return (
		<section>
			<NavLink to="/" active={(location.pathname === '/').toString()}>
				Home
			</NavLink>
			<NavLink to="/" active={(location.pathname === '/create').toString()}>
				Create
			</NavLink>
		</section>
	);
}
