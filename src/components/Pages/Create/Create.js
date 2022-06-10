import React from 'react';

import Form from '../../Form/Form.js';
import Header from '../../Header/Header.js';

export default function Create({title}) {
	return (
		<section>
			<Header title={title} />
			<Form />
		</section>
	);
}
