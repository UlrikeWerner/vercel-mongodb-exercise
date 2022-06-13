import styled from 'styled-components';

const FormContainer = styled.form`
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: 1fr 1fr;
	justify-items: start;
	row-gap: 0.25rem;
	padding-bottom: 0.2rem;
	padding-top: 0.2rem;
`;

const FormLabel = styled.label`
	margin-left: 1rem;
`;

const FormInputText = styled.input`
	justify-self: stretch;
	margin-right: 1rem;
`;

const FormInputNumber = styled.input`
	justify-self: self-start;
	margin-right: 1rem;
`;

const FormInputSubmit = styled.input`
	justify-self: start;
	margin-left: 1rem;
	margin-top: 0.5rem;
	&:hover,
	&:active {
		transform: scale(1.1);
		background-color: lightblue;
	}
`;

export {FormContainer, FormInputText, FormInputSubmit, FormLabel, FormInputNumber};
