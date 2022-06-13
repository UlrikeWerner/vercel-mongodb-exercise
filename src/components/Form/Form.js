import React from 'react';
import {useState} from 'react';

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
			<form
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
				<label htmlFor="input-name">Name: </label>
				<input
					required
					id="inpute-Name"
					type="text"
					value={newName}
					onChange={event => {
						setNewName(event.target.value);
					}}
				/>
				<label htmlFor="input-email">Email: </label>
				<input
					required
					id="inpute-email"
					type="text"
					value={newEmail}
					onChange={event => {
						setNewEmail(event.target.value);
					}}
				/>
				<label htmlFor="input-age">Age: </label>
				<input
					required
					id="inpute-age"
					type="number"
					value={newAge === 0 ? '' : newAge}
					onChange={event => {
						setNewAge(event.target.value);
					}}
				/>
				<input type="submit" value="create user" />
			</form>
			{text === '' ? '' : <p>The new User: {text} was added!</p>}
		</section>
	);
}
