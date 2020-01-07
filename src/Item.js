import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ className, index, isCompleted, completeItem, deleteItem, todo }) => (
	<div className={className}>
		{todo.text}
		{
			isCompleted 
				? 
				<button onClick={() => deleteItem(index)}>Delete</button> 
				: 
				<button onClick={() => completeItem(index)}>Done</button>
		}
		
	</div>
);

Item.propTypes = {
	className: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	isCompleted: PropTypes.bool.isRequired,
	completeItem: PropTypes.func.isRequired,
	deleteItem: PropTypes.func.isRequired,
	todo: PropTypes.object.isRequired,
}

export default Item;