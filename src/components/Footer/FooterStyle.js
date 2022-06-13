import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.section`
	height: 4rem;
	position: fixed;
	bottom: 0;
	display: flex;
	justify-content: space-around;
	background-color: darkblue;
	width: 100%;
	font-size: 1.4rem;
`;

const FooterLink = styled(NavLink)`
	padding: 1em 0;
	list-style: none;
	text-decoration: none;
	color: ${({active}) => (active === 'true' ? 'lightblue' : 'white')};
	&:hover,
	&:active {
		transform: scale(1.1);
		color: lightblue;
	}
`;

export {FooterContainer, FooterLink};
