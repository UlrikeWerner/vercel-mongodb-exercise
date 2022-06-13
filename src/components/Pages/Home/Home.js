import React from 'react';
import {useState, useEffect} from 'react';

import Header from '../../Header/Header.js';
import User from '../../User/User.js';

export default function Home({title}) {
	const [{data, error}, setData] = useState({data: [], error: null});

	function fetchUsers() {
		fetch('/api/users')
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

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<section>
			<Header title={title} />
			{data.map(user => {
				return <User key={user._id} user={user} />;
			})}
		</section>
	);
}
