import React from 'react';

import {UserContainer, ButtonStyle} from './UserStyle';

export default function User({user}) {
	const name = 'Bob';
	return (
		<UserContainer>
			<h2>{user.name}</h2>
			<ButtonStyle type="button">Details</ButtonStyle>
		</UserContainer>
	);
}
