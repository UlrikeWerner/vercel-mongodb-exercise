import React from 'react';
import {useState} from 'react';

export default function Form() {
	const [newName, setNewName] = useState('');
	const [newEmail, setNewEmail] = useState('');
	const [newAge, setNewAge] = useState('');
	const [text, setText] = useState([]);

	return (
		<section>
			<form
				onSubmit={event => {
					event.preventDefault();
					//addToDo to the DB
					setText({Name: newName, Email: newEmail, Age: newAge});

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
					value={newAge}
					onChange={event => {
						setNewAge(event.target.value.toString());
					}}
				/>
				<input type="submit" value="create user" />
			</form>
			<p>
				Name: {text.Name}, Email: {text.Email}, Age: {text.Age}
			</p>
		</section>
	);
}
