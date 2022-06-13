import styled from 'styled-components';

const UserContainer = styled.section`
	display: flex;
	justify-content: space-between;
	border: 1px solid black;
	margin: 0.2rem;
	font-size: 0.8rem;
	h2 {
		margin: 0.5rem 0.2rem;
	}
`;

const ButtonStyle = styled.button`
	margin: 0.5rem 0.2rem;
	&:hover,
	&:active {
		transform: scale(1.1);
		background-color: lightblue;
	}
`;

export {UserContainer, ButtonStyle};
