import React from 'react';
import {useState} from 'react';

import {
	FormContainer,
	FormInputText,
	FormInputSubmit,
	FormLabel,
	FormInputNumber,
} from './FormStyle.js';
export default function Form() {
	const [newName, setNewName] = useState('');
	const [newEmail, setNewEmail] = useState('');
	const [newAge, setNewAge] = useState(Number);
	const [text, setText] = useState('');

	const [{data, error}, setData] = useState({data: [], error: null});

	function fetchNewUserData(data) {
		fetch('/api/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				} else {
					return response.json();
				}
			})
			.then(data => {
				setData({
					data: data.data,
					error: null,
				});
			})
			.catch(error => {
				setData({
					data: [],
					error: error.message,
				});
			});
	}

	return (
		<section>
			<FormContainer
				onSubmit={event => {
					event.preventDefault();
					setText(newName);
					fetchNewUserData({
						name: newName,
						email: newEmail,
						age: newAge,
					});
					setNewName('');
					setNewEmail('');
					setNewAge('');
				}}
			>
				<FormLabel htmlFor="input-name">Name: </FormLabel>
				<FormInputText
					required
					id="inpute-Name"
					type="text"
					value={newName}
					onChange={event => {
						setNewName(event.target.value);
					}}
				/>
				<FormLabel htmlFor="input-email">Email: </FormLabel>
				<FormInputText
					required
					id="inpute-email"
					type="text"
					value={newEmail}
					onChange={event => {
						setNewEmail(event.target.value);
					}}
				/>
				<FormLabel htmlFor="input-age">Age: </FormLabel>
				<FormInputNumber
					required
					id="inpute-age"
					type="number"
					value={newAge === 0 ? '' : newAge}
					onChange={event => {
						setNewAge(event.target.value);
					}}
				/>
				<FormInputSubmit type="submit" value="create user" />
			</FormContainer>
			{text === '' ? '' : <p>The new User: {text} was added!</p>}
		</section>
	);
}
