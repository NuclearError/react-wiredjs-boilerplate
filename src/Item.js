import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ todo }) => (
	<div className="item">
		{todo.text}
	</div>
);

Item.propTypes = {
	todo: PropTypes.object.isRequired,
}

export default Item;