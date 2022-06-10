import React from 'react';

export default function User({user}) {
	const name = 'Bob';
	return (
		<section>
			<h2>{user.name}</h2>
			<button type="button">Details</button>
		</section>
	);
}
