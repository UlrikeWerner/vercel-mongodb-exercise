import React from 'react';
import {useLocation} from 'react-router-dom';

import {FooterContainer, FooterLink} from './FooterStyle';

export default function Footer() {
	const location = useLocation();
	return (
		<FooterContainer>
			<FooterLink to="/" active={(location.pathname === '/').toString()}>
				Home
			</FooterLink>
			<FooterLink to="/create" active={(location.pathname === '/create').toString()}>
				Create
			</FooterLink>
		</FooterContainer>
	);
}
