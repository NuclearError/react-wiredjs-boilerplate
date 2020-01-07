import React, {useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Form({ addNewItem }) {
	const [value, setValue] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		if (!value) return;
		addNewItem(value);
		setValue("");
	};

	return (
		<form>
			<input
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<button type="submit" onClick={e => handleSubmit(e)}>Add</button>
		</form>
	);
}

Form.propTypes = {
	addNewItem: PropTypes.func.isRequired,
}

export default Form;